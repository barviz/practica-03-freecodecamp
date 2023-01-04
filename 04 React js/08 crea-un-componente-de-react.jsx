{/*

Crea un componente de React

La otra forma de definir un componente React es con la sintaxis de clase de ES6 class. En el siguiente ejemplo, Kitten hereda de React.Component:

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
Esto crea una clase de ES6 Kitten que hereda de la clase React.Component. Así que la clase Kitten ahora tiene acceso a muchas características útiles de React, como el estado local y el ciclo de vida de los "hooks". No te preocupes si aún no estás familiarizado con estos términos, ya que se tratarán con más detalle en los desafíos posteriores. También ten en cuenta que la clase Kitten tiene un constructor definido dentro de ella que llama a super(). Utiliza super() para llamar al constructor de la clase padre, en este caso React.Component. El constructor es un método especial utilizado durante la inicialización de objetos que se crean con la palabra clave class. Es una mejor práctica llamar al constructor de un componente con super, y pasar sus propiedades props a ambos. Esto asegura que el componente esté inicializado correctamente. Por ahora, sepan que es estándar que se incluya este código. Pronto verás otros usos para el constructor, así como las props.

MyComponent está definido en el editor de código usando la sintaxis de clase. Termina de escribir el método render para que devuelva un elemento div que contiene un h1 con el texto Hello React!.

*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Cambia el código debajo de esta línea
    return(
      <div>
      <h1>Hello React!</h1>
      </div>
    );

    // Cambia el código encima de esta línea
  }
};