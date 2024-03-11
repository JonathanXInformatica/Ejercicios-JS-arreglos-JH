  
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
