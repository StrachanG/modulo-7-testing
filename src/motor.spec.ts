import { describe, it, expect, vi } from "vitest";
import { 
    generarNumeroAleatorio,
    generarNumeroCarta,
    obtenerURLcarta,
    obtenerPuntosCarta,
    sumarPuntos,
    actualizarPuntos,
    mostrarResultadoMeHePlantado,
 } from "./motor";

import { partida } from "./modelo";



describe("generarNumeroAleatorio", () => {

    it("MathRandom lo forzamos a que devuelva 3, y debería de dar el numero 3", () => {

        //Arrange
        const numeroEsperado = 3;

        vi.spyOn(global.Math, "random").mockReturnValue(0.3);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);

    });

    it("MathRandom lo forzamos a que devuelva 0.6, y debería de dar el numero 6", () => {

        //Arrange
        const numeroEsperado = 6;
        vi.spyOn(global.Math, "random").mockReturnValue(0.6);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);

    });

    it("MathRandom lo forzamos a que devuelva 0.9, y debería de dar el numero 9", () => {

        //Arrange
        const numeroEsperado = 9;
        vi.spyOn(global.Math, "random").mockReturnValue(0.9);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);

    });

    it("MathRandom lo forzamos a que devuelva 0.1, y debería de dar el numero 1", () => {

        //Arrange
        const numeroEsperado = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(0.1);

        //Act
        const resultado = generarNumeroAleatorio();

        //Assert
        expect(resultado).toBe(numeroEsperado);

    });
});

describe("generarNumeroCarta", () => {

    // Test para el número 5

    it("Debería devolver el número original si es 7 o menos", () => {

        //Arrange
        const numeroAleatorio = 5;

        //Act
        const resultado = generarNumeroCarta(numeroAleatorio);

        //Assert
        expect(resultado).toBe(numeroAleatorio);

    });

    // Test para el número 7

    it("Debería devolver el número original si es 7 o menos", () => {

        //Arrange
        const numeroAleatorio = 7;

        //Act
        const resultado = generarNumeroCarta(numeroAleatorio);

        //Assert
        expect(resultado).toBe(numeroAleatorio);

    });

    // Test para el número 8

    it("Debería devolver el número original más 2 si es mayor que 7", () => {

        {
            // Arrange
            const numeroAleatorio = 8;
            const numeroEsperado = 10;
            // Act
            const resultado = generarNumeroCarta(numeroAleatorio);
            // Assert
            expect(resultado).toBe(numeroEsperado);
        }

    });
});

describe("obtenerPuntosCarta", () => {
    it("Debería devolver 0.5 si la carta es mayor que 7", () => {

        // Arrange
        const carta = 10;
        const puntosEsperados = 0.5;

        // Act
        const resultado = obtenerPuntosCarta(carta);

        // Assert
        expect(resultado).toBe(puntosEsperados);
    });

    it("Debería devolver el valor de la carta si es 7 o menor", () => {

        // Arrange
        const carta = 7;
        const puntosEsperados = 7;

        // Act
        const resultado = obtenerPuntosCarta(carta);

        // Assert
        expect(resultado).toBe(puntosEsperados);
    });

    it("Debería devolver el valor de la carta si es 7 o menor", () => {

        // Arrange
        const carta = 1;
        const puntosEsperados = 1;

        // Act
        const resultado = obtenerPuntosCarta(carta);

        // Assert
        expect(resultado).toBe(puntosEsperados);
    });
});

describe("obtenerURLcarta", () => {

    it("Debería devolver la URL correcta para cada carta", () => {
        // Test para la carta 1
        {
            // Arrange
            const carta = 1;
            const urlEsperada = "src/img/baraja-svg/1_as-copas.svg";
            // Act
            const resultado = obtenerURLcarta(carta);
            // Assert
            expect(resultado).toBe(urlEsperada);
        }
    });

    it("Debería devolver la URL correcta para cada carta", () => {
        // Test para la carta 1
        {
            // Arrange
            const carta = 7;
            const urlEsperada = "src/img/baraja-svg/7_siete-copas.svg";
            // Act
            const resultado = obtenerURLcarta(carta);
            // Assert
            expect(resultado).toBe(urlEsperada);
        }
    });

    it("Debería devolver la URL correcta para cada carta", () => {
        // Test para la carta 1
        {
            // Arrange
            const carta = 3;
            const urlEsperada = "src/img/baraja-svg/3_tres-copas.svg";
            // Act
            const resultado = obtenerURLcarta(carta);
            // Assert
            expect(resultado).toBe(urlEsperada);
        }
    });

});

