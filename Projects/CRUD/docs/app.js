

window.onload = function(){

    /**Funcion de capturar datos, almacenar y limpiar campos*/
    var btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click',function(){
        
        /**Captura de productos escritos en los inputs */
        var producto = document.getElementById("inputProducto").value;
        var cantidad = document.getElementById("inputCantidad").value;

        /**Guardando los datos en localstorage */
        localStorage.setItem("Producto", producto);
        localStorage.setItem("Cantidad", cantidad);

        /**Limpiando los campos o inputs */
        document.getElementById("inputProducto").value = "";
        document.getElementById("inputCantidad").value = "";

        /**Obtener datos almacenados */
        var retProducto = localStorage.getItem("Producto");
        var retCantidad = localStorage.getItem("Cantidad");

        /**Mostrar datos almacenados */
        document.getElementById("retProducto").innerHTML = retProducto;
        document.getElementById("retCantidad").innerHTML = retCantidad;
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
        document.getElementById("retProducto").value = "";
        document.getElementById("retCantidad").value = "";
    });
};