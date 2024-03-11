  
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
