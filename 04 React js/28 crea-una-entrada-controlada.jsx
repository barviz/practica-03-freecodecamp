{/*

Crea una entrada controlada

Tu aplicación puede tener interacciones más complejas entre state y la interfaz de usuario renderizada. Por ejemplo, elementos de control de formulario para la entrada de texto, tales como input y textarea, mantienen su propio estado en el DOM como los tipos de usuario. Con React, puedes mover este estado mutable hacia el state de un componente de React. La entrada del usuario se convierte en parte del state de la aplicación, así que React controla el valor de ese campo de entrada. Por lo general, si tienes componentes de React con campos de entrada en los que el usuario puede escribir, será un formulario de entrada controlado.

El editor de código tiene el esqueleto de un componente llamado ControlledInput para crear un elemento input controlado. El state del componente ya está inicializado con una propiedad input que contiene una cadena vacía. Este valor representa el texto que un usuario escribe en el campo input.

Primero, crea un método llamado handleChange() que tiene un parámetro llamado event. Cuando el método es llamado, este recibe un objeto event que contiene una cadena de texto del elemento input. Puedes acceder a esta cadena con event.target.value dentro del método. Actualiza la propiedad input del state del componente con esta nueva cadena.

En el método render, crea el elemento input encima de la etiqueta h4. Añade un atributo value que es igual a la propiedad input del state del componente. Luego añade un manejador de eventos onChange() establecido al método handleChange().

Cuando escribes en el cuadro de entrada, ese texto es procesado por el método handleChange(), establecido como la propiedad input en el state local, y renderizado como el valor en el cuadro input de la página. El state del componente es la única fuente de verdad con respecto a los datos de entrada.

Por último, pero no menos importante, no olvides añadir los enlaces necesarios en el constructor.

*/}

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Cambia el código debajo de esta línea
    this.handleChange = this.handleChange.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  handleChange(event) {
    this.setState(() => ({
      input: event.target.value
    }));
  }
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */}
        <input value={this.state.input} onChange={this.handleChange} />
        { /* Cambia el código encima de esta línea */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};