{/*

Utiliza React para procesar componentes anidados

El último desafío mostró una manera simple de organizar dos componentes, pero hay muchas maneras diferentes de organizar componentes con React.

La composición de componentes es una de las características más poderosas de React. Cuando trabajas con React, es importante comenzar a pensar en tu interfaz de usuario en términos de componentes, como el ejemplo App del último desafío. Debes dividir tu UI en sus bloques básicos de construcción, y esas piezas se convierten en los componentes. Esto ayuda a separar el código responsable de la interfaz de usuario del código responsable de manejar la lógica de tu aplicación. Esto puede simplificar enormemente el desarrollo y el mantenimiento de proyectos complejos.

Hay dos componentes funcionales definidos en el editor de código, llamados TypesOfFruit y Fruits. Toma el componente TypesOfFruit y organízalo, o anídalo, dentro del componente Fruits. Luego toma el componente Fruits y anídalo dentro del componente TypesOfFood. El resultado debe ser un componente hijo, anidado dentro de un componente padre, ¡que a su vez está anidado dentro de un componente padre!

 */}

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Cambia el código debajo de esta línea */ }
      <TypesOfFruit />
      { /* Cambia el código encima de esta línea */ }
    </div>
  );
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
      </div>
    );
  }
};