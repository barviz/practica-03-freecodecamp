/*

Extrae la lógica de estado a Redux

Ahora que has terminado el componente React, necesitas mover la lógica que está realizando localmente en su state hacia Redux. Este es el primer paso para conectar la aplicación simple de React a Redux. La única funcionalidad que tiene tu aplicación es añadir nuevos mensajes del usuario a una lista desordenada. El ejemplo es simple para demostrar cómo React y Redux trabajan juntos.

En primer lugar, define un tipo de acción ADD y asígnalo a una const ADD. A continuación, define un creador de acciones addMessage() que crea la acción para añadir un mensaje. Tendrás que pasar un message a este creador de acciones e incluir el mensaje en la action devuelta.

Luego crea un reductor llamado messageReducer() que maneja el estado de los mensajes. El estado inicial debe ser igual a un arreglo vacío. Este reductor debe añadir un mensaje al arreglo de mensajes mantenido en el estado, o devolver el estado actual. Finalmente, crea tu almacén Redux y pásale el reductor.

*/

// Define ADD, addMessage(), messageReducer(), y store aquí:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const messageReducer = (state = [], action) => {

  switch (action.type) {
    
    case ADD:
      return state.concat(action.message);
    default:
      return state;
  }

}

const store = Redux.createStore(messageReducer);