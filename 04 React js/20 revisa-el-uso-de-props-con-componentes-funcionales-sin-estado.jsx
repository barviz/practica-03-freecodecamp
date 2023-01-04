{/*

Revisa el uso de "props" con componentes funcionales sin estado

Excepto por el último desafío, has estado pasando props a componentes funcionales sin estado. Estos componentes actúan como funciones puras. Aceptan props como entrada y devuelven la misma vista cada vez que se les pasa el mismo props. Tal vez te estes preguntando qué es estado, y el próximo desafío lo cubrirá con más detalle. Antes de eso, aquí hay una revisión de la terminología de los componentes.

Un componente funcional sin estado, es cualquier función que escribas que acepte props y devuelva JSX. Un componente sin estado, por otra parte, es una clase que extiende React.Component, pero no usa el estado interno (que será cubierto en el siguiente desafío). Finalmente, un componente con estado es un componente de clase que mantiene su propio estado interno. Puedes ver componentes con estado referidos simplemente como componentes de React.

Un patrón común es intentar minimizar el estado y crear componentes funcionales sin estado siempre que sea posible. Esto ayuda a contener tu administración de estado a un área específica de tu aplicación. A su vez, esto mejora el desarrollo y el mantenimiento de tu aplicación al facilitar el seguimiento de cómo los cambios de estado afectan a su comportamiento.

El editor de código tiene un componente CampSite que renderiza un componente Camper como un componente hijo. Define el componente Camper y asigna los props predeterminados de { name: 'CamperBot' }. Dentro del componente Camper, renderiza el código que quieras, pero asegúrate de tener un elemento p que incluya sólo el valor name que se pasa como un prop. Por último, define propTypes en el componente Camper para requerir que name sea proporcionado como un prop y verifique que sea de tipo string.

*/}

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Cambia el código debajo de esta línea

const Camper = (props) => {
  return <p>{props.name}</p>
}

Camper.defaultProps = {name: 'CamperBot'};
Camper.propTypes = {name: PropTypes.string.isRequired};