/*

Envía un evento de acción

El método dispatch (enviar) es el que se utiliza para enviar acciones al almacén Redux. Llamar a store.dispatch() y pasar el valor devuelto por un creador de acción envía una acción de regreso al almacén.

Recordemos que los creadores de acción devuelven un objeto con una propiedad de tipo que especifica la acción que se ha producido. Luego, el método envía un objeto de acción al almacén Redux. Basándonos en el ejemplo del desafío anterior, las siguientes líneas son equivalentes, y ambas envían la acción de tipo LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
El almacén Redux en el editor de código tiene un estado inicializado que es un objeto que contiene una propiedad login actualmente establecida a false. También hay un creador de acción llamado loginAction() que devuelve una acción de tipo LOGIN. Envía la acción LOGIN al almacén Redux llamando al método dispatch, y pasa la acción creada por loginAction().

*/

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Despacha la acción aquí:
store.dispatch(loginAction());