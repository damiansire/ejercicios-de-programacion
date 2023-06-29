Es común referirse al elemento `<html>` como un hijo del objeto document en el contexto del árbol DOM. El objeto document representa el documento HTML cargado en el navegador y proporciona métodos y propiedades para interactuar con él.

El objeto document tiene una propiedad llamada documentElement, que hace referencia al elemento raíz del documento HTML, es decir, al elemento `<html>`. Por lo tanto, se puede decir que el elemento `<html>` es un hijo del objeto document.

Aquí tienes un ejemplo de cómo acceder al elemento `<html>` a través del objeto document en JavaScript:

```javascript
var htmlElement = document.documentElement;
```

En este caso, la variable htmlElement contendrá una referencia al elemento `<html>`, que se considera un hijo del objeto document.

La relación entre el objeto document y el elemento `<html>` se basa en la estructura del árbol DOM, donde el objeto document es la raíz del árbol y el elemento `<html>` es un descendiente directo del objeto document.

Es importante tener en cuenta que esta referencia puede variar según el contexto o la forma en que se acceda al árbol DOM, pero en general, se considera al elemento `<html>` como un hijo del objeto document.
