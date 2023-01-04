/*

Copia un objeto con Object.assign

Los últimos desafíos trabajaron con arreglos, pero hay maneras de ayudar a reforzar la inmutabilidad del estado cuando el estado es también un object. Una herramienta útil para el manejo de objetos es la utilidad Object.assign(). Object.assign() toma un objeto de destino y objetos de origen y asigna propiedades de los objetos de origen al objeto de destino. Las propiedades que coinciden se sobrescriben con las propiedades de los objetos de origen. Este comportamiento se utiliza comúnmente para hacer copias superficiales de objetos pasando un objeto vacío como primer argumento seguido por el/los objeto(s) que se desea(n) copiar. A continuación un ejemplo:

const newObject = Object.assign({}, obj1, obj2);
Esto crea newObject como un nuevo object, que contiene las propiedades que existen actualmente en obj1 y obj2.

El estado y las acciones de Redux fueron modificados para manejar un object para el state. Edita el código para devolver un nuevo objeto state para las acciones de tipo ONLINE, que establece la propiedad status a la cadena online. Intenta utilizar Object.assign() para completar el desafío.

*/

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      // No mutes el estado aquí o la prueba fallará
      return Object.assign({}, state, { status: "online" });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);