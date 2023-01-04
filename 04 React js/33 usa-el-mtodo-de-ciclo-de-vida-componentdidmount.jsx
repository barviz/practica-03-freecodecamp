{/*

Usa el método de ciclo de vida componentDidMount

La mayoría de los desarrolladores web, en algún momento, necesitan llamar al endpoint de un API para obtener datos. Si estás trabajando con React, es importante saber dónde realizar esta acción.

La mejor práctica con React es ubicar las llamadas API o cualquier llamada a tu servidor en el método de ciclo de vida componentDidMount(). Este método se llama después de que un componente es montado (mounted) en el DOM. Cualquier llamada a setState() aquí desencadenará un re-renderizado de tu componente. Cuando se llame a una API en este método, y se modifique el estado con los datos que la API devuelve, automáticamente se ejecutará una actualización una vez que los datos sean recibidos.

Hay una llamada simulada al API en componentDidMount(). Esta llamada modifica el estado después de 2.5 segundos para simular una llamada a un servidor para obtener datos. Este ejemplo consulta el total de usuarios activos actual para un sitio. En el método render, se renderiza el valor de activeUsers en el h1 después del texto Active Users:. Mira lo que sucede en la vista previa, y siéntete libre de cambiar el tiempo de espera para ver los diferentes efectos.

*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Cambia el código debajo de esta línea */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Cambia el código encima de esta línea */}
      </div>
    );
  }
}