//categorización
const categorias = [
    {
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
                stock: 5,
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
                stock: 4,
                temporada: "Otoño/Primavera"
            }
        }
    }
];

//constantes globales

const MOSCATEL = 'moscatel';
const SULTANINA = 'sultanina';
const TORONTEL = 'torontel';
const AGREGAR_CARRITO_SI = 'si';
const AGREGAR_CARRITO_NO = 'no';
const CONTINUAR_SI = 'si';
const CONTINUAR_NO = 'no';

//instanciación de la clase Producto dentro de la función crearProducto

function crearProducto(producto) {
    const newProd = new Producto(producto.nombre_prod, producto.precio_prod, producto.altura, producto.img, producto.descripcion, producto.cuidados, producto.iluminacion, producto.stock, producto.temporada);
    return newProd;
}

// declaración de constantes (para hacer más legible el nombre del elemento a la hora de invocarlo dentro de la función como parámetro)
const uvaMoscatel = categorias[0].parras.moscatel;

const uvaSultanina = categorias[0].parras.sultanina;
const uvaTorontel = categorias[0].parras.torontel;

// creación de nuevos productos de la clase Producto
const moscatel_prod = crearProducto(uvaMoscatel);
const sultanina_prod = crearProducto(uvaSultanina);
const torontel_prod = crearProducto(uvaTorontel);

//variables globales

/* let continuarAgregando = prompt(`¿Deseas seguir añadiendo items? Escribe 'si' o 'no'`); */
let stockActualMoscatel = moscatel_prod.stock;
let stockFinalMoscatel;
let stockActualSultanina = sultanina_prod.stock;
let stockFinalSultanina;
let stockActualTorontel = torontel_prod.stock;
let stockFinalTorontel;
let totalFactura = {};
let totalCarrito = {};
let cantidadProductos;
let continuar;

// Interacción con el usuario
do {
    const escogerProducto = prompt(`¡Hola! Tenemos 3 tipos de parras para la venta:\n
    1. Moscatel 🍷 por $8000\n
    2. Sultanina 🍇 por $7000\n
    3. Torontel 🍃 por $9000\n
    Por favor escoge una opción (Escribe sólo el nombre 😉)`).toLowerCase();

    switch (escogerProducto) {
        case MOSCATEL:
            //invocando el método de la clase Producto
            moscatel_prod.verDetallesProducto();
            let añadir = prompt(`¿Deseas añadir este producto al carrito?Responde 'si' o 'no'`).toLowerCase();
            if (añadir === AGREGAR_CARRITO_SI) {
                cantidadProductos = Number(prompt(`Ingresa la cantidad de productos que quieras añadir. Actualmente en stock: ${moscatel_prod.stock}`));
                
                if(cantidadProductos <= moscatel_prod.stock){
                    moscatel_prod.anadirAlCarrito(cantidadProductos);
                    moscatel_prod.modificarStock(cantidadProductos);
                    
                }else{
                    alert(`Lo sentimos. Sólo existen ${moscatel_prod.stock} productos en stock`);
                }

            } else if (añadir === AGREGAR_CARRITO_NO) {
                continuar = prompt(`¿Deseas continuar en el sistema? Responde 'si' o 'no'`).toLowerCase();
                if (continuar === CONTINUAR_SI) {
                    break;
                } else {
                    if (continuar === CONTINUAR_NO) {
                        alert(`OK. Nos vemos pronto. Adiós 👋`); continue;
                    } else {
                        alert(`OK. Nos vemos pronto. Adiós desde el else else 👋`);
                        break;
                    }
                }
            }

            break;

    }

} while (continuar === CONTINUAR_SI || stockActualMoscatel > 0 || stockActualSultanina > 0 || stockActualTorontel > 0);


alert(`Lo sentimos, el stock en todas nuestras parras se ha agotado.`);


