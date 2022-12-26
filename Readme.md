Leyendo HTML desde JS

```js
// Accede al elemento por medio de la etiqueta li
document.getElementsByTagName('li');

// Accede al elemento por medio de la clase
document.getElementsByClassName('card'); 

// Accede a los elementos por medio del atributo 'name' del documento, name se usa en los formularios.
document.getElementsByName('nombre');

// Accede l elemento por medio del identificador
document.getElementById('menu');

// Accede al elemento por medio de la etiqueta 'a'. Accede solo al primer elemento de tipo 'a' del documento.
document.querySelector('a');

// Accede a todos los elementos del documento por medio de la etiqueta 'a' 
document.querySelectorAll('a');

// Accede al elemento por medio de la clase '.card';
document.querySelector('.card'); 

// Accede al elemento por medio del identificador
document.querySelector('#card');

// Accede al elemento por medio de la clase '.card' y busca el elemento en la posición indicada
document.querySelectorAll('.card')[2];

// Accede a todos los elementos 'li' que tengan la clase '.menu'
document.querySelectorAll('.menu li');
```

Escuchar Eventos

```html
<!-- 
	onclick -> permite escuchar el evento solo cuando se presiona sobre el selector
-->
<button id="btnCalcular" onclick="">Calcular</button>

<!-- 
    onchange -> permite escuchar el evento solo cuando se termina de ingresar 
    contenido en el input (elemento/selector) 
-->
<input onchange="console.log('Cambió el input')" id="calculo2" placeholder="Escribe algo">
```

