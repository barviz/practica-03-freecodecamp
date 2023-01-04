/*

Usa "Provider" para conectar Redux a React

En el último desafío, creaste un almacén Redux para manejar el arreglo de mensajes y creaste una acción para añadir nuevos mensajes. El siguiente paso es proporcionar a React acceso al almacén Redux y a las acciones que necesita para enviar las actualizaciones. React Redux proporciona su paquete react-redux para ayudar a realizar estas tareas.

React Redux ofrece si API con dos características clave: Provider y connect. Otro desafío cubre connect. El Provider es un componente envolvente de React Redux que envuelve tu aplicación React. Esta envoltura te permite acceder a las funciones Redux store y dispatch a través de tu árbol de componentes. Provider toma dos props, el almacén Redux y los componentes hijos de tu aplicación. La definición del Provider para un componente de la App podría ser así:

<Provider store={store}>
  <App/>
</Provider>
El editor de código ahora muestra todo tu código Redux y React de los últimos desafíos. Incluye el almacén Redux, las acciones y el componente DisplayMessages. La única pieza nueva es el componente AppWrapper de la parte inferior. Usa este componente de nivel superior para renderizar el Provider de ReactRedux, y pasa el almacén Redux como prop. Luego, renderiza el componente DisplayMessages como hijo. Una vez que hayas terminado, deberías ver tu componente React renderizado en la página.

Nota: React Redux está disponible como una variable global aquí, por lo que puedes acceder al "Provider" con notación de puntos. El código del editor aprovecha esto y lo establece en una constante Provider para que lo uses en el método de renderizado AppWrapper.

*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
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

class DisplayMessages extends React.Component {
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Renderiza el Provider debajo de esta línea
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // Cambia el código encima de esta línea
};