var content = '' // <--creamos una variable global donde almaceno la data.

document.getElementById('inputfile') // <--recuperamos el id del input  donde cargo la data

    .addEventListener('change', function () {// <--ejecutamos el evento change con una funcion de flecha
        const file = new FileReader(); // <--leo  el archivo 

        file.onload = function () { // <--ejecutamos la funcion una vez cargado el archivo
            content = file.result// <--almacenamos el resultado en content
            document.getElementById('output') // <--mostramos la data en el DOM asignando el valor del contenido en el campo del id Output
                .textContent = content;
        }

        file.readAsText(this.files[0]); // <--leemos el contenido  del  tipo archivo
    })