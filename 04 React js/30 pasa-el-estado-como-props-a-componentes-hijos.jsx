{/*

Pasa el estado como "props" a componentes hijos
Has visto varios ejemplos que pasaban props a elementos JSX hijos y a componentes React hijos en desafíos anteriores. Te preguntarás de dónde vienen esos props. Un patrón común es tener un componente con estado que contenga el state importante para tu aplicación, que luego renderiza los componentes hijos. Quieres que estos componentes tengan acceso a algunas partes de ese state, el cual se pasa como props.

Por ejemplo, tal vez tengas un componente App que renderiza una Navbar, entre otros componentes. En tu App, tienes un state que contiene mucha información del usuario, pero la Navbar sólo necesita acceder al nombre de usuario para poder mostrarlo. Pasas esa parte del state al componente Navbar como prop.

Este patrón ilustra algunos paradigmas importantes en React. El primero es unidirectional data flow. El componente de estado fluye en una sola dirección descendiendo en el árbol de componentes de tu aplicación, desde el componente padre hasta los componentes hijos. Los componentes hijos únicamente reciben los datos del componente de estado que ellos necesitan. La segunda es que las aplicaciones con estado pueden ser divididas en solo algunos, o tal vez un solo, componente con estado. El resto de tus componentes simplemente reciben el estado del padre como props, y renderizan la interfaz de usuario a partir de ese estado. Esto comienza a crear una separación donde la administración de estado es manejada en una parte del código y la renderización de la interfaz de usuario en otra. Este principio de separar la lógica de estado de la lógica de la interfaz de usuario es uno de los principios clave de React. Cuando se utiliza correctamente, hace que el diseño de aplicaciones complejas y de estado sea mucho más fácil de gestionar.

El componente MyApp es de estado y renderiza un componente Navbar como un componente hijo. Pasa la propiedad name en su state al componente hijo, luego muestra el name en la etiqueta h1 que es parte del método de renderizado de Navbar. name debe aparecer luego del texto Hello, my name is:.

*/}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Cambia el código debajo de esta línea */}
         <Navbar name={this.state.name}/>
         {/* Cambia el código encima de esta línea */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Cambia el código debajo de esta línea */}
      <h1>Hello, my name is: {this.props.name}</h1>
      {/* Cambia el código encima de esta línea */}
    </div>
    );
  }
};