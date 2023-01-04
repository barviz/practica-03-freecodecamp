{/*

Define una clase HTML en JSX

Ahora que te sientes cómodo escribiendo JSX, te preguntarás cuanto difiere de HTML.

Hasta ahora, puede parecer que HTML y JSX son exactamente iguales.

Una diferencia clave en JSX es que ya no puedes usar la palabra class para definir clases HTML. Esto es debido a que class es una palabra reservada en JavaScript. En su lugar, JSX utiliza className.

De hecho, la convención de nomenclatura para todos los atributos HTML y referencias a eventos en JSX se convierte a camelCase. Por ejemplo, un evento de clic en JSX es onClick, en lugar de onclick. Del mismo modo, onchange se convierte en onChange. Si bien se trata de una diferencia sutil, es importante tenerlo en cuenta de ahora en adelante.

Aplica una clase myDiv al div proporcionado en el código JSX.

*/}

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);