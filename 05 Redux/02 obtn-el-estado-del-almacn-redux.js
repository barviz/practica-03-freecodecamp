/*

Obtén el estado del almacén Redux

El objeto almacén Redux proporciona varios métodos que permiten interactuar con él. Por ejemplo, puedes recuperar el state actual que tiene el objeto almacén Redux con el método getState().

El código del desafío anterior se reescribe de forma más concisa en el editor de código. Utiliza store.getState() para recuperar el state del store, y asígnalo a una nueva variable currentState.

*/

const store = Redux.createStore(
  (state = 5) => state
);

// Cambia el código debajo de esta línea

const currentState = store.getState();