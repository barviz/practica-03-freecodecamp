/*

Usa middleware para manejar acciones asíncronas

Hasta ahora hemos evitado hablar de las acciones asíncronas, pero son una parte inevitable del desarrollo web. En algún momento necesitarás llamar a endpoints asíncronos en tu aplicación Redux, así que ¿cómo manejas este tipo de peticiones? Redux proporciona un middleware diseñado específicamente para este propósito, llamado Redux Thunk middleware. Aquí hay una breve descripción de cómo usar esto con Redux.

Para incluir el Redux Thunk middleware, lo pasas como argumento a Redux.applyMiddleware(). Esta declaración se proporciona entonces como un segundo parámetro opcional a la función createStore(). Echa un vistazo al código en la parte inferior del editor para ver esto. Entonces, para crear una acción asíncrona, se devuelve una función en el creador de acción que toma dispatch como argumento. Dentro de esta función, se pueden enviar acciones y realizar peticiones asíncronas.

En este ejemplo, se simula una petición asíncrona con una llamada setTimeout(). Es común enviar una acción antes de iniciar cualquier comportamiento asíncrono para que el estado de tu aplicación sepa que se están solicitando algunos datos (este estado podría mostrar un icono de carga, por ejemplo). Luego, una vez que recibes los datos, envía otra acción que lleva los datos como carga útil junto con la información de que la acción se ha completado.

Recuerda que estás pasando dispatch como parámetro a este creador de acciones especiales. Esto es lo que usarás para enviar tus acciones, simplemente pasas la acción directamente a dispatch y el middleware se encarga del resto.

Escribe ambos envíos en el creador de acción handleAsync(). Envía requestingData() antes del setTimeout() (la llamada al API simulada). A continuación, después de recibir los datos (fingidos), envía la acción receivedData(), pasando estos datos. Ahora ya sabes cómo manejar las acciones asíncronas en Redux. Todo lo demás sigue comportándose como antes.

*/

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return { type: REQUESTING_DATA } }
const receivedData = (data) => { return { type: RECEIVED_DATA, users: data.users } }

const handleAsync = () => {
  return function (dispatch) {
    // Despacha la acción request aquí
    dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Despacha la acción received data aquí
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);