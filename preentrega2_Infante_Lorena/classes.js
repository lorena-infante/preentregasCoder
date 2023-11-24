//clase constructora
class Producto {
    constructor(nombre, precio, altura,
        img, descripcion, cuidados, iluminacion, stock, temporada) {
        this.nombre = nombre;
        this.precio = precio;
        this.altura = altura;
        this.img = img;
        this.descripcion = descripcion;
        this.cuidados = cuidados;
        this.iluminacion = iluminacion;
        this.stock = stock;
        this.temporada = temporada;
    }
    verDetallesProducto() {
        alert(`El producto ${this.nombre} tiene las siguientes características: 
        - Descripción: ${this.descripcion}.
        - Cuidados: ${this.cuidados}.
        - Iluminación: ${this.iluminacion}.
        - Precio: ${this.precio}.`);
    }
    modificarStock(cantidad){
        let stockInicial = this.stock;
        let stockActual = stockInicial-cantidad;
        this.stock = stockActual;
        alert(`El nuevo stock para ${this.nombre} es de ${this.stock} productos`);
        return this.stock;
    }
    añadirAlCarrito(){
        
    }
}
