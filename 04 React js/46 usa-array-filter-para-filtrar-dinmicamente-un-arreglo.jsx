{/*

Usa Array.filter() para filtrar dinámicamente un arreglo

El método de arreglo map es una potente herramienta que puedes usar a menudo al trabajar con React. Otro método relacionado con map es filter, que filtra el contenido de un arreglo basado en una condición, luego devuelve un nuevo arreglo. Por ejemplo, si tienes un arreglo de usuarios que todos tienen una propiedad online que puede establecerse en true o false, puedes filtrar sólo aquellos usuarios que estén en línea escribiendo:

let onlineUsers = users.filter(user => user.online);
En el editor de código, el state de MyComponent es inicializado con un arreglo de usuarios. Algunos usuarios están conectados y otros no. Filtra el arreglo para que sólo veas a los usuarios que están en línea. Para hacer esto, primero usa filter para devolver un nuevo arreglo que contiene solo a los usuarios cuya propiedad online es true. Luego, en la variable renderOnline, asigna sobre el arreglo filtrado, y devuelve un elemento li para cada usuario que contiene el texto de su username. Asegúrate de incluir también una única key, como en los últimos desafíos.

*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter((user) => {
      return user.online
    }); // Cambia esta línea
    const renderOnline = usersOnline.map((user) => {
      return (<li key={user.username}>{user.username}</li>)
    }); // Cambia esta línea
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}