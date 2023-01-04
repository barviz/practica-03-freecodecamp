{/*

Usa PropTypes para definir las props que esperas

React proporciona características útiles de validación de tipos para verificar que los componentes reciban las props del tipo correcto. Por ejemplo, tu aplicación hace una llamada a un API para obtener datos que se esperan que sea un arreglo, el cual es pasado al componente como una prop. Puedes establecer propTypes en tu componente para que los datos sean de tipo array. Esto arrojará una advertencia útil cuando los datos sean de otro tipo.

Se considera una muy buena práctica definir los propTypes cuando conoces el tipo de una propiedad con antelación. Puedes definir una propiedad propTypes para un componente de la misma manera que defines defaultProps. Al hacer esto, se validará que las props de una clave determinada están presentes con un tipo específico. Aquí hay un ejemplo para validar el tipo function para una prop llamada handleClick:

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
En el ejemplo anterior, la parte de PropTypes.func verifica que handleClick es una función. Añadir isRequired le dice a React que handleClick es una propiedad obligatoria para ese componente. Verás una advertencia si no se proporciona esa propiedad. También ten en cuenta que func representa function. Entre los siete tipos primitivos de JavaScript, function y boolean (escrito como bool) son los únicos dos que utilizan ortografía diferente. Además de los tipos primitivos, hay otros tipos disponibles. Por ejemplo, puedes validar si una prop es un elemento React. Por favor, consulta la documentación para todas las opciones.

Nota: A partir de React v15.5.0, PropTypes se importa de manera independiente de React, así: import PropTypes from 'prop-types';

Define propTypes para el componente Items de tal manera que quantity sea una prop obligatoria y verificar que sea de tipo number.

*/}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Cambia el código debajo de esta línea
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Cambia el código encima de esta línea

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};