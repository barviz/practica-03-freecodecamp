{/*

Introducción a los estilos en línea

Hay otros conceptos complejos que añaden poderosas capacidades a tu código de React. Pero tal vez te estés preguntando sobre el problema más sencillo de cómo dar estilo a esos elementos JSX que creas en React. Probablemente sepas que no será exactamente lo mismo que trabajar con HTML debido a la manera en que aplicas clases a los elementos JSX.

Si importas estilos desde una hoja de estilos, esto no es muy diferente. Aplica una clase a tu elemento JSX usando el atributo className, y aplica estilos a la clase en tu hoja de estilos. Otra opción es aplicar estilos en línea, los cuales son muy comunes en el desarrollo de ReactJS.

Los estilos en línea se aplican a los elementos JSX de forma similar a como se hace en HTML, pero con algunas diferencias en JSX. Aquí hay un ejemplo de un estilo en línea en HTML:

<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
Los elementos JSX usan el atributo style, pero debido a la forma en que JSX es transpilado, no puede establecer el valor a un string. Es su lugar, lo establece igual a un object de JavaScript. Aquí un ejemplo:

<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
¿Notas cómo ponemos en camelCase la propiedad fontSize? Esto es porque React no aceptará claves kebab-case en el objeto de estilo. React aplicará el nombre correcto de la propiedad por nosotros en el HTML.

Agrega un atributo style al div en el editor de código para darle al texto un color rojo y un tamaño de fuente de 72px.

Ten en cuenta que puedes establecer opcionalmente el tamaño de la fuente para que sea un número, omitiendo las unidades px, o escribirlo como 72px.

*/}

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};