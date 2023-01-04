/*

Extrae el estado local en Redux

¡Ya casi terminas! Recuerda que escribiste todo el código Redux para que Redux pudiera controlar la gestión del estado de tu aplicación de mensajes React. Ahora que Redux está conectado, necesitas extraer la gestión del estado de Presentational y añadirlo a Redux. Actualmente, tienes Redux conectado, pero estás manejando el estado localmente dentro del componente Presentational.

En el componente Presentational, primero elimina la propiedad messages del local state. Estos mensajes serán gestionados por Redux. A continuación, modifica el método submitMessage() para que submitNewMessage() trabaje desde this.props y pase la entrada del mensaje actual desde el state local como un argumento. Ya que eliminaste messages desde el estado local, elimina también la propiedad messages de la llamada a this.setState(). Finalmente, modifica el método render() para que asigne los mensajes recibidos desde props en lugar de state.

Una vez realizados estos cambios, la aplicación seguirá funcionando igual, salvo que Redux gestiona el estado. Este ejemplo también ilustra cómo un componente puede tener un state local: tu componente aún registra la entrada del usuario localmente en su propio state. Puedes ver cómo Redux proporciona un framework útil de gestión de estados sobre React. Alcanzaste el mismo resultado usando solo el estado local de React al principio, y esto es generalmente posible con aplicaciones simples. Sin embargo, cuanto más complejas y grandes se vuelve tus aplicaciones, más lo hará la gestión del estado, y esto es el problema que Redux resuelve.

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
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Cambia el código debajo de esta línea
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
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
    this.props.submitNewMessage(this.state.input);
    this.setState((state) => ({
      input: '',
    }));
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
          {this.props.messages.map((message, idx) => {
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
// Cambia el código encima de esta línea

const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};