describe("sumarPuntos", () => {

    it("Debería devolver la URL correcta para cada carta", () => {
        // Test para la carta 1
        {
            // Arrange
            partida.totalPuntos = 0;
            const puntosSumar = 2;
            const puntosEsperados = partida.totalPuntos + puntosSumar;
            // Act
            const resultado = sumarPuntos(puntosSumar);
            // Assert
            expect(resultado).toBe(puntosEsperados);
        }
    });

    it("Debería devolver la URL correcta para cada carta", () => {
        // Test para la carta 1
        {
            // Arrange
            partida.totalPuntos = 3.5;
            const puntosSumar = 4;
            const puntosEsperados = partida.totalPuntos + puntosSumar;
            // Act
            const resultado = sumarPuntos(puntosSumar);
            // Assert
            expect(resultado).toBe(puntosEsperados);
        }
    });

});

describe("actualizarPuntos", () => {
    it("Debería actualizar los puntos correctamente", () => {
        // Test para actualizar puntos a 5
        {
            // Arrange
            const puntosActualizados = 5;
            // Act
            actualizarPuntos(puntosActualizados);
            // Assert
            expect(partida.totalPuntos).toBe(puntosActualizados);
        }
    });


    it("Debería actualizar los puntos correctamente", () => {
        // Test para actualizar puntos a 10
        {
            // Arrange
            const puntosActualizados = 10;
            // Act
            actualizarPuntos(puntosActualizados);
            // Assert
            expect(partida.totalPuntos).toBe(puntosActualizados);
        }
        });
    
});

describe("mostrarResultadoMeHePlantado", () => {
    it("Debería mostrar el resultado correcto para los puntos acumulados", () => {
        // Test para totalPuntos <= 4
        {
            // Arrange
            partida.totalPuntos = 4;
            const resultadoEsperado = `Has sido muy conservador ${partida.totalPuntos}`;
            // Act
            const resultado = mostrarResultadoMeHePlantado();
            // Assert
            expect(resultado).toBe(resultadoEsperado);
        }
    });

    it("Debería mostrar el resultado correcto para los puntos acumulados", () => {
        // Test para totalPuntos === 5
        {
            // Arrange
            partida.totalPuntos = 5;
            const resultadoEsperado = `Te ha entrado el canguele ${partida.totalPuntos}`;
            // Act
            const resultado = mostrarResultadoMeHePlantado();
            // Assert
            expect(resultado).toBe(resultadoEsperado);
        }
    });


    it("Debería mostrar el resultado correcto para los puntos acumulados", () => {
        // Test para totalPuntos >= 6
        {
            // Arrange
            partida.totalPuntos = 6;
            const resultadoEsperado = `Casi, casi... ${partida.totalPuntos}`;
            // Act
            const resultado = mostrarResultadoMeHePlantado();
            // Assert
            expect(resultado).toBe(resultadoEsperado);
        }
    });


    it("Debería mostrar el resultado correcto para los puntos acumulados", () => {
            // Test para totalPuntos === 7.5
            {
                // Arrange
                partida.totalPuntos = 7.5;
                const resultadoEsperado = `Las has clavado chaval ${partida.totalPuntos}`;
                // Act
                const resultado = mostrarResultadoMeHePlantado();
                // Assert
                expect(resultado).toBe(resultadoEsperado);
            }
    });


    it("Debería mostrar el resultado correcto para los puntos acumulados", () => {

        // Test para totalPuntos fuera de los rangos anteriores
            {
                // Arrange
                partida.totalPuntos = 10;
                const resultadoEsperado = `Te has pasado chavalín ${partida.totalPuntos}`;
                // Act
                const resultado = mostrarResultadoMeHePlantado();
                // Assert
                expect(resultado).toBe(resultadoEsperado);
            }

    });

});