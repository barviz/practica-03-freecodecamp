{/*

Utiliza una expresión ternaria para el renderizado condicional

Antes de pasar a técnicas de renderizado dinámico, hay una última forma de usar condicionales de JavaScript incorporados para representar lo que quieres: el operador ternario. El operador ternario a menudo es utilizado como un acceso directo para las sentencias if/else en JavaScript. No son tan robustas como las sentencias tradicionales if/else, pero son muy populares entre los desarrolladores de React. Una de las razones de esto es debido a cómo se compila JSX, las sentencias if/else no se pueden insertar directamente en el código JSX. Puede que hayas notado esto hace un par de desafíos, cuando se requirió una sentencia if/else, siempre estaba fuera de la sentencia return. Las expresiones ternarias pueden ser una excelente alternativa si deseas implementar lógica condicional dentro de tu JSX. Recuerda que un operador ternario tiene tres partes, pero puedes combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:

condition ? expressionIfTrue : expressionIfFalse;
El editor de código tiene tres constantes definidas dentro del método render() del componente CheckUserAge. Estas se llaman buttonOne, buttonTwo y buttonThree. A cada una de estas se le asigna una expresión JSX simple que representa un elemento de botón. Primero, inicializa el estado de CheckUserAge con input y userAge ambos configurados a valores de una cadena vacía.

Una vez que el componente está renderizando información a la página, los usuarios deberían tener una forma de interactuar con ella. Dentro de la declaración return del componente, configura una expresión ternaria que implementa la siguiente lógica: cuando la página carga por primera vez, renderiza el botón de envío, buttonOne, a la página. Luego, cuando un usuario ingrese su edad y haga clic en el botón, renderiza un botón diferente basado en la edad. Si un usuario introduce un número menor que 18, renderiza buttonThree. Si un usuario introduce un número mayor o igual a 18, renderiza buttonTwo.



*/}

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Cambia el código debajo de esta línea
    this.state = {
      input: "",
      userAge: ""
    }
    // Cambia el código encima de esta línea
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Cambia el código debajo de esta línea */}
        {this.state.input === "" || this.state.input != this.state.userAge ? buttonOne : (this.state.input < 18 ? buttonThree : buttonTwo)}
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}