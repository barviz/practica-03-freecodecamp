{/*

Aprende sobre las etiquetas JSX auto-cerradas

Hasta ahora, has visto cómo JSX difiere de HTML de una manera clave con el uso de className vs. class para definir clases HTML.

Otra forma importante en la que JSX difiere de HTML está en la idea de la etiqueta de auto-cierre.

En HTML, casi todas las etiquetas tienen una etiqueta de apertura y cierre: <div></div>; la etiqueta de cierre siempre tiene una barra inclinada antes del nombre de la etiqueta que está cerrando. Sin embargo, hay instancias especiales en HTML llamadas “etiquetas auto-cerradas”, o etiquetas que no requieren una etiqueta de apertura y cierre antes de que otra etiqueta pueda comenzar.

Por ejemplo, la etiqueta de salto de línea puede escribirse como <br> o como <br />, pero nunca debe escribirse como <br></br>, ya que no contiene ningún contenido.

En JSX, las reglas son un poco diferentes. Cualquier elemento JSX se puede escribir con una etiqueta de auto-cierre, y cada elemento debe ser cerrado. La etiqueta de salto de línea, por ejemplo, siempre debe escribirse como <br /> para ser un JSX válido que puede ser transpilado. Por otra parte, un <div> puede escribirse como <div /> o <div></div>. La diferencia es que en la primera versión de sintaxis no hay forma de incluir nada en la <div />. Verás en desafíos posteriores que esta sintaxis es útil al renderizar componentes de React.

Corrige los errores en el editor de código para que sea JSX válido y se transpile exitosamente. Asegúrate de no cambiar nada del contenido: sólo tienes que cerrar las etiquetas donde se necesite.

*/}

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);