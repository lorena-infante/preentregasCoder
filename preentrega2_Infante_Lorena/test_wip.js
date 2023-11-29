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

//variables globales

let continuar;
let carrito = [];
let verResumenCarrito;
let salir = 'si';
do {
    const escogerProducto = prompt(`¡Hola! Tenemos 3 tipos de parras para la venta:
    \n${mostrarProductos}\n Por favor escoge una opción (Escribe sólo el nombre 😉)`).toLowerCase();
    let cantidad = Number(prompt(`¿Cuántas unidades de ${escogerProducto} deseas añadir?`));
    //funct actualiz stock
    //funct añadir Carrito
    //añadir a carrito
    /* function agregarACarrito(producto, cantidad) {
        let productosEnCarrito = productos
    } */
    alert(`Perfecto. Se han añadido ${cantidad} unidades de ${escogerProducto} al carrito 🛒`);

    continuar = prompt(`¿Deseas seguir añadiendo productos al carrito? si/no`).toLowerCase();
    if (continuar === 'si') {
        salir = 'no';
    } else {
        //funct ver resumen carrito
        verResumenCarrito = alert(`El resumen del carrito es: tatata`);
        salir = prompt(`¿Deseas salir? si/no`).toLowerCase();
        if (salir == 'si') {
            alert(`¡Ten un buen día. Adiós! 👋🏻`);
        }
    }

} while (salir === 'no')

