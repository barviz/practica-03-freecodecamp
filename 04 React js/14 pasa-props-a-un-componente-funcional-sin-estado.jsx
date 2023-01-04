{/*

Pasa "props" a un componente funcional sin estado

Los desafíos anteriores cubrieron varios casos de creación y composición de elementos de JSX, componentes funcionales y componentes de clase estilo ES6 en React. Con estos cimientos, ha llegado la hora de observar otro patrón de uso muy común en React: props. En React, se pueden pasar props, o propiedades a componentes hijos. Digamos, que tienes un componente App que devuelve un componente hijo llamado Welcome, el cual es un componente funcional sin estado. Puedes pasarle una propiedad llamada user a Welcome escribiendo:

<App>
  <Welcome user='Mark' />
</App>
Puedes utilizar atributos personalizados de HTML creados por ti y soportados por React para ser pasados por props a tu componente. En este caso, la propiedad creada user es pasada como atributo al componente Welcome. Dado que Welcome es un componente funcional sin estado, tiene acceso a este valor de la siguiente manera:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>
Este valor es llamado props por convención y, cuando se trata de componentes funcionales sin estado, se lo considera como un argumento pasado a una función que retorna JSX. Puedes acceder el valor del argumento en el cuerpo de la función. En los componentes de clase, verás que esto es un poco diferente.

Hay componentes Calendar y CurrentDate en el editor de código. Al prensentar CurrentDate desde el componente Calendar, pasa una propiedad de date asignada a la fecha actual desde el objeto Date de JavaScript. Luego, accede a este prop dentro del componente CurrentDate, mostrando su valor dentro de las etiquetas p. Tenga en cuenta que los valores prop se evalúen como JavaScript, deben estar encerrados dentro de corchetes, por ejemplo date={Date()}.

*/}

const CurrentDate = (props) => {
  return (
    <div>
      { /* Cambia el código debajo de esta línea */ }
      <p>The current date is: {props.date}</p>
      { /* Cambia el código encima de esta línea */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Cambia el código debajo de esta línea */ }
        <CurrentDate date={Date()}/>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};