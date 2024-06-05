import {partida} from "./modelo";

export const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10)
  }

export  const generarNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio +2;
    }
    return numeroAleatorio;
  }
  
export const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
      return 0.5;
    }
    return carta;
  }
  
export const sumarPuntos = (puntos: number) => {
    return partida.totalPuntos + puntos;
  }
  
export const actualizarPuntos = (puntosActualizados: number) => {
    partida.totalPuntos = puntosActualizados;
  }

export const obtenerURLcarta = (carta: number) => {
    switch (carta){
      case 1:
      return "src/img/baraja-svg/1_as-copas.svg";
    case 2:
      return "src/img/baraja-svg/2_dos-copas.svg";
    case 3:
      return  "src/img/baraja-svg/3_tres-copas.svg";
    case 4:
      return "src/img/baraja-svg/4_cuatro-copas.svg";
    case 5:
      return "src/img/baraja-svg/5_cinco-copas.svg";
    case 6:
      return  "src/img/baraja-svg/6_seis-copas.svg";
    case 7:
      return "src/img/baraja-svg/7_siete-copas.svg";
    case 10:
      return "src/img/baraja-svg/10_sota-copas.svg";
    case 11:
      return  "src/img/baraja-svg/11_caballo-copas.svg";
    case 12:
      return  "src/img/baraja-svg/12_rey-copas.svg";
    default:
      return "src/img/baraja-svg/back-1.svg";
    }
  }

export  const mostrarResultadoMeHePlantado = (): string => {
    if (partida.totalPuntos <= 4) {
      return `Has sido muy conservador ${partida.totalPuntos}`;
    }
    if (partida.totalPuntos === 5) {
      return `Te ha entrado el canguele ${partida.totalPuntos}`;
    }
    if (partida.totalPuntos >= 6 && partida.totalPuntos < 7.5) {
      return `Casi, casi... ${partida.totalPuntos}`;
    }
    if (partida.totalPuntos === 7.5) {
      return `Las has clavado chaval ${partida.totalPuntos}`;
    }
    if (partida.totalPuntos > 7.5) {
      return `Te has pasado chavalín ${partida.totalPuntos}`;
    }
    return `No deberías de pasar por aquí`;
  };