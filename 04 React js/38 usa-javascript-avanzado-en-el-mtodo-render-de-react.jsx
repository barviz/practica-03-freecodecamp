{/*

Usa JavaScript avanzado en el método render de React

En desafíos anteriores, aprendiste cómo inyectar código JavaScript en código JSX usando llaves, { }, para tareas como acceder a props, pasar props, acceder al state, insertar comentarios en tu código y, más recientemente, diseñar tus componentes. Todos estos son casos de uso común para poner JavaScript en JSX, pero no son la única manera de utilizar código JavaScript en tus componentes React.

También puedes escribir JavaScript directamente en los métodos render, antes de la sentencia return, sin insertarlo dentro de llaves. Esto es porque aún no está dentro del código JSX. Cuando quieras utilizar una variable en el código JSX dentro de la sentencia return, colocas el nombre de la variable dentro de llaves.

En el código proporcionado, el método render tiene un arreglo que contiene 20 frases para representar las respuestas encontradas en el clásico juego "Magic Eight Ball" de los años ochenta. El evento clic del botón está vinculado al método ask, por lo que cada vez que se haga clic en el botón se generará un número aleatorio y se almacenará como el randomIndex en el state. En la línea 52, elimina la cadena change me! y reasigna la constante answer para que tu código acceda aleatoriamente a un índice diferente del arreglo possibleAnswers cada vez que se actualiza el componente. Finalmente, inserta la constante answer dentro de las etiquetas p.

*/}

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex] // Cambia esta línea
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Cambia el código debajo de esta línea */}
          {answer}
          {/* Cambia el código encima de esta línea */}
        </p>
      </div>
    );
  }
}