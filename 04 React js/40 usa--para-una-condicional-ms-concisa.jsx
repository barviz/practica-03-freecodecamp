{/*

Usa && para una condicional más concisa

Las sentencias if/else funcionaron en el último desafío, pero hay una manera más concisa de lograr el mismo resultado. Imagina que estás rastreando varias condiciones en un componente y deseas que diferentes elementos se rendericen dependiendo de cada una de estas condiciones. Si escribes un montón de sentencias else if para devolver UIs ligeramente diferentes, puedes repetir código que deja espacio para el error. En su lugar, puedes usar el operador lógico && para realizar lógica condicional de una manera más concisa. Esto es posible porque quieres comprobar si una condición es true, y si es así, devuelve algún código. A continuación un ejemplo:

{condition && <p>markup</p>}
Si la condition es true, el código será devuelto. Si la condición es false, la operación devolverá inmediatamente false después de evaluar la condition y no devolverá nada. Puedes incluir estas sentencias directamente en tu JSX y encadenar varias condiciones juntas escribiendo && después de cada uno. Esto te permite manejar una lógica condicional más compleja en tu método render() sin repetir un montón de código.

Resuelve el ejemplo anterior de nuevo, de este modo el h1 solo renderiza si display es true, pero usa el operador lógico && en lugar de una sentencia if/else.

*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
};