import {partida} from "./modelo";

export const deshabilitarBotonPedirCarta = (estaDeshabilitado: boolean) => {
    const botonPedirCarta = document.getElementById('pideCarta');
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
      botonPedirCarta.disabled = estaDeshabilitado;
    }
  }
export const mostrarMensaje = (mensaje: string) => {
    const elementoPunto = document.getElementById('puntos');
    if (elementoPunto && elementoPunto instanceof HTMLDivElement) {
      elementoPunto.innerText = mensaje;
    }
  }
export const pintarPuntosCarta = () => {
    const elementoPunto = document.getElementById('puntos');
    if (elementoPunto && elementoPunto instanceof HTMLDivElement) {
      elementoPunto.innerText = `Tu puntuación es ${partida.totalPuntos}`
    }
  }
export const pintarCarta = (urlCarta: string) => {
    const elementoIMG = document.getElementById('carta');
    if(elementoIMG && elementoIMG instanceof HTMLImageElement) {
      elementoIMG.src = urlCarta
    }
  }

export  const checkearPartida = () => {
    if (partida.totalPuntos === 7.5) {
      mostrarMensaje('Has ganado la partida');
    }
    if (partida.totalPuntos > 7.5) {
      mostrarMensaje('Has perdido, paquete');
    }
  }