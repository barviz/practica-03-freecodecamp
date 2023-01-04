{/*

Renderiza condicionalmente a partir de "props"

Hasta ahora, has visto cómo utilizar if/else, &&, y el operador ternario (condition ? expressionIfTrue : expressionIfFalse) para tomar decisiones condicionales sobre qué renderizar y cuándo. Sin embargo, queda un tema importante por discutir que te permite combinar cualquiera o todos estos conceptos con otra poderosa característica de React: las props. El uso de props para renderizar condicionalmente el código es muy común entre los desarrolladores de React, es decir, utilizan el valor de una prop dada para automáticamente tomar decisiones sobre qué renderizar.

En este desafío, configurarás un componente hijo para tomar decisiones de renderizado basadas en props. También usarás el operador ternario, pero puedes ver cómo varios de los otros conceptos que se cubrieron en los últimos desafíos podrían ser igual de útiles en este contexto.

El editor de código tiene dos componentes que están parcialmente definidos para ti: un padre llamado GameOfChance, y un hijo llamado Results. Se utilizan para crear un juego sencillo en el que el usuario presiona un botón para ver si gana o pierde.

Primero, necesitarás una expresión simple que devuelva al azar un valor diferente cada vez que se ejecute. Puedes usar Math.random(). Este método devuelve un valor entre 0 (inclusivo) y 1 (exclusivo) cada vez que se llama. Así que para las probabilidades de 50/50, usa Math.random() >= .5 en tu expresión. Estadísticamente hablando, esta expresión devolverá true 50% de las veces, y false el otro 50%. En el método de renderizado, reemplaza null con la expresión anterior para completar la declaración de variables.

Ahora tienes una expresión que puedes usar para tomar una decisión aleatoria en el código. A continuación, debes implementar esto. Renderiza el componente Results como hijo de GameOfChance, y pásalo a expression como un prop llamado fiftyFifty. En el componente Results, escribe una expresión ternaria para renderizar el elemento h1 con el texto You Win! o You Lose! basado en el prop fiftyFifty que está siendo pasado desde GameOfChance. Finalmente, asegúrate de que el método handleClick() está contando correctamente cada turno para que el usuario sepa cuántas veces ha jugado. Esto también sirve para que el usuario sepa que el componente se ha actualizado en caso de que gane o pierda dos veces seguidas.

*/}

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */ }
    return <h1>{this.props.fiftyFifty >= 0.5 ? "You Win!" : "You Lose!"}</h1>;
    {/* Change code above this line */ }
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}