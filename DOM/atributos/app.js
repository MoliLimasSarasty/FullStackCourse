window.onload = function(){

    const btnFondo = document.getElementById('btnFondo');
    btnFondo.addEventListener('click', event => {
        //logica
        let divContenido = document.getElementById('divContenido');
            divContenido.style.backgroundColor = 'red';
    })

    const btnTamaño = document.getElementById('btnTamaño');
    btnTamaño.addEventListener('click', event => {
        //logica
        let divContenido = document.getElementById('divContenido');
            divContenido.style.width = '100px';
            divContenido.style.height = '100px';
    })

    const btnBorder = document.getElementById('btnBorder');
    btnBorder.addEventListener('click', event => {
        //logica
        let divContenido = document.getElementById('divContenido');
            divContenido.style.border = '4px solid black';
    })
}