/*

Usa el operador de propagación en arreglos

Una solución de ES6 para ayudar a reforzar la inmutabilidad del estado en Redux es el operador de propagación: .... El operador de propagación tiene una variedad de aplicaciones, una de las cuales es muy adecuada para el desafío anterior de producir un nuevo arreglo a partir de un arreglo existente. Se trata de una sintaxis relativamente nueva, pero de uso común. Por ejemplo, si tienes un arreglo myArray y escribes:

let newArray = [...myArray];
newArray es ahora un clon de myArray. Ambos arreglos siguen existiendo por separado en la memoria. Si realizas una mutación como newArray.push(5), myArray no cambia. El ... efectivamente distribuye los valores de myArray en un nuevo arreglo. Para clonar un arreglo pero añadir valores adicionales en el nuevo arreglo, se podría escribir [...myArray, 'new value']. Esto devolvería un nuevo arreglo compuesto por los valores de myArray y la cadena new value como último valor. La sintaxis de propagación se puede utilizar varias veces en la composición de arreglos como este, pero es importante tener en cuenta que sólo hace una copia superficial del arreglo. Es decir, sólo proporciona operaciones de arreglos inmutables para arreglos unidimensionales.

Utiliza el operador de propagación para devolver una nueva copia del estado cuando se añade una tarea.

*/

const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // No mutes el estado aquí o la prueba fallará
      return [...state].concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);