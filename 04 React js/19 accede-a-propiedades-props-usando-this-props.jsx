{/*

Accede a propiedades "props" usando this.props

Los últimos desafíos cubrieron las formas básicas de pasar propiedades a un componente hijo. Pero, ¿qué pasa si el componente hijo al que se le pasa una propiedad es un componente de clase ES6, en lugar de un componente funcional sin estado? Los componentes de clase ES6 usan una convención un poco diferente para acceder a las propiedades.

Cada vez que se hace referencia a un componente de clase en sí mismo, se utiliza la palabra clave this. Para acceder a las propiedades dentro de un componente de clase, se antepone al código que se utiliza para acceder a él con this. Por ejemplo, si un componente de clase de ES6 tiene una propiedad llamada data, se escribirá {this.props.data} en JSX.

Renderiza una instancia del componente Welcome en el componente padre App. Aquí, dale a Welcome un prop de name y asígnale un valor de una cadena. Dentro del hijo, Welcome, accede el prop name dentro de las etiquetas strong.

*/}

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Cambia el código debajo de esta línea */ }
            <Welcome name = "Superman"/>
            { /* Cambia el código encima de esta línea */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Cambia el código debajo de esta línea */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Cambia el código encima de esta línea */ }
        </div>
    );
  }
};