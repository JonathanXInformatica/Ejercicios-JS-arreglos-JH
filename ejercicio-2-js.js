
//EJERCICIO 2
const multiplicaArregloPorDos = () => {
    console.clear();
    const numeros = [5, 3, 8, 6, 12];
    console.log("Arreglo sin multiplicar es: " + numeros);
    for (let i = 0; i < numeros.length; i++) {
      numeros[i] = numeros[i] * 2;
    }
    console.log("El arreglo multiplicado por 2 es: " + numeros);
  };
  
