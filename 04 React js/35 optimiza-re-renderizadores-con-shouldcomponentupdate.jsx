{/*

Optimiza re-renderizadores con shouldComponentUpdate

Hasta ahora, si cualquier componente recibe un nuevo state o un nuevo props, se vuelve a renderizar a sí mismo y a todos sus hijos. Normalmente, esto está bien. Pero React proporciona un método de ciclo de vida al que puedes llamar cuando los componentes hijos reciben nuevos state o props, y declarar específicamente si los componentes deben actualizarse o no. El método es shouldComponentUpdate(), y toma nextProps y nextState como parámetros.

Este método es una forma útil de optimizar el rendimiento. Por ejemplo, el comportamiento predeterminado es que el componente re-renderiza cuando recibe nuevos props, incluso si los props no han cambiado. Puedes usar shouldComponentUpdate() para evitar esto comparando los props. El método debe devolver un valor boolean que le diga a React si actualizar o no el componente. Puedes comparar los "props" actuales (this.props) a los siguientes "props" (nextProps) para determinar si necesita actualizar o no, y devuelve true o false en consecuencia.

El método shouldComponentUpdate() se añade en un componente llamado OnlyEvens. Actualmente, este método devuelve true, así que OnlyEvens re-renderiza cada vez que recibe nuevos props. Modifica el método para que OnlyEvens se actualice sólo si el value de sus nuevos "props" es par. Haz clic en el botón Add y observa el orden de los eventos en la consola de tu navegador mientras se activan los "hooks" del ciclo de vida.

*/}

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Cambia el código debajo de esta línea
    if (nextProps.value % 2 === 0) {
      return true;
    }
    return false;
    // Cambia el código encima de esta línea
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}