{/*

Compón componentes de React

A medida que los desafíos continúan utilizando composiciones más complejas con componentes de React y JSX, hay un una cosa importante a tener en cuenta. Renderizar componentes de clase de estilo ES6 dentro de otros componentes es igual que renderizar los componentes simples que usaste en los últimos desafíos. Puedes renderizar elementos JSX, componentes funcionales sin estado y componentes de clase ES6, dentro de otros componentes.

En el editor de código, el componente TypesOfFood ya está incluyendo (renderizando) un componente llamado Vegetables. Además, también está el componente Fruits del último desafío.

Anida dos componentes dentro de Fruits: primero NonCitrus y luego Citrus. Ambos componentes se te proporcionan en segundo plano. A continuación, anida el componente de clase Fruits en el componente TypesOfFood, debajo del encabezado h1 y encima de Vegetables. El resultado debe ser una serie de componentes anidados, que utiliza dos tipos de componentes diferentes.

*/}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Cambia el código debajo de esta línea */ }
        <NonCitrus />
        <Citrus />
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Cambia el código debajo de esta línea */ }
        <Fruits />
        { /* Cambia el código encima de esta línea */ }
        <Vegetables />
      </div>
    );
  }
};