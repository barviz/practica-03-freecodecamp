{/*

Crea un componente de estado
Uno de los temas más importantes en React es state. El estado consiste en cualquier dato que tu aplicación necesite conocer y que pueda cambiar con el tiempo. Quieres que tus aplicaciones respondan a los cambios de estado y presenten una interfaz de usuario actualizada cuando sea necesario. React ofrece una buena solución para el manejo de estado de aplicaciones web modernas.

Creas un estado en un componente de React declarando una propiedad state en la clase del componente en su constructor. Esto inicializa el componente con state cuando se crea. La propiedad state debe establecerse en un object de JavaScript. Declararlo se ve así:

this.state = {

}
Tienes acceso al objeto state a lo largo de la vida de tu componente. Puedes actualizarlo, renderizarlo en tu interfaz de usuario y pasarlo como propiedades a componentes hijos. El objeto state puede ser tan complejo o simple como lo necesites. Ten en cuenta que debes crear un componente de clase heredando React.Component para crear un state como este.

Hay un componente en el editor de código que está intentando renderizar una propiedad firstName desde su state. Sin embargo, no hay ningún state definido. Inicia el componente con state en el constructor y asigna tu nombre a la propiedadfirstName.

*/}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Cambia solo el código debajo de esta línea
    this.state = {
      firstName: "Superman"
    }
    // Cambia solo el código encima de esta línea
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};