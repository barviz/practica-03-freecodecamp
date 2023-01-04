{/*

Define el estado con this.setState
Los desafíos anteriores cubrieron el componente state y cómo inicializar el state en el constructor. También hay una forma de cambiar el state del componente. React proporciona un método para actualizar el componente state llamado setState. El método setState dentro de tu clase de componente se llama así: this.setState(), pasando un objeto con pares clave-valor. Las claves son tus propiedades de estado y los valores son datos de estado actualizados. Por ejemplo, si estuviéramos almacenando un username en estado y quisiéramos actualizarlo, se vería así:

this.setState({
  username: 'Lewis'
});
React espera que nunca modifiques state directamente. En su lugar, siempre usa this.setState() cuando ocurran cambios de estado. Además, ten en cuenta que React puede agrupar múltiples actualizaciones de estado con el fin de mejorar el rendimiento. Esto significa que las actualizaciones de estado a través del método setState pueden ser asíncronas. Existe una sintaxis alternativa para el método setState que proporciona una forma de evitar ese problema. Esto es raramente necesario, ¡pero es bueno tenerlo en cuenta! Por favor, consulte la documentación de React para más información.

Hay un elemento button en el editor de código que tiene un controlador onClick(). Este controlador es activado cuando el button recibe un evento clic en el navegador, y ejecuta el método handleClick definido en MyComponent. Dentro del método handleClick, actualiza el componente state usando this.setState(). Establece la propiedad name en el state para igualar la cadena React Rocks!.

Haz clic en el botón y observa la actualización de estado renderizada. No te preocupes si no entiendes completamente cómo funciona el código del controlador de clics hasta ahora. Será cubierto en los siguientes desafíos.

*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Cambia el código debajo de esta línea
    this.setState({
      name: 'React Rocks!'
    }); 
    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};