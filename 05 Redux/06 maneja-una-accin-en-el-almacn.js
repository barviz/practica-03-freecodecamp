/*

Maneja una acción en el almacén

Después de crear y enviar una acción, el almacén Redux necesita saber cómo responder a esa acción. Este es el trabajo de una función reducer (reductor). Los reductores en Redux son responsables de las modificaciones de estado que tienen lugar en respuesta a las acciones. Un reducer toma state y action como argumentos, y siempre devuelve un nuevo state. Es importante ver que esta es la única función del reductor. No tiene efectos secundarios: nunca llama a un endpoint del API y nunca tiene sorpresas ocultas. El reductor es simplemente una función pura que toma el estado y la acción, y luego devuelve el nuevo estado.

Otro principio clave en Redux es que state es de sólo lectura. En otras palabras, la función reducer debe siempre devolver una nueva copia de state y nunca modificar el estado directamente. Redux no impone la inmutabilidad del estado, sin embargo, tú eres responsable de imponerla en el código de tus funciones reductoras. Practicarás esto en desafíos posteriores.

El editor de código tiene el ejemplo anterior, así como el inicio de una función reducer para ti. Rellena el cuerpo de la función reducer para que si recibe una acción de tipo 'LOGIN' devuelva un objeto de estado con login establecido a true. De lo contrario, devuelve el state actual. Ten en cuenta que el state actual y la action enviada se pasan al reductor, por lo que puedes acceder al tipo de la acción directamente con action.type.

*/

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
  if (action.type === "LOGIN"){
    return {login: true};
  }

  return state;
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};