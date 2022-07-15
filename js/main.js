/* LISTA DE CURSOS */

const listaCursos = [
    {nombre: "Ai Basico", precio: 2300},
    {nombre: "Ai Intermedio", precio: 3000},
    {nombre: "Ai Avanzado", precio: 3500},
    {nombre: "Pinatas Infantiles", precio: 2200}
];

/* ARRAY VACIO */

let carritoCompra = [];


/* RECORRO ARRAY */

listaCursos.forEach(curso => {
    console.log("Curso: " + (curso.nombre) + " y su precio es: " + (curso.precio))
});

/* SE PIDE AL USUARIO QUE INGRESE UN CURSO */



let compra = prompt ("Que curso te gustaría realizar? \n Presiona F12 para visualizar los cursos disponibles.");

function comprar(buscar){
    listaCursos.filter((curs) =>{
        if(curs.nombre == buscar){
            carritoCompra.push(curs)
            console.log(carritoCompra)
        }
    })
}

comprar(compra);
