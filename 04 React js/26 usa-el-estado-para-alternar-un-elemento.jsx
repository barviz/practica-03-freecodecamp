{/*

Usa el estado para alternar un elemento

A veces puedes necesitar conocer el estado anterior al actualizar el estado. Sin embargo, las actualizaciones del estado pueden ser asíncronas: esto significa que React puede procesar múltiples llamadas a setState() en una sola actualización. Esto significa que no puedes confiar en el valor anterior de this.state o this.props al calcular el siguiente valor. Por lo tanto, no debes usar código como este:

this.setState({
  counter: this.state.counter + this.props.increment
});
En su lugar, debes pasar una función a setState que te permitirá acceder al estado y props. El usar una función con setState te garantiza que estás trabajando con los valores más actuales del estado y props. Esto significa que lo anterior debe reescribirse así:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
También puedes usar un formulario sin props si necesitas solo el state:

this.setState(state => ({
  counter: state.counter + 1
}));
Ten en cuenta que tienes que encapsular el objeto literal entre paréntesis, de lo contrario JavaScript pensará que es un bloque de código.

MyComponent tiene una propiedad visibility que se inicializa con el valor false. El método de renderización devuelve un resultado si el valor de visibility es verdadero, y un resultado diferente si es falso.

Actualmente, no hay forma de actualizar la propiedad visibility en el state del componente. El valor debe cambiar entre verdadero y falso. Hay un manejador para el evento clic en el botón que activa un método de clase llamado toggleVisibility(). Pasa una función a setState para definir este método, de tal forma que el state de visibility cambie al valor opuesto cuando se llame el método. Si visibility es false, el método lo cambia a true y viceversa.

Finalmente, haz clic en el botón para ver la renderizado condicional del componente basado en su state.

Pista: ¡No olvides enlazar la palabra clave this al método en el constructor!

*/}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Cambia el código debajo de esta línea
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  toggleVisibility() {
    this.setState((state, props) => ({
      visibility: !state.visibility
    }));
  }
  // Cambia el código encima de esta línea
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}