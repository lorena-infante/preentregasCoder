alert(`¡Hola! 👋 Bienvenido a tu lista de supermercado. Por ser cliente nuevo te regalaremos $5.000 para tu primera compra 💰. Podrás añadir a tu lista cualquiera de los productos que verás a continuación 📃. Al final podrás obtener el total e ir a reclamar los productos a nuestro punto de venta. ¡Comencemos! ✨`);

//productos
const MILK = 'leche';
const BREAD = 'pan';
const MEAT = 'carne';
const FRUITS = 'frutas';
const RICE = 'arroz';
const POTATOES = 'papas';


//precio de cada producto
const MILK_PRICE = 500;
const BREAD_PRICE = 400;
const MEAT_PRICE = 1000;
const FRUITS_PRICE = 700;
const RICE_PRICE = 900;
const POTATOES_PRICE = 1200;

//valor inicial de regalo
const INITIAL_VALUE = 5000;
//continuar
let keepAddingItems;
const YES = 'si';
const NO = 'no';
//output
let total = 0;
let remainder = 5000;

do {
    let options = prompt(`Puedes añadir a tu lista alguna de estas opciones (escríbela sin el emoji ni el precio. Sólo el nombre del producto 😉):\n
        Leche 🥛 por $500\n
        Pan 🍞 por $400\n
        Carne 🍖 por $1000\n
        Frutas 🥝 por $700\n
        Arroz 🍚 por $900\n
        Papas 🥔 por $1200\n`).toLowerCase();
    switch (options) {
        case MILK:
            remainder = (INITIAL_VALUE - total) - MILK_PRICE;
            console.log(`Le van quedando $${remainder} pesos`);
            total = total + MILK_PRICE;
            break;

        case BREAD:
            remainder = (INITIAL_VALUE - total) - BREAD_PRICE;
            console.log(`Le van quedando $${remainder} pesos`);
            total = total + BREAD_PRICE;
            break;

        case MEAT:
            remainder = (INITIAL_VALUE - total) - MEAT_PRICE;
            console.log(`Le van quedando $${remainder} pesos`);
            total = total + MEAT_PRICE;
            break;

        case FRUITS:
            remainder = (INITIAL_VALUE - total) - FRUITS_PRICE;
            console.log(`Le van quedando $${remainder} pesos`);
            total = total + FRUITS_PRICE;
            break;

        case RICE:
            remainder = (INITIAL_VALUE - total) - RICE_PRICE;
            console.log(`Le van quedando $${remainder} pesos`);
            total = total + RICE_PRICE;
            break;

        case POTATOES:
            remainder = (INITIAL_VALUE - total) - POTATOES_PRICE;
            console.log(`Le van quedando $${remainder} pesos`);
            total = total + POTATOES_PRICE;
            console.log(`${POTATOES} añadidas. El total de la factura va en $${total}`);
            break;

        default:
            alert(`Lo sentimos, el producto ${options} que ingresaste no existe en stock.`);
            break;
    }
    console.log(`Producto ${options} añadido. El total de la factura va en $${total}`);
    if (total > 4999) {
        alert('Lo sentimos, tu presupuesto se ha sobrepasado. Adiós');
    } else {
        // continuar
        keepAddingItems = prompt(`Te quedan $${remainder} pesos. ¿Deseas seguir añadiendo items? Escribe 'si' o 'no'`).toLocaleLowerCase();
        if (keepAddingItems == YES) {
            continue;
        } else {
            if (keepAddingItems == NO) {
                alert(`Perfecto. El total de tu factura es $${total}. Te quedan $${remainder} pesos por utilizar. ¡Nos vemos en la tienda!`);
                break;
            } else {
                alert(`Comando Inválido. Debes escribir 'si' o 'no'`);
                continue;
            }
        }
    }
} while (total >= 0 && total <= 4999);

