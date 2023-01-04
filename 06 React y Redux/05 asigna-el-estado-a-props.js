/*

Asigna el estado a props

El componente Provider te permite proporcionar state y dispatch a tus componentes React, pero debes especificar exactamente qué estado y acciones quieres. De esta manera, te aseguras de que cada componente sólo tiene acceso al estado que necesita. Esto se consigue creando dos funciones: mapStateToProps() y mapDispatchToProps().

En estas funciones, declaras a qué partes del estado quieres tener acceso y qué creadores de acción necesitas poder enviar. Una vez que estas funciones están en su lugar, verás cómo usar el método React Redux connect para conectarlos a tus componentes en otro desafío.

Nota: Tras bambalinas, React Redux utiliza el método store.subscribe() para implementar mapStateToProps().

Crea una función mapStateToProps(). Esta función debe tomar state como argumento, y luego devolver un objeto que asigna ese estado a nombres de propiedades específicas. Estas propiedades serán accesibles a tu componente a través de props. Dado que este ejemplo mantiene todo el estado de la aplicación en un solo arreglo, puedes pasar todo ese estado a tu componente. Crea una propiedad messages en el objeto que se devuelve, y establécela como state.

*/

const state = [];

// Cambia el código debajo de esta línea

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}