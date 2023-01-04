/*

Envía datos de acción al almacén

A estas alturas ya has aprendido a enviar acciones al almacén de Redux, pero hasta ahora estas acciones no contenían más información que un type. También puedes enviar datos específicos junto con sus acciones. De hecho, esto es muy común porque las acciones suelen originarse a partir de alguna interacción del usuario y suelen llevar consigo algunos datos. El almacén Redux a menudo necesita conocer estos datos.

Hay un notesReducer() básico y un creador de acción addNoteText() definido en el editor de código. Termina el cuerpo de la función addNoteText() para que devuelva un objeto action. El objeto debe incluir una propiedad type con un valor de ADD_NOTE, y también una propiedad text establecida a los datos de note que se pasa al creador de acción. Cuando llames al creador de acción, pasarás información específica de la nota a la que puedes acceder para el objeto.

A continuación, termina de escribir la sentencia switch en el notesReducer(). Necesitas añadir un caso que maneje las acciones addNoteText(). Este caso debe activarse siempre que haya una acción de tipo ADD_NOTE y debe devolver la propiedad text de la action entrante como el nuevo state.

La acción es enviada en la parte inferior del código. Una vez que hayas terminado, ejecuta el código y observa la consola. Eso es todo lo que se necesita para enviar datos específicos de la acción al almacén y utilizarlos cuando se actualiza el state del almacén.

*/

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch (action.type) {
    // Cambia el código debajo de esta línea
    case ADD_NOTE:
      return action.text;
    // Cambia el código encima de esta línea
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Cambia el código debajo de esta línea
  return {
    type: ADD_NOTE,
    text: note
  }
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());