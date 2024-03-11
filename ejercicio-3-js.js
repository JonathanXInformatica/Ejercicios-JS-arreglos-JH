  //EJERCICIO 3
  
  const realizarSumaYPotencia = () => {
    console.clear();
    const sumaYPotencia = [9, 8, 7, 6, 5, 4];
    let suma = 0;
    let potencia = 1;
    console.log("el arreglo es: " + sumaYPotencia);
    const sumatoria = sumaYPotencia.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      suma
    );
    const potenciacion = sumaYPotencia.reduce(
      (acumulador, valorActual) => acumulador * valorActual,
      potencia
    );
  
    console.log(
      "La sumatoria del arreglo es: " +
        sumatoria +
        " y la potenciacion es: " +
        potenciacion
    );
  };
