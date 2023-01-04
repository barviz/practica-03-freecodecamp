{/*

Usa props predeterminadas

React también tiene una opción para establecer props predeterminadas. Puedes asignar props predeterminadas a un componente como si fueran una propiedad dentro del propio componente y React asigna la prop predeterminada si es necesario. Esto te permite especificar cuál debe ser el valor de una prop si no se provee un valor específico. Por ejemplo, si declaras MyComponent.defaultProps = { location: 'San Francisco' }, has definido una prop de localización que se establece en la cadena San Francisco, a menos que especifiques lo contrario. React asigna props predeterminadas si estas no están definidas, pero si pasas el valor null como valor para una prop, este permanecerá null.

El editor de código muestra un componente ShoppingCart. Define props predeterminadas en este componente que especifican una prop items con un valor de 0.

*/}

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Cambia el código debajo de esta línea
ShoppingCart.defaultProps = {"items": 0}