{/*

Crea un componente funcional sin estado

Los componentes son el núcleo de React. Todo en React es un componente y aquí aprenderás a crear uno.

Hay dos maneras de crear un componente React. La primera forma es utilizar una función JavaScript. Definir un componente de esta manera crea un componente funcional sin estado. El concepto de estado en una solicitud se abordará en retos posteriores. Por ahora, piensa en un componente sin estado como uno que puede recibir datos y renderizarlos, pero no administra o rastrea los cambios en esos datos. (Cubriremos la segunda manera de crear un componente React en el siguiente desafío.)

Para crear un componente con una función, simplemente escribe una función JavaScript que devuelva ya sea JSX o null. Una cosa importante a tener en cuenta es que React requiere que tu nombre de función comience con una letra mayúscula. Aquí hay un ejemplo de un componente funcional sin estado que asigna una clase HTML en JSX:

const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
Después de ser transpilado, el <div> tendrá una clase CSS de customClass.

Debido a que un componente JSX representa HTML, podrías poner varios componentes juntos para crear una página HTML más compleja. Esta es una de las ventajas clave de la arquitectura de componentes que React proporciona. Te permite componer tu interfaz de usuario de muchos componentes separados y aislados. Esto hace más fácil construir y mantener complejas interfaces de usuario.

El editor de código tiene una función llamada MyComponent. Completa esta función para que retorne un único elemento div que contiene alguna cadena de texto.

Nota: El texto se considera hijo del elemento div, por lo que no podrás utilizar una etiqueta de autocierre.

*/}

const MyComponent = function() {
  // Cambia el código debajo de esta línea

  return (
    <div>texto</div>
  );

  // Cambia el código encima de esta línea
}