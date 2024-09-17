// Función para verificar si un número es primo
function esPrimo(numero) {
    // Un número menor que 2 no es primo
    if (numero < 2) {
        return false;
    }

    // Verificar si el número es divisible por algún número desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    // Si no se encontró ningún divisor, el número es primo
    return true;
}

// Función principal para solicitar el número al usuario y verificar si es primo
function verificarNumeroPrimo() {
    // Solicitar al usuario que ingrese un número
    const numero = prompt("Ingresa un número:");

    // Convertir la entrada a un número entero
    const numeroEntero = parseInt(numero);

    // Verificar si el número es válido
    if (isNaN(numeroEntero)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        // Utilizar la función esPrimo para verificar si el número es primo
        if (esPrimo(numeroEntero)) {
            console.log(`El número ${numeroEntero} es primo.`);
        } else {
            console.log(`El número ${numeroEntero} no es primo.`);
        }
    }
}

// Llamar a la función para ejecutar el programa
verificarNumeroPrimo();
