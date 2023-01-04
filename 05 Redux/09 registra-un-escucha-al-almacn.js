/*

Registra un escucha al almacén

Otro método al que tienes acceso en el objeto Redux store es store.subscribe(). Esto te permite suscribir funciones de escucha al almacén, que se llaman cada vez que se envía una acción contra el almacén. Un uso sencillo de este método es suscribir una función a tu almacén que simplemente registra un mensaje cada vez que se recibe una acción y se actualiza el almacén.

Escribe una función callback que incremente la variable global count cada vez que el almacén recibe una acción, y pasa esta función al método store.subscribe(). Verás que store.dispatch() es llamado tres veces seguidas, cada vez pasando directamente un objeto de acción. Observa la salida de la consola entre los envíos de acción para ver cómo se producen las actualizaciones.

*/

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Variable global count:
let count = 0;

// Cambia el código debajo de esta línea
function increment() {
  count += 1;
  console.log("count: " + count);
}

store.subscribe(increment());
// Cambia el código encima de esta línea

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);