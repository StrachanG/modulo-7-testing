import {generarNumeroAleatorio, generarNumeroCarta, obtenerPuntosCarta, sumarPuntos, actualizarPuntos, obtenerURLcarta, mostrarResultadoMeHePlantado} from "./motor";
import {deshabilitarBotonPedirCarta, mostrarMensaje, pintarPuntosCarta, pintarCarta, checkearPartida} from "./ui";


const pedirCarta = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerURLcarta(carta);
  pintarCarta(urlCarta);
  const puntos = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntos);
  actualizarPuntos(puntosSumados);
  pintarPuntosCarta();
  checkearPartida();
};

const plantarse = () => {
const mensajeMePlanto = mostrarResultadoMeHePlantado();
mostrarMensaje(mensajeMePlanto);
deshabilitarBotonPedirCarta(true);
}

const botonPedirCarta = document.getElementById('pideCarta');
if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
  botonPedirCarta.addEventListener('click', pedirCarta);
};

const botonPlantarse = document.getElementById('mePlanto');
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener('click', plantarse)
}