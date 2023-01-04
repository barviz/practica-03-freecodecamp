/*

Conecta Redux a la aplicación de mensajes

Ahora que entiendes cómo usar connect para conectar React a Redux, puedes aplicar lo que has aprendido a tu componente React que maneja mensajes.

En la última lección, el componente que conectaste a Redux se llamó Presentational, y esto no fue arbitrario. Este término generalmente se refiere a componentes React que no están directamente conectados a Redux. Ellos simplemente son responsables de la presentación de la interfaz de usuario y lo hacen en función de las props que reciben. Por el contrario, los componentes contenedores están conectados a Redux. Estos son típicamente responsables de enviar acciones al store (almacén) y a menudo pasan el estado del store a componentes secundarios como props.

El editor tiene todo el código que has escrito hasta ahora en esta sección. El único cambio es que el componente React se renombra a Presentational. Crea un nuevo componente en una constante llamada Container que usa connect para conectar el componente Presentational a Redux. Luego, en el AppWrapper, renderiza el componente Provider de React Redux. Pasa a Provider el store Redux como una prop y renderiza Container como un hijo. Una vez que todo esté configurado, verás que la aplicación de mensajes vuelve a aparecer en la página.

*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define el componente Container aquí:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Completa la sentencia return:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};