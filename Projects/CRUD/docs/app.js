

window.onload = function(){

    
    /**Contador para iterar entre los elementos */
    function iterador(){
        var itera = localStorage.length;
        return itera;
    }

       /**Editar elementos almacenados */
       function editarRegistro(){

        let idx = iterador();
        /**Obtener datos almacenados */
        var editProducto = localStorage.getItem("Producto"+idx);
        var editCantidad = localStorage.getItem("Cantidad"+idx);

        /**Mostrar datos almacenados y cambiar label del boton mientras se edita */
        document.getElementById("inputProducto").value = editProducto;
        document.getElementById("inputCantidad").value = editCantidad;
        /**document.getElementById("btnAgregar").innerHTML = "Editar";*/

    };
    
    /**Funcion de capturar datos, almacenar y limpiar campos*/
    var btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click',function(){
        
        /**Captura de productos escritos en los inputs */
        var producto = document.getElementById("inputProducto").value;
        var cantidad = document.getElementById("inputCantidad").value;
        
        let idx = iterador();
        /**Guardando los datos en localstorage */
        localStorage.setItem("Producto"+idx, producto);
        localStorage.setItem("Cantidad"+idx, cantidad);

        /**Limpiando los campos o inputs */
        document.getElementById("inputProducto").value = "";
        document.getElementById("inputCantidad").value = "";

        /**Obtener datos almacenados */
        var retProducto = localStorage.getItem("Producto"+idx);
        var retCantidad = localStorage.getItem("Cantidad"+idx);

        /**Mostrar datos almacenados */
        const row = `
        <tr>
            <td id="retProducto">${retProducto}</td>
            <td id="retCantidad">${retCantidad}</td>
            <td><button id="btnEditar${idx}" onclick="editarRegistro()">Editar</button></td>
            <td><button id="btnBorrar${idx}">Borrar</button></td>
            </tr>`

        let tableElement = document.getElementById("lista");
        tableElement.innerHTML += row;
    });

 

    /**Eliminar elementos almacenados */
    var btnEliminar = document.getElementById('btnBorrar');
    btnEliminar.addEventListener('click',function(){
        /**Obtener datos almacenados */
        var elimProducto = localStorage.getItem("Producto");
        var elimCantidad = localStorage.getItem("Cantidad");

        /**Eliminar los valores */
        elimProducto = localStorage.removeItem("Producto");
        elimCantidad = localStorage.removeItem("Cantidad");

        /**Limpiando los campos */
        document.getElementById("retProducto").set
        document.getElementById("retCantidad").value = "";
    });



};