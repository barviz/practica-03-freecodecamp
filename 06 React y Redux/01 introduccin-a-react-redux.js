/*

Introducción a React Redux

Esta serie de desafíos presenta cómo utilizar Redux con React. En primer lugar, repasamos algunos de los principios clave de cada tecnología. React es una librería de vistas a la que le proporcionas datos y luego renderiza la vista de forma eficiente y predecible. Redux es un framework de gestión de estados que puedes utilizar para simplificar la gestión del estado de tu aplicación. Por lo general, en una aplicación React Redux, se crea un único almacén Redux que gestiona el estado de toda la aplicación. Tus componentes de React se suscriben sólo a las piezas de datos del almacén que son relevantes para su función. Luego, se envían acciones directamente desde los componentes de React, que luego activan las actualizaciones del almacén.

Aunque los componentes de React pueden gestionar su propio estado localmente, cuando se tiene una aplicación compleja, generalmente es mejor mantener el estado de la aplicación en una sola ubicación con Redux. Hay excepciones cuando los componentes individuales pueden tener un estado local específico sólo para ellos. Por último, debido a que Redux no está diseñado para trabajar con React de fábrica, es necesario utilizar el paquete react-redux. Proporciona una forma para pasar Redux state y dispatch a tus componentes React como props.

A lo largo de los siguientes desafíos, primero crearás un simple componente React que te permita introducir nuevos mensajes de texto. Estos se añaden a un arreglo que se muestra en la vista. Esto debería ser un buen repaso de lo aprendido en las lecciones de React. A continuación, crearás un almacén Redux y acciones que gestionen el estado del arreglo de mensajes. Por último, utilizarás react-redux para conectar el almacén Redux con tu componente, extrayendo así el estado local en el almacén Redux.

Comienza con un componente DisplayMessages. Añade un constructor a este componente e inicialízalo con un estado que tenga dos propiedades: input, que se establece como una cadena vacía, y messages, que se establece como un arreglo vacío.

*/

class DisplayMessages extends React.Component {
  // Cambia el código debajo de esta línea
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }
  // Cambia el código encima de esta línea
  render() {
    return <div />
  }
};