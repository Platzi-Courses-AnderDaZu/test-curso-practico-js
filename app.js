const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputs);
btn.addEventListener('mouseover', hoverIn);
btn.addEventListener('mouseout', hoverOut);

function sumarInputs(event) 
{
    event.preventDefault();
    console.log({event});
    const sumaInputs = input1.value + input2.value;
    result.innerText = 'Resultado: ' + sumaInputs;
}

function hoverOut(event) {
    event.preventDefault();
    let mensaje = 'Estas afuera';
    result.innerText = mensaje;
}

function hoverIn(event) {
    event.preventDefault();
    let mensaje = 'Estas bien ubicado';
    result.innerText = mensaje;
}


// h1.innerHTML = 'Some <br>Cast';
// h1.innerText = 'Some <br> Cast';
// h1.getAttribute('pantalla');
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');
// console.log(h1.getAttribute('class'));
// h1.classList.add('azul');
// console.log(h1.getAttribute('class'));
// h1.classList.remove('azul');
// console.log(h1.getAttribute('class'));



// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

// parrafito.innerHTML = '';
// parrafito.append(img);
// parrafito.appendChild(img);


// console.log(input.value);

// // Accede al elemento por medio de la etiqueta li
// document.getElementsByTagName('li');

// // Accede al elemento por medio de la clase
// document.getElementsByClassName('card'); 

// // Accede a los elementos por medio del atributo 'name' del documento, name se usa en los formularios.
// document.getElementsByName('nombre');

// // Accede l elemento por medio del identificador
// document.getElementById('menu');

// // Accede al elemento por medio de la etiqueta 'a'. Accede solo al primer elemento de tipo 'a' del documento.
// document.querySelector('a');

// // Accede a todos los elementos del documento por medio de la etiqueta 'a' 
// document.querySelectorAll('a');

// // Accede al elemento por medio de la clase '.card';
// document.querySelector('.card'); 

// // Accede al elemento por medio del identificador
// document.querySelector('#card');

// // Accede al elemento por medio de la clase '.card' y busca el elemento en la posición indicada
// document.querySelectorAll('.card')[2];

// // Accede a todos los elementos 'li' que tengan la clase '.menu'
// document.querySelectorAll('.menu li');