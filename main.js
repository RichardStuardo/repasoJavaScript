// // Variables

// //Number
// var miVariable = 1
// //String
// var miVariable2 = 'Mi string'
// //Boolean
// var miVariable3 = true
// var miVariable4 = false
// var miVariable5 = null
// var miVariable6 = undefined

// //Array
// var arr1 = [1,2,3,4,5]

// //Objetos

// var Obj = {}

// var obj1 = {
//   miPropiedad: 1,
//   otraPropiedad: 'mi string',
//   otraPropiedad2: true,
//   arr: [],
//   obj: {
//     masPropiedades: 'mas propiedades'
//   }
// }
// //Si queremos acceder a las propiedades de cada objetos se llama al objeto mas un punto y la propiedad
// obj1.miPropiedad
// obj1.otraPropiedad
// //acceder al las propiedades del objeto que esta dentro del objeto
// obj1.obj.masPropiedades
// // si queremos modificar las propiedades de un objeto se hace así

// obj1.miPropiedad = 10


// var users = [{ name:'Richard'},{ name:'Luna'},{name: 'Nicolás'}]

// var luna = users[2].name
// users[2].name = 'Joe Pino'

// if (10 < 8) {
//   console.log('se cumple!')
// }else if (2 == 7) {
//   console.log('yo me ejecuto si no se cumple la condición de if pero se se cumple la condición de este else if')
// }else if (1< -6) {
//   console.log('si nada se cumple pero esto si, yo me imprimo')
// }else{
//   console.log('si no se cumple la condición yo me imprimo :D')
// }

// var juanito = {
//   name: 'Carlos',
//   edad: 48
// }

// var chanchitoFeliz = {
//   name:'Junito',
//   edad: 14
// }

// if (juanito.edad > chanchitoFeliz.edad) {
//   console.log(juanito)
// }else{
//   console.log(chanchitoFeliz)
// }

// for (var i = 0; i < users.length; i++) {
//   var nombres = users[i].name;
//   console.log(nombres)
// }
//eliminar el último elemento del arreglo, el for no debe tener errores 

/**crear un listado de 10 usuarios, todos los usuarios deben tener la propiedad nombre y usuario.
 * iterar todos los usuarios, imprimir todos los mayores de edad 'puedes pasar' si no 'nombre de la persona + no puedes pasar '
 */

function usuario(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    
}

var usu1 = new usuario ('usu1', 25)
var usu2 = new usuario ('usu2',18 )
var usu3 = new usuario ('usu3',15 )
var usu4 = new usuario ('usu4',12 )
var usu5 = new usuario ('usu5',34 )
var usu6 = new usuario ('usu6',7 )
var usu7 = new usuario ('usu7',22 )
var usu8 = new usuario ('usu8',17 )
var usu9 = new usuario ('usu9',28 )
var usu10 = new usuario ('usu10', 10)

var listaUsuarios = [usu1,usu2,usu3,usu4,usu5,usu6,usu7,usu8,usu9,usu10]



for (var i = 0; i < listaUsuarios.length; i++) {
  var name = listaUsuarios[i].nombre
  var lista = listaUsuarios[i].edad
  
  function pasa() {
  return name +' ' + 'Puedes pasar!!!'
}

function noPasa() {
  return name+ ' ' + 'No puedes pasar '
}
  if (lista >= 18) {
    console.log(pasa()) 
  }else{
    console.log(noPasa())
  }
}

