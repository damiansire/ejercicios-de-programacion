Explicacion del ejemplo:
En este ejemplo, se agrega un controlador de eventos al elemento contenedor <ul> utilizando addEventListener. Cuando se hace clic en cualquier elemento <li> dentro de <ul>, el evento se propaga hacia arriba y se captura en el controlador de eventos en el elemento contenedor. Luego, utilizando event.target, se verifica si el evento ocurrió en un elemento <li>. Si es así, se accede al elemento contenedor utilizando event.currentTarget y se realiza una acción específica basada en el elemento <li> en el que se hizo clic. En este caso, simplemente se muestra un mensaje en la consola y se cambia el color de fondo del elemento contenedor.

Este es un ejemplo básico de delegación de eventos utilizando currentTarget, donde puedes controlar eventos en elementos hijos sin necesidad de agregar un controlador de eventos a cada elemento individualmente.

Explicacion de event delegation:

La delegación de eventos (event delegation) es una técnica en la programación web que consiste en asignar un único controlador de eventos a un elemento contenedor en lugar de asignar controladores de eventos a elementos individuales. En lugar de capturar y manejar eventos en elementos específicos, el evento se captura en el elemento contenedor y se determina qué elemento interno desencadenó el evento utilizando la propiedad event.target o event.srcElement.

La delegación de eventos ofrece varios beneficios, como:

Eficiencia: Al asignar un solo controlador de eventos en un elemento contenedor, se evita la necesidad de asignar controladores a múltiples elementos individuales. Esto es especialmente útil cuando hay una gran cantidad de elementos y se crean dinámicamente.

Simplificación del código: Con la delegación de eventos, el código se vuelve más conciso y fácil de mantener, ya que no es necesario adjuntar y eliminar controladores de eventos en elementos individuales cuando se agregan o eliminan dinámicamente.

Manejo de eventos en elementos futuros: Si se agregan nuevos elementos al contenedor en el futuro, los eventos se seguirán capturando y manejando automáticamente sin la necesidad de adjuntar nuevos controladores de eventos.

La delegación de eventos se basa en la propagación de eventos en el modelo de eventos DOM, donde el evento se propaga desde el elemento objetivo hasta el elemento raíz del documento (burbujeo) o desde el elemento raíz hasta el elemento objetivo (captura). Al capturar el evento en un elemento contenedor y utilizar las propiedades event.target o event.srcElement, se puede determinar qué elemento interno desencadenó el evento y tomar acciones en consecuencia.

En resumen, la delegación de eventos es una técnica poderosa para manejar eventos en elementos múltiples de manera eficiente y simplificada, especialmente cuando se trabaja con elementos dinámicos o una gran cantidad de elementos en la página.
