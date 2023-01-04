{/*

Proporciona a los elementos hermanos un atributo de clave única

El último desafío mostró cómo el método map es usado para representar dinámicamente un número de elementos según la entrada del usuario. Sin embargo, faltaba una pieza importante de ese ejemplo. Cuando creas un arreglo de elementos, cada uno necesita un atributo key establecido en un valor único. React usa estas claves para realizar un seguimiento de los elementos que se agregan, cambian o eliminan. Esto ayuda a que el proceso de re-renderización sea más eficiente cuando la lista se modifica de alguna manera.

Nota: Las claves solo necesitan ser únicas entre elementos hermanos, no es necesario que sean globalmente únicas en tu aplicación.

El editor de código tiene un arreglo con algunos frameworks frontend y un componente funcional sin estado llamado Frameworks(). Frameworks() necesita mapear (asignar) el arreglo a una lista desordenada, como en el último desafío. Finaliza la escritura de la función callback map para devolver un elemento li por cada framework en el arreglo frontEndFrameworks. Esta vez, debes asegurarte de dar a cada elemento li un atributo key, establecido a un valor único. Los elementos li también deben contener texto de frontEndFrameworks.

Normalmente, deseas hacer que la clave sea algo que identifique de manera única el elemento que se está procesando. Como último recurso se puede utilizar el índice del arreglo, pero normalmente se debe intentar usar una identificación única.

*/}

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) => {
    return (<li key={item}>{item}</li>)
  }) // Cambia esta línea
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};