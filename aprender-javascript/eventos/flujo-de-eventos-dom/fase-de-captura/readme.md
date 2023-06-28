En este ejemplo, tenemos un contenedor

```html
<div id="contenedor"></div>
```

y un botón

```html
<button id="boton"></button>
```

Hemos agregado dos event listeners con la opción useCapture establecida en true para habilitar la fase de captura.

Cuando haces clic en el botón, el evento de clic se propaga hacia abajo en la fase de captura. Esto significa que el primer event listener asociado al contenedor se activa antes que el segundo event listener asociado al botón.

Por lo tanto, en la consola, verás primero el mensaje:
"Captura: Contenedor"
y luego veras "Captura: Botón".

Este es solo un ejemplo básico para ilustrar el concepto de captura de eventos. En la propagación de eventos reales, hay más detalles y posibilidades de manipulación del flujo de eventos a través del DOM.

Explicacion tecnica:

Por defecto, los event listeners en el DOM se activan durante la fase de burbujeo. Esto significa que cuando ocurre un evento en un elemento específico, el evento se propaga desde ese elemento objetivo hacia arriba a través de los elementos padres en el camino hacia la raíz del documento, y los event listeners asociados a esos elementos padres tienen la oportunidad de capturar y manejar el evento.

El flujo de eventos en el DOM sigue el modelo de "captura y burbujeo", y la fase de burbujeo es la fase predeterminada para la activación de los event listeners. Sin embargo, es posible cambiar el comportamiento predeterminado utilizando el método addEventListener() con el tercer parámetro opcional, llamado useCapture.

Cuando useCapture se establece en true, el event listener se activará durante la fase de captura, es decir, antes de que el evento llegue al elemento objetivo. Si se establece en false o no se proporciona, el event listener se activará durante la fase de burbujeo, que es el comportamiento predeterminado.
