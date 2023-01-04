{/*

Crea un formulario controlado

El último desafío mostró que React puede controlar el estado interno de ciertos elementos como input y textarea, lo que los hace componentes controlados. Esto también se aplica a otros elementos del formulario, incluyendo el elemento regular HTML form.

El componente MyForm está configurado con un form vacío, con un manejador de envío. El manejador de envío será llamado cuando se envíe el formulario.

Hemos añadido un botón que envía el formulario. Puedes ver que tiene el type establecido en submit indicando que es el botón que controla el formulario. Añade el elemento input en el formulario form y establece sus atributos value y onChange() como el último desafío. A continuación, debes completar el método handleSubmit para que establezca la propiedad de estado del componente submit al valor de entrada actual en el state local.

Nota: También debes llamar a event.preventDefault() en el controlador de envío, para evitar el comportamiento predeterminado de envío de formulario que actualizará la página web. Para la comodidad de los campistas, el comportamiento predeterminado se ha desactivado aquí para evitar que las actualizaciones restablezcan el código de desafío.

Por último, crea una etiqueta h1 después del form que renderiza el valor de submit del state del componente. A continuación, puedes escribir en el formulario y hacer clic en el botón (o pulsar intro), y deberías ver tu entrada renderizada en la página.

*/}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Cambia el código debajo de esta línea
    event.preventDefault();
    this.setState((state) => ({
      submit: state.input
    }));
    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Cambia el código debajo de esta línea */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Cambia el código encima de esta línea */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Cambia el código debajo de esta línea */}
        <h1>{this.state.submit}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}