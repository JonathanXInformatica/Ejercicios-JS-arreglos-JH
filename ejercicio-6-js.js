  
  //EJERCICIO 6
  
  const burbuja = () => {
    console.clear();
    let lista = [3, 6, 12, 5, 100, 1];
    let n, i, k, aux;
    n = lista.length;
    console.log("Lista desordenada:", lista.join(", "));
    for (k = 1; k < n; k++) {
      for (i = 0; i < n - k; i++) {
        if (lista[i] > lista[i + 1]) {
          aux = lista[i];
          lista[i] = lista[i + 1];
          lista[i + 1] = aux;
        }
      }
    }
    console.log("Lista ordenada:", lista.join(", "));
  };
  