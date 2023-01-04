/*

Nunca mutes el estado

Estos desafíos finales describen varios métodos para hacer cumplir el principio clave de la inmutabilidad del estado en Redux. Estado inmutable significa que nunca se modifica el estado directamente, sino que se devuelve una nueva copia del estado.

Si tomaras una captura del estado de una aplicación Redux a lo largo del tiempo, verías algo como state 1, state 2, state 3,state 4, ... y así sucesivamente donde cada estado puede ser similar al anterior, pero cada uno es un dato distinto. Esta inmutabilidad, de hecho, es lo que proporciona características tales como la depuración de viajes en el tiempo de la que puedes haber oído hablar.

Redux no impone activamente la inmutabilidad del estado en su almacén o reductores, esa responsabilidad recae en el programador. Afortunadamente, JavaScript (especialmente ES6) proporciona varias herramientas útiles que puedes utilizar para reforzar la inmutabilidad de tu estado, ya sea un string, number, array, u object. Ten en cuenta que las cadenas y los números son valores primitivos y son inmutables por naturaleza. En otras palabras, 3 siempre es 3. No se puede cambiar el valor del número 3. Sin embargo, un array u object es mutable. En la práctica, tu estado probablemente consistirá en un array u object, ya que son estructuras de datos útiles para representar muchos tipos de información.

Hay un store y un reducer en el editor de código para gestionar los elementos de las tareas pendientes. Termina de escribir el caso ADD_TO_DO en el reductor para añadir una nueva tarea al estado. Hay algunas maneras de lograr esto con JavaScript estándar o ES6. Ve si puedes encontrar la forma de devolver un nuevo arreglo con el elemento de action.todo añadido al final.

*/

const ADD_TO_DO = 'ADD_TO_DO';

// Una lista de cadenas de texto representando tareas por hacer:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // No mutes el estado aquí o la prueba fallará
      return state.slice(0).concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);