//cuando la ventana esta cargando 
window.onload = function(){
    //código JS
    alert('Hola Ucampers, ¿cómo están?');
    alert('Voy a crear algunos elementos HTML con JS');

    let etiquetaDiv = document.createElement('div');
    //<div><div/>
    let textoDiv = document.createTextNode('Hola Ucampers');
    //Hola ucampers

    //Evento de escucha
    etiquetaDiv.addEventListener('click', event => {
        alert('Le has dado click')
    });

    //Se asigna el atriburto class
    etiquetaDiv.className = 'claseDiv';
    //<div class='claseDiv'></div>
    //Se añade en la etiqueta el nodo text
    etiquetaDiv.appendChild(textoDiv);
    //<div class='claseDiv'>Hola Ucampers</div>

    //Esto lo añade al body
    document.body.appendChild(etiquetaDiv);

    ///////////////Resultado/////////////////////////

    //<body>

    // <div class='claseDiv'>Hola Ucampers</div>

    //</body>

    //boton que crea la etiqueta H1
    //let etiquetaH1 = document.createElement('div');
    //let textoH1 = document.createTextNode('Titulo H1');
    //etiquetaH1.addEventListener('click', event => {
        
    //})

    const btnh1 = document.getElementById('btnh1');
    btnh1.addEventListener('click', event => {
        let h1 = document.createElement('h1');
        let textoh1 = document.createTextNode('Bienvenidos');
            h1.appendChild(textoh1);
        document.body.appendChild(h1);
    })

    const btnp = document.getElementById('btnp');
    btnp.addEventListener('click', event => {
        let p = document.createElement('p');
        let textop = document.createTextNode('Contenido diverso');
            p.appendChild(textop);
        document.body.appendChild(p);
    })

    const btnAlert = document.getElementById('alert');
    btnAlert.addEventListener('click', event => {
        alert('Alerta bienvenidos')
    })
}

function alerta(){
    alert('Opcion 2 de Alerta bienvenidos');
}