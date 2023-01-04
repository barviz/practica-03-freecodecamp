{/*

Renderiza con una condición If-Else

Otra aplicación del uso de JavaScript para controlar la vista renderizada es vincular los elementos que se renderizan a una condición. Cuando la condición es verdadera (true), se renderiza una vista. Cuando es falso (false), es una vista diferente. Puedes hacer esto con una sentencia estándar if/else en el método render() de un componente React.

MyComponent contiene un boolean en su estado que rastrea si deseas mostrar algún elemento en la interfaz de usuario o no. El button alterna el estado de este valor. Actualmente, renderiza la misma interfaz de usuario cada vez. Reescribir el método render() con una sentencia if/else de modo que si display es true, devuelvas el marcado actual. De lo contrario, devuelve el marcado sin el elemento h1.

Note: Debes escribir un if/else para pasar las pruebas. El uso del operador ternario no pasará aquí.

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
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
};