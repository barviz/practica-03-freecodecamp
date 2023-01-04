/*

Elimina un elemento de un arreglo

Es hora de practicar la eliminación de elementos de un arreglo. Aquí también se puede utilizar el operador de propagación. Otros métodos útiles de JavaScript son slice() y concat().

El reductor y el creador de acción fueron modificados para eliminar un elemento de un arreglo en función del índice del elemento. Termina de escribir el reductor para que devuelva un nuevo arreglo de estados con el elemento en el índice específico eliminado.

*/

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    
    case 'REMOVE_ITEM':
      // No mutes el estado aquí o la prueba fallará
      return [...state].slice(0, action.index).concat([...state].slice(action.index + 1));
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);