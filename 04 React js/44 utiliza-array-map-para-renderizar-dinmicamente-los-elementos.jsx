{/*

Utiliza Array.map() para renderizar dinámicamente los elementos

El renderizado condicional es útil, pero es posible que necesites tus componentes para renderizar un número desconocido de elementos. A menudo en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción de un usuario con ese programa. Los programadores necesitan escribir su código para manejar correctamente ese estado desconocido antes de tiempo. Usar Array.map() en React ilustra este concepto.

Por ejemplo, crea una aplicación simple "To Do List". Como programador, no tienes forma de saber cuántos elementos puede tener un usuario en su lista. Necesitas configurar tu componente para renderizar dinámicamente el número correcto de elementos de la lista mucho antes de que alguien que use el programa decida que hoy es día de lavandería.

El editor de código tiene la mayoría del componente MyToDoList configurado. Parte de este código debería parecer familiar si completaste el desafío de formulario controlado. Vas a notar un textarea y un button, junto con un par de métodos que rastrean sus estados, pero aún no se muestra nada a la página.

Dentro del constructor, crea un objeto this.state y define dos estados: userInput que debe inicializarse como una cadena vacía, y toDoList que debe inicializarse como un arreglo vacío. Luego, elimina el valor null del método render() a un costado de la variable items. En su lugar, utiliza la función map() para recorrer el arreglo toDoList almacenado en el estado interno del componente y renderizar un li por cada artículo. Intenta introducir la cadena eat, code, sleep, repeat dentro del textarea, haz clic en el botón y ve qué sucede.

Nota: Puede que sepas que todos los elementos hijos hermanos creados por una operación map como ésta necesitan poseer un atributo key único. No te preocupes, este es el tema de nuestro próximo desafío.

*/}

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Cambia el código debajo de esta línea
    this.state = {
      userInput: "",
      toDoList: []
    }
    // Cambia el código encima de esta línea
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item) => {
      return (<li>{item}</li>)
    }) // Cambia esta línea
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}