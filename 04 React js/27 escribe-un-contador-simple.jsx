{/*

Escribe un contador simple

Puedes diseñar un componente con un estado más complejo combinando los conceptos cubiertos hasta ahora. Estos incluyen inicializar el state, escribir métodos que establezcan state y asignar manejadores de eventos clic para activar estos métodos.

El componente Counter mantiene un seguimiento de un valor count en el state. Hay dos botones que llaman a métodos increment() y decrement(). Escribe estos métodos para que el valor del contador sea incrementado o disminuyendo por 1 cuando se haga clic en el botón apropiado. También, crea un método reset() para que cuando se haga clic en el botón reset, el contador se establezca a 0.

Nota: Asegúrate de no modificar el classNamede los botones. Además, recuerda agregar en el constructor los enlaces necesarios para los métodos recién creados.

*/}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Cambia el código debajo de esta línea
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  increment() {
    this.setState((state, props) => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState((state, props) => ({
      count: state.count - 1
    }));
  }
  reset() {
    this.setState((state, props) => ({
      count: 0
    }));
  }
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};