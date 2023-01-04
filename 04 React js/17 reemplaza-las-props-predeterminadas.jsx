{/**

Reemplaza las "props" predeterminadas

La capacidad de establecer valores por defecto para las props es una característica útil en React. La manera de reemplazar las props predeterminadas es establecer explícitamente los valores de las props para un componente.

El componente ShoppingCart ahora renderiza un componente hijo Items. Este componente Items tiene una prop predeterminada quantity establecida al entero 0. Reemplaza la prop predeterminada pasando un valor de 10 para quantity.

Nota: Recuerda que la sintaxis para agregar una prop a un componente se parece a la sintaxis para agregar atributos en un elemento HTML. Sin embargo, dado que el valor de quantity es un entero, no irá entre comillas pero debe estar envuelto entre llaves. Por ejemplo, {100}. Esta sintaxis le dice a JSX que interprete el valor dentro de las llaves directamente como JavaScript.

*/}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Cambia el código debajo de esta línea */ }
    return <Items quantity={10}/>
    { /* Cambia el código encima de esta línea */ }
  }
};