{/*

Pasa una función callback como "props"

Puedes pasar state como "props" a los componentes hijos, pero no estás limitado a pasar datos. También puedes pasar funciones manejadoras o cualquier método que se defina en un componente React a un componente hijo. Así es como tú permites que los componentes hijos interactúen con sus componentes padres. Pasas métodos a un hijo igual que un "prop" normal. Se le asigna un nombre y tienes acceso a ese nombre de método en this.props en el componente hijo.

Hay tres componentes descritos en el editor de código. El componente MyApp es el padre que renderizará los componentes hijos GetInput y RenderInput. Añade el componente GetInput al método de renderizar en MyApp, luego pásale un "prop" llamado input asignado a inputValue desde el estado state de MyApp. También crea un "prop" llamado handleChange y pasa el controlador de entrada handleChange a este.

A continuación, añade RenderInput al método de renderizar en MyApp, luego crea un "prop" llamado input y pasa el inputValue desde el estado state a este. Una vez que hayas terminado podrás escribir en el campo input en el componente GetInput, que luego llama al método manejador en su padre a través de "props". Esto actualiza la entrada en el state del padre, que se pasa como "props" a ambos hijos. Observa cómo fluyen los datos entre los componentes y cómo la única fuente de verdad sigue siendo el state del componente padre. Es cierto que este ejemplo es un poco inventado, pero debe servir para ilustrar cómo los datos y las funciones callback pueden ser pasados entre componentes React.

*/}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Cambia el código debajo de esta línea */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* Cambia el código encima de esta línea */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};