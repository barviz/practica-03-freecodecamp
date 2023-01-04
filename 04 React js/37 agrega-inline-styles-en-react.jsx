{/*

Agrega inline styles en React

Es posible que hayas notado en el último desafío que había otras diferencias de sintaxis con respecto a los "inline styles" (estilos en línea) de HTML, además del atributo style establecido en un objeto de JavaScript. En primer lugar, los nombres de ciertas propiedades de estilo CSS utilizan camel case. Por ejemplo, el último desafío establece el tamaño de la fuente con fontSize en lugar de font-size. Palabras que incluyen guion como font-size son sintaxis inválidas para propiedades de objetos de JavaScript, por lo que React utiliza camel case. Como regla, cualquier propiedad de estilo que usa guion se escribe usando camel case en JSX.

Todas las unidades de longitud del valor de la propiedad (como height, width, y fontSize) se supone que están en px a menos que se especifique lo contrario. Si quieres utilizar em, por ejemplo, debes envolver el valor y las unidades entre comillas, como {fontSize: "4em"}. Aparte de los valores de longitud que por defecto son px, todos los demás valores de las propiedades deben estar envueltos entre comillas.

Si tienes una gran cantidad de estilos, puedes asignar un object de estilos a una constante para mantener tu código organizado. Declara tu constante "styles" como una variable global al principio del archivo. Inicializa la constante styles y asígnale un object con tres propiedades de estilo y sus valores. Dale al div un color purple, un tamaño de fuente de 40 y un borde 2px solid purple. Luego asigna al atributo style la constante styles.

*/}

var styles = {
  color: "purple",
  fontSize: "40",
  border: "2px solid purple"
};
// Cambia el código encima de esta línea
class Colorful extends React.Component {
  render() {
    // Cambia el código debajo de esta línea
    return (
      <div style={styles}>Style Me!</div>
    );
    // Cambia el código encima de esta línea
  }
};