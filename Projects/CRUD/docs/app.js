
/**Funcion de capturar datos, almacenar y limpiar campos*/
window.onload = function(){
    var btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click',function(){
        
        /**Captura de productos escrito en los inputs */
        var producto = document.getElementById("inputProducto").value;
        console.log('producto',producto);
        var cantidad = document.getElementById("inputCantidad").value;
        console.log('cantidad',cantidad);

        /**Guardando los datos en localstorage */
        localStorage.setItem("Producto", producto);
        localStorage.setItem("Cantidad", cantidad);

        /**Limpiando los campos o inputs */
        document.getElementById("inputProducto").value = "";
        document.getElementById("inputCantidad").value = "";
    });
};