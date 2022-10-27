

window.onload = function(){

    //Contador para iterar entre los elementos
    function iterador(){
        var itera = localStorage.length;
        return itera;
    }

    function limpiarCampos(){
        //Limpiando los campos o inputs
        document.getElementById("inputProducto").value = "";
        document.getElementById("inputCantidad").value = "";
    }

    function agregarLista(idx){
         //Obtener datos almacenados
         var retProducto = localStorage.getItem("Producto-"+idx);
         var retCantidad = localStorage.getItem("Cantidad-"+idx);
 
         //Mostrar datos almacenados
         const row = `
         <tr>
             <td id="retProducto">${retProducto}</td>
             <td id="retCantidad">${retCantidad}</td>
             <td><button id="${idx}">Editar</button></td>
             <td><button id="${idx}">Borrar</button></td>
             </tr>`
 
         let tableElement = document.getElementById("lista");
         tableElement.innerHTML += row;
    }

    function pintarLista (){
        let rows = Object.keys(localStorage);
            let row = "";
            let indices = new Set(rows.map(item => item.split('-')[1]));
            indices.forEach(id => {
                row += `<tr>
                <td id="retProducto">${localStorage.getItem("Producto-"+id)}</td>
                <td id="retCantidad">${localStorage.getItem("Cantidad-"+id)}</td>
                <td><button id="${id}">Editar</button></td>
                <td><button id="${id}">Borrar</button></td>
                </tr>`;
            });
            let tableElement = document.getElementById("lista");
            tableElement.innerHTML = row;
    };
    
    //Funcion de capturar datos, almacenar y limpiar campos
    var btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click',function(){
        
        //Captura de productos escritos en los inputs
        var producto = document.getElementById("inputProducto").value;
        var cantidad = document.getElementById("inputCantidad").value;
        
        let idx = iterador();
        //Guardando los datos en localstorage
        localStorage.setItem("Producto-"+idx, producto);
        localStorage.setItem("Cantidad-"+idx, cantidad);

        //Limpiar campos
        limpiarCampos();

        //llamar al metodo obtener datos almacenados
        agregarLista(idx);
    });

    window.onclick = evento => {
        let id = evento.target.id;
        if(evento.target.tagName === 'BUTTON' && evento.target.innerText === 'Editar'){
            
            //Obtener datos almacenados
            var editProducto = localStorage.getItem("Producto-"+id);
            var editCantidad = localStorage.getItem("Cantidad-"+id);

            //Mostrar datos almacenados y cambiar el botón a "Guardar"
            document.getElementById("inputProducto").value = editProducto;
            document.getElementById("inputCantidad").value = editCantidad;
            document.getElementById(id).innerText = "Guardar";
            document.getElementById('btnAgregar').disabled = true;

        }else if(evento.target.tagName === 'BUTTON' && evento.target.innerText === 'Guardar'){
            localStorage.setItem("Producto-"+id,document.getElementById("inputProducto").value);
            localStorage.setItem("Cantidad-"+id,document.getElementById("inputCantidad").value);
            document.getElementById(id).innerText = "Editar";
            document.getElementById('btnAgregar').disabled = false;
            limpiarCampos();
            
            //Actualizar la lista en UI
            pintarLista();

        }else if(evento.target.tagName === 'BUTTON' && evento.target.innerText === 'Borrar'){
            localStorage.removeItem("Producto-"+id);
            localStorage.removeItem("Cantidad-"+id);
            //Actualizar la lista en UI
            pintarLista();
        }
    };

    pintarLista();

};

