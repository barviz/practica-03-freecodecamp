/*

Gestiona el estado localmente primero

Aquí terminarás de crear el componente DisplayMessages.

En primer lugar, en el método render(), haz que el componente renderice un elemento input, un elemento button y un elemento ul. Cuando el elemento input cambia, debe activar un método handleChange(). Además, el elemento input debe renderizar el valor de input que está en el estado del componente. El elemento button debe activar un método submitMessage() cuando se hace clic en él.

En segundo lugar, escribe estos dos métodos. El método handleChange() debe actualizar el input con lo que el usuario está escribiendo. El método submitMessage() debe concatenar el mensaje actual (almacenado en input) al arreglo messages del estado local, y borrar el valor de input.

Por último, utiliza el ul para asignar el arreglo de messages y renderizarlo en la pantalla como una lista de elementos li.

*/

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Agrega los métodos handleChange() y submitMessage() aquí
  handleChange(event) {
    this.setState(() => ({
      input: event.target.value,
      messages: this.state.messages
    }));
  }

  submitMessage() {
    this.setState((state, props) => ({
      input: "",
      messages: state.messages.concat(this.state.input)
    }));
  }

  handleChange = this.handleChange.bind(this);
  submitMessage = this.submitMessage.bind(this);

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Renderiza un input, button, y ul debajo de esta línea */}
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.state.messages.map((message, index) => {
          return <li key={index}>{message}</li>
        })}</ul>
        { /* Cambia el código encima de esta línea */}
      </div>
    );
  }
};