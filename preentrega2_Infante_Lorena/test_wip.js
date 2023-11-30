//categorización
const categorias = {
    parras: {
        moscatel: {
            nombre_prod: "moscatel",
            precio_prod: 8000,
            altura: '1mt',
            img: './moscatel.jpg',
            descripcion: 'Uva de Chile',
            cuidados: 'Regarla',
            iluminacion: [1],
            stock: 10,
            temporada: "Otoño/Primavera"
        },
        sultanina: {
            nombre_prod: "sultanina",
            precio_prod: 7000,
            altura: '1mt',
            img: './sultanina.jpg',
            descripcion: 'Uva de Chile',
            cuidados: 'Regarla',
            iluminacion: [1],
            stock: 10,
            temporada: "Otoño/Primavera"
        },
        torontel: {
            nombre_prod: "torontel",
            precio_prod: 9000,
            altura: '1mt',
            img: './torontel.jpg',
            descripcion: 'Uva de Chile',
            cuidados: 'Regarla',
            iluminacion: [1],
            stock: 10,
            temporada: "Otoño/Primavera"
        }
    }
};

//constantes globales

const MOSCATEL = 'moscatel';
const SULTANINA = 'sultanina';
const TORONTEL = 'torontel';

let carrito = [];
let resCarrito = '';
//instanciación de la clase Producto dentro de la función crearProducto

function crearProducto(producto) {
    const newProd = new Producto(producto.nombre_prod, producto.precio_prod, producto.altura, producto.img, producto.descripcion, producto.cuidados, producto.iluminacion, producto.stock, producto.temporada);
    return newProd;
}

const productos = [
    crearProducto(categorias.parras.moscatel),
    crearProducto(categorias.parras.sultanina),
    crearProducto(categorias.parras.torontel)
];


// constante para el input del prompt
const mostrarProductos = productos.map((producto) => {
    return `🍇${producto.nombre} por 💰${producto.precio}\n`
});

//añadir a carrito

function agregarACarrito(producto, cantidad) {
    let productoNuevo = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    };
    carrito.push(productoNuevo);  
    return carrito;
}

function resumenCarrito (carrito){

carrito.map((producto)=>{
    resCarrito = resCarrito + `\n Producto: ${producto.nombre}\n Precio: ${producto.precio}\n Cantidad: ${producto.cantidad}`
});

alert(`Este es el resumen de los productos 🛒: \n ${resCarrito}`);
     
}
//variables globales

let continuar;
let cantidad_prod;
let moscatel_obj;
let sultanina_obj;
let torontel_obj;
let salir = 'si';
do {
    const escogerProducto = prompt(`¡Hola! Tenemos 3 tipos de parras para la venta:
    \n${mostrarProductos}\n Por favor escoge una opción (Escribe sólo el nombre 😉)`).toLowerCase();

    //asignar objeto al prod seleccionado
    switch (escogerProducto) {
        case MOSCATEL:
            moscatel_obj = productos[0];
            cantidad_prod = Number(prompt(`¿Cuántas unidades de ${escogerProducto} deseas añadir?`));
            //agregar al carro
            agregarACarrito(moscatel_obj, cantidad_prod);
            break;
        case SULTANINA:
            sultanina_obj = productos[1];
            cantidad_prod = Number(prompt(`¿Cuántas unidades de ${escogerProducto} deseas añadir?`));
            agregarACarrito(sultanina_obj, cantidad_prod);
            break;
        case TORONTEL:
            torontel_obj = productos[2];
            cantidad_prod = Number(prompt(`¿Cuántas unidades de ${escogerProducto} deseas añadir?`));
            agregarACarrito(torontel_obj, cantidad_prod);
            break;
        default:
            alert(`No existe producto ${escogerProducto}`);

    }

    continuar = prompt(`¿Deseas seguir añadiendo productos al carrito? si/no`).toLowerCase();
    if (continuar === 'si') {
        salir = 'no';
    } else {
        //funct ver resumen carrito
        resumenCarrito(carrito);
        salir = prompt(`¿Deseas salir? si/no`).toLowerCase();
        if (salir == 'si') {
            alert(`¡Ten un buen día. Adiós! 👋🏻`);
        }
    }

} while (salir === 'no')

