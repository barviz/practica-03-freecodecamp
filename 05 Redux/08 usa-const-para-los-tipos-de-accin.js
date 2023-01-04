/*

Usa const para los tipos de acción

Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes de sólo lectura, y luego hacer referencia a estas constantes dondequiera que se utilicen. Puedes refactorizar el código con el que estás trabajando para escribir los tipos de acción como declaraciones const.

Declara LOGIN y LOGOUT como valores const y asígnalos a las cadenas 'LOGIN' y 'LOGOUT', respectivamente. Luego, edita el authReducer() y los creadores de acción para que hagan referencia a estas constantes en lugar de valores de cadena.

Nota: Generalmente es una convención escribir las constantes en mayúsculas, y esto es una práctica estándar en Redux también.

*/

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
