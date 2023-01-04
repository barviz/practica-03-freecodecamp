/*

Escribe un contador con Redux

¡Ahora ya has aprendido todos los principios básicos de Redux! Has visto cómo crear acciones y creadores de acción, crear un almacén Redux, enviar tus acciones contra el almacén y diseñar actualizaciones de estado con reductores puros. Incluso has visto cómo gestionar estados complejos con la composición de reductores y manejar acciones asíncronas. Estos ejemplos son simplistas, pero estos conceptos son los principios básicos de Redux. Si los entiendes bien, estás listo para empezar a crear tu propia aplicación Redux. Los próximos desafíos cubren algunos de los detalles relacionados con la inmutabilidad de state, pero primero, aquí hay un repaso de todo lo que has aprendido hasta ahora.

En esta lección, implementarás un simple contador con Redux desde cero. El editor de código proporciona lo básico, ¡pero tendrás que completar los detalles! Utiliza los nombres que se proporcionan y define los creadores de acciones incAction y decAction, el counterReducer(), los tipos de acción INCREMENT y DECREMENT, y finalmente el store de Redux. Una vez que hayas terminado deberías poder enviar acciones INCREMENT o DECREMENT para incrementar o disminuir el estado mantenido en el store. ¡Buena suerte construyendo tu primera aplicación Redux!

*/

const INCREMENT = "INCREMENT"; // Define una constante para acciones de incremento
const DECREMENT = "DECREMENT"; // Define una constante para acciones de decremento

const counterReducer = (state = 0, action) => {

  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}; // Define el reductor counter que aumentará o disminuirá el estado en función de la acción que reciba

const incAction = () => {
  return {
    type: INCREMENT
  }
}; // Define un creador de acción para incrementar

const decAction = () => {
  return {
    type: DECREMENT
  }
}; // Define un creador de acción para decrementar

const store = Redux.createStore(counterReducer); // Define el store de Redux aquí, pasando tus reductores