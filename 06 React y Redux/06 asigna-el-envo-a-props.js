/*

Asigna el envío a props

La función mapDispatchToProps() se utiliza para proporcionar creadores de acción específicos a tus componentes React para que puedan enviar acciones contra el almacén Redux. Su estructura es similar a la función mapStateToProps() que escribiste en el último desafío. Devuelve un objeto que asigna acciones de envío a nombres de propiedades, que se convierten en props del componente. Sin embargo, en lugar de devolver una pieza de state, cada propiedad devuelve una función que llama a dispatch con un creador de acciones y cualquier dato relevante de la acción. Tienes acceso a este dispatch porque se pasa a mapDispatchToProps() como parámetro cuando defines la función, igual que pasaste state a mapStateToProps(). Tras bambalinas, React Redux utiliza store.dispatch() para realizar estos envíos con mapDispatchToProps(). Esto es similar a cómo se utiliza store.subscribe() para los componentes que se asignan a state.

Por ejemplo, tienes un creador de acción loginUser() que toma un username como carga útil de acción. El objeto devuelto por mapDispatchToProps() para este creador de acción se vería algo como:

{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
El editor de código proporciona un creador de acción llamado addMessage(). Escribe la función mapDispatchToProps() que toma dispatch como argumento y devuelve un objeto. El objeto debe tener una propiedad submitNewMessage establecida en la función de envío, que toma un parámetro para el nuevo mensaje a añadir cuando envía addMessage().

*/

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Cambia el código debajo de esta línea

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      return dispatch(addMessage(message));
    }
  }
}