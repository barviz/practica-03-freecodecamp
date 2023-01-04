{/*

Cambia el CSS inline condicionalmente según el estado del componente

Hasta ahora has visto varias aplicaciones de renderizado condicional y el uso de inline styles. Aquí va un ejemplo más que combina los dos temas. También puedes renderizar CSS condicionalmente según el estado de un componente de React. Para hacer esto, tienes que verificar una condición, y si esa condición se cumple, modificas el objeto de estilos que está asignado a los elementos JSX del método render.

Este paradigma es importante entenderlo porque es un cambio dramático del enfoque más tradicional de aplicar estilos modificando elementos del DOM directamente (muy común con jQuery, por ejemplo). Con ese enfoque, debes hacer un seguimiento de cuándo cambian los elementos y también manejar directamente la manipulación. Puede resultar difícil hacer un seguimiento de los cambios, lo que podría hacer que tu interfaz de usuario sea impredecible. Cuando configuras un objeto de estilo en función de una condición, estás describiendo cómo debería verse la interfaz de usuario en función del estado de la aplicación. Existe un flujo claro de información que sólo se mueve en una dirección. Este es el método preferido para escribir aplicaciones con React.

El editor de código tiene un simple componente de entrada controlado, con un estilo de borde. Quieres aplicar un estilo rojo a este borde si el usuario escribe más de 15 caracteres de texto en la casilla de entrada. Agrega una condición para verificarlo y, si la condición es válida, establece el estilo del borde de la casilla de entrada como 3px solid red. Puedes probarlo introduciendo texto en la casilla de entrada.

*/}

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Cambia el código debajo de esta línea
    if (this.state.input.length > 15) {
      inputStyle.border = "3px solid red"
    }
    // Cambia el código encima de esta línea
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};