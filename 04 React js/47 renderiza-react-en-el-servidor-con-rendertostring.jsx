{/*

Renderiza React en el servidor con renderToString

Hasta ahora, has estado renderizando componentes React en el cliente. Normalmente, esto es lo que siempre harás. Sin embargo, hay algunos casos de uso donde tiene sentido renderizar un componente React en el servidor. Dado que React es una librería de vistas de JavaScript y se puede ejecutar JavaScript en el servidor con Node, esto es posible. De hecho, React proporciona un método renderToString() que puedes usar para este propósito.

Hay dos razones clave por las que el renderizado en el servidor puede ser usado en una aplicación del mundo real. Primero, sin hacer esto, tus aplicaciones de React consistirían en un archivo HTML relativamente vacío y un gran paquete de JavaScript cuando se carga inicialmente en el navegador. Esto puede no ser ideal para motores de búsqueda que intentan indexar el contenido de tus páginas para que la gente pueda encontrarte. Si renderizas el código HTML inicial en el servidor y lo envía al cliente, la carga de la página inicial contiene todo el código de la página que los motores de búsqueda pueden rastrear. Segundo, esto crea una experiencia de carga de página inicial más rápida porque el HTML renderizado es más pequeño que el código JavaScript de toda la aplicación. React aún podrá reconocer tu aplicación y administrarla después de la carga inicial.

El método renderToString() se proporciona en ReactDOMServer, el cual está disponible aquí como un objeto global. El método toma un argumento que es un elemento React. Usa esto para renderizar App a una cadena.



*/}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />
  }
};

// Cambia el código debajo de esta línea
ReactDOMServer.renderToString(<App />);