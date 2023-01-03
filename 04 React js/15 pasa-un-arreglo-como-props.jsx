{/*

Pasa un arreglo como "props"

El último desafío demostró cómo pasar información desde un componente padre a un componente hijo como props o propiedades. Este desafío busca demostrar cómo se pueden pasar arreglos como props. Para pasar un arreglo a un elemento JSX, debe ser tratado como JavaScript y envolverlo entre llaves.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
El componente hijo entonces tiene acceso a la propiedad del arreglo colors. Los métodos de arreglo, como join() pueden ser usados al acceder a la propiedad. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> Esto unirá a todos elementos colors del arreglo en una cadena separada por comas y se convertirá en: <p>green, blue, red</p> Más tarde, aprenderemos sobre otros métodos comunes para representar arreglos de datos en React.

Están los componentes List y ToDo en el editor de código. Al renderizar cada List del componente ToDo, pasa una propiedad tasks asignada a un arreglo de tareas pendientes, por ejemplo ["walk dog", "workout"]. Luego, accede a este arreglo de tasks en el componente List, mostrando su valor dentro del elemento p. Usa join(", ") para mostrar el arreglo props.tasks en el elemento p como una lista separada por comas. La lista de hoy debe tener al menos 2 tareas y la de mañana debe tener al menos 3 tareas.

 */}

const List = (props) => {
  { /* Cambia el código debajo de esta línea */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Cambia el código encima de esta línea */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Cambia el código debajo de esta línea */ }
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "walk cat"]} />
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};