{/*

Escribe un componente React desde cero

Ahora que has aprendido los conceptos básicos de JSX y componentes React, es el momento de escribir un componente por tu cuenta. Los componentes React son el bloque de construcción principal de las aplicaciones React, por lo que es importante familiarizarse con cómo escribirlos. Recuerda, un componente típico de React es una class ES6 que hereda de React.Component. Tiene un método de render que retorna HTML (de JSX) o null. Esta es la estructura básica de un componente React. Una vez que tengas un buen entendimiento de esto, estarás preparado para empezar a construir proyectos React más complejos.

Define una clase MyComponent que herede de React.Component. Su método render debe devolver un div que contenga una etiqueta h1 con el texto: My First React Component! en él. Utiliza este texto de manera exacta, las mayúsculas, minúsculas y puntuación son importantes. También asegúrate de llamar el constructor de tu componente.

Renderiza este componente al DOM usando ReactDOM.render(). Hay un div con id='challenge-node' disponible para que lo uses.

 */}

// Cambia el código debajo de esta línea

class MyComponent extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));