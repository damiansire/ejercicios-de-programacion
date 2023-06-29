## Target vs current target

En este ejemplo, tenemos un elemento outer que contiene un elemento inner, que a su vez contiene un botón btn. Cada elemento tiene un controlador de eventos click asociado.

Cuando haces clic en el botón, se activarán los controladores de eventos en los elementos btn, inner y outer. Veamos la salida en la consola para cada caso:

Si haces clic directamente en el botón btn:

event.target será el botón btn.
event.currentTarget será también el botón btn, ya que es el elemento en el que se agregó el controlador de eventos click.
Si haces clic en el elemento inner (fuera del botón):

event.target será el elemento inner.
event.currentTarget seguirá siendo el elemento outer, ya que es el elemento en el que se agregó el controlador de eventos click.
Si haces clic en el elemento outer (fuera de inner y btn):

event.target será el elemento outer.
event.currentTarget también será el elemento outer, ya que es el elemento en el que se agregó el controlador de eventos click.
En resumen, event.target se refiere al elemento específico que desencadenó el evento, mientras que event.currentTarget se refiere al elemento en el que se agregó el controlador de eventos, sin importar dónde se haya originado el evento.
