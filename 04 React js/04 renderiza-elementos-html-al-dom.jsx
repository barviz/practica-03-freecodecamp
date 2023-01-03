{/*

Renderiza elementos HTML al DOM

Hasta ahora, has aprendido que JSX es una herramienta conveniente para escribir HTML legible dentro de JavaScript. Con React, podemos renderizar este JSX directamente al DOM HTML usando la API de renderizado de React conocida como ReactDOM.

ReactDOM ofrece un método simple para renderizar elementos React al DOM que se ve así: ReactDOM.render(componentToRender, targetNode), donde el primer argumento es el elemento o componente React que deseas renderizar, y el segundo argumento es el nodo DOM al que se quiere renderizar el componente.

Como era de esperarse, ReactDOM.render() debe llamarse después de las declaraciones de los elementos JSX, al igual que hay que declarar las variables antes de usarlas.

El editor de código tiene un componente JSX simple. Usa el método ReactDOM.render() para renderizar este componente a la página. Puedes pasar elementos JSX definidos directamente como el primer argumento y utilizar document.getElementById() para seleccionar el nodo DOM al que renderizar. Hay un div con id='challenge-node' disponible para que lo uses. Asegúrate de no cambiar la constante JSX.

 */}


const JSX = (
  <div id='challenge-node'>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Cambia el código debajo de esta línea

ReactDOM.render(JSX, document.getElementById("challenge-node"));