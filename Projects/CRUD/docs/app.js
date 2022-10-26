

window.onload = function(){

    /**Funcion de capturar datos, almacenar y limpiar campos*/
    var btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click',function(){
        
        /**Captura de productos escritos en los inputs */
        var producto = document.getElementById("inputProducto").value;
        var cantidad = document.getElementById("inputCantidad").value;
        
        var itera = localStorage.length;
        console.log("iteración "+itera);
        
        /**Guardando los datos en localstorage */
        localStorage.setItem("Producto"+itera, producto);
        localStorage.setItem("Cantidad"+itera, cantidad);

        /**Limpiando los campos o inputs */
        document.getElementById("inputProducto").value = "";
        document.getElementById("inputCantidad").value = "";

        /**Obtener datos almacenados */
        var retProducto = localStorage.getItem("Producto"+itera);
        var retCantidad = localStorage.getItem("Cantidad"+itera);

        /**Mostrar datos almacenados */
        const row = `
        <tr>
            <td id="retProducto">${retProducto}</td>
            <td id="retCantidad">${retCantidad}</td>
            <td><button id="btnEditar">Editar</button></td>
            <td><button id="btnBorrar">Borrar</button></td>
            </tr>`

        let tableElement = document.getElementById("lista");
        tableElement.innerHTML += row;
    });

    /**Editar elementos almacenados */
    var btnEditar = document.getElementById('btnEditar');
    btnEditar.addEventListener('click',function(){

        /**Obtener datos almacenados */
        var editProducto = localStorage.getItem("Producto");
        var editCantidad = localStorage.getItem("Cantidad");

        /**Mostrar datos almacenados y cambiar label del boton mientras se edita */
        document.getElementById("inputProducto").value = editProducto;
        document.getElementById("inputCantidad").value = editCantidad;
        document.getElementById("btnAgregar").innerHTML = "Editar";

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