//EJERCICIO 1
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  console.clear();
  console.log("El arreglo impreso es: " + arr.join(" "));
}

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

//EJERCICIO 4
const cursosEnComun = () => {
  console.clear();
  let student1Courses = ["Math", "English", "Programming", "Physics"];
  let student2Courses = ["Physics", "Geography", "Spanish", "Programming"];

  const cursoComun = student1Courses.filter((cursos) =>
    student2Courses.includes(cursos)
  );
  console.log("Los cursos en comun son: " + cursoComun);
};

//EJERCICIO 5

const cosasDeArreglos = () => {
  console.clear();
  let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
  console.log("1.-" + people.join(", "));
  people.splice(1, 1);
  console.log("2.-" + people.join(", "));
  people.splice(2, 1);
  console.log("3.-" + people.join(", "));
  const mover = people.splice(1, 1);
  people.unshift(mover);
  console.log("4.-" + people.join(", "));
  people.push("Jonathan");
  console.log("5.-" + people.join(", "));
  for (let i = 0; i < people.length; i++) {
    console.log("6." + (i + 1) + "- people: " + people[i]);
    if (people[i] === "Maria") {
      break;
    }
  }
  const indexofmaria = people.indexOf("Maria");
  console.log("7.- El indice de Maria es: " + indexofmaria);

  console.log("8.- arreglo final: " + people.join(", "));
};

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
