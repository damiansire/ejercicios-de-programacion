El flujo de eventos en el DOM sigue el modelo de "captura y burbujeo".

# Fases

En el flujo de eventos en el Document Object Model (DOM), la captura y el burbujeo son dos fases que describen cómo se propagan los eventos a través de los elementos del árbol DOM.

## Fase de Captura

La fase de captura ocurre antes de que el evento alcance el elemento objetivo.

Durante esta fase, el evento se propaga desde el elemento raíz (normalmente `<html>`) hacia abajo a través de los elementos padres hasta llegar al elemento objetivo.

Durante esta propagación descendente, los event listeners asociados a los elementos padres tienen la oportunidad de capturar y manejar el evento antes de que alcance el elemento objetivo.

## Fase Objetivo

Una vez que el evento llega al elemento objetivo, se activa en la fase del objetivo.

Aquí, los event listeners asociados directamente al elemento objetivo se activan y manejan el evento.

Esta es la fase en la que ocurre el "punto de destino" del evento.

## Fase Burbujeo

Después de la fase del objetivo, comienza la fase de burbujeo.

Durante esta fase, el evento se propaga desde el elemento objetivo de regreso hacia el elemento raíz, pasando nuevamente por los elementos padres en el camino.

Los event listeners asociados a los elementos padres tienen otra oportunidad de capturar y manejar el evento durante esta fase de burbujeo.

Por defecto, los event listeners en el DOM se activan durante la fase de burbujeo.

Sin embargo, es posible cambiar el comportamiento predeterminado utilizando el método addEventListener() con el tercer parámetro opcional, llamado useCapture.

# Flujo de eventos del dom

El flujo de eventos completo considerando ambas fases:

1. El usuario hace clic en el botón.
2. Se genera un evento de clic en el elemento `<button>`.
3. El evento de clic comienza la fase de captura desde el elemento raíz (`<html>`) hacia abajo a través de los elementos padres hacia el elemento objetivo (`<button>`).
4. Durante la fase de captura, los event listeners asociados a los elementos padres que están configurados para capturar el evento de clic se activan secuencialmente, en orden descendente hacia el elemento objetivo.
5. El evento de clic alcanza el elemento objetivo (`<button>`).
6. Luego, el evento comienza la fase de burbujeo desde el elemento objetivo hacia arriba a través de los elementos padres en el camino de regreso hacia el elemento raíz (`<html>`).
7. Durante la fase de burbujeo, los event listeners asociados a los elementos padres, en orden ascendente hacia el elemento raíz, tienen la oportunidad de capturar y manejar el evento de clic.
8. Si hay event listeners asociados al elemento raíz (`<html>`), también se activarán durante la fase de burbujeo, siempre que estén configurados para capturar el evento de clic.

En resumen, el flujo de eventos completo sería: captura descendente desde el elemento raíz hasta el elemento objetivo, activación de event listeners en el elemento objetivo, y burbujeo ascendente desde el elemento objetivo hasta el elemento raíz.

# Preguntas frecuentes

## Como sabe en la fase de captura llegar al elemtento objetivo?

Cuando haces clic en un botón, el evento se propaga desde la raíz del documento hasta el elemento específico que generó el clic. Para poder llegar del elemento raíz al elemento objetivo, el navegador utiliza la estructura jerárquica del árbol DOM.

El árbol DOM es una representación estructurada de todos los elementos HTML en una página web, donde cada elemento está anidado dentro de otros elementos en forma de árbol. El elemento raíz es el elemento HTML principal (<html>) y los elementos hijos están contenidos dentro de él.

Cuando ocurre un evento, como un clic en un botón, el navegador sigue la cadena de elementos padres desde el elemento objetivo hasta la raíz del documento, utilizando las relaciones padre-hijo definidas en el árbol DOM.

El navegador utiliza esta información para determinar qué elementos están involucrados en la propagación del evento y activar los event listeners correspondientes en el orden correcto durante las fases de captura y burbujeo.

En resumen, el navegador sabe cómo llegar del elemento raíz al elemento que generó el clic utilizando la estructura jerárquica del árbol DOM, siguiendo los elementos padres desde la raíz hasta el elemento objetivo. Esto permite que se activen y manejen los event listeners asociados a los elementos en la ruta de propagación del evento.
