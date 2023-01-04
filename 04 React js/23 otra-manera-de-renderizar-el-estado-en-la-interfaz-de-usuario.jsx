{/*

Otra manera de renderizar el estado en la interfaz de usuario

Hay otra manera de acceder al state de un componente. En el método render(), antes de la sentencia return, se puede escribir JavaScript directamente. Por ejemplo, puedes declarar funciones, acceder a datos de state o props, realizar cálculos sobre estos datos, etc. Luego, puedes asignar cualquier dato a las variables, a las que tienes acceso en la sentencia return.

En el método de renderización de MyComponent, define una const llamada name y asígnalo igual al valor del nombre en el state del componente. Debido a que puedes escribir JavaScript directamente en esta parte del código, no tienes que incluir esta referencia entre llaves.

A continuación, en la sentencia return, renderiza este valor en una etiqueta h1 usando la variable name. Recuerda, necesitas usar la sintaxis JSX (llaves para JavaScript) en la sentencia return.

*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Cambia el código debajo de esta línea
    const name = this.state.name;
    // Cambia el código encima de esta línea
    return (
      <div>
        { /* Cambia el código debajo de esta línea */ }
        <h1>{name}</h1>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};