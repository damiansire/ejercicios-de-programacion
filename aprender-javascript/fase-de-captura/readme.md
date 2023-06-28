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
