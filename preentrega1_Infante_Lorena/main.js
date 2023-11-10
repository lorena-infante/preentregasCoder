alert(`¡Hola! 👋 Bienvenido a tu lista de supermercado. Por ser cliente nuevo te regalaremos $5.000 para tu primera compra 💰. Podrás añadir a tu lista cualquiera de los productos que verás a continuación 📃. Al final podrás obtener el total e ir a reclamar los productos a nuestro punto de venta. ¡Comencemos! ✨`);

/* let options = prompt(`Puedes añadir a tu lista alguna de estas opciones (escríbela sin el emoji ni el precio. Sólo el nombre del producto 😉):\n
    Leche 🥛 por $500\n
    Pan 🍞 por $400\n
    Carne 🍖 por $1000\n
    Frutas 🥝 por $700\n
    Arroz 🍚 por $900\n
    Papas 🥔 por $1200\n`).toLowerCase(); */

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
let remainder;

//loop
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
            if (total === 0) {
                remainder = INITIAL_VALUE - MILK_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            } else {
                remainder = (INITIAL_VALUE - total) - MILK_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            }
            total = total + MILK_PRICE;
            console.log(`${MILK} añadida. El total de la factura va en $${total}`);
            break;
        case BREAD:
            if (total === 0) {
                remainder = INITIAL_VALUE - BREAD_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            } else {
                remainder = (INITIAL_VALUE - total) - BREAD_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            }
            total = total + BREAD_PRICE;
            console.log(`${BREAD} añadido. El total de la factura va en $${total}`);
            break;

        case MEAT:
            if (total === 0) {
                remainder = INITIAL_VALUE - MEAT_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            } else {
                remainder = (INITIAL_VALUE - total) - MEAT_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            }
            total = total + MEAT_PRICE;
            console.log(`${MEAT} añadida. El total de la factura va en $${total}`);
            break;

        case FRUITS:
            if (total === 0) {
                remainder = INITIAL_VALUE - FRUITS_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            } else {
                remainder = (INITIAL_VALUE - total) - FRUITS_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            }
            total = total + FRUITS_PRICE;
            console.log(`${FRUITS} añadidas. El total de la factura va en $${total}`);
            break;

        case RICE:
            if (total === 0) {
                remainder = INITIAL_VALUE - RICE_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            } else {
                remainder = (INITIAL_VALUE - total) - RICE_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            }
            total = total + RICE_PRICE;
            console.log(`${RICE} añadido. El total de la factura va en $${total}`);
            break;

        case POTATOES:
            if (total === 0) {
                remainder = INITIAL_VALUE - POTATOES_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            } else {
                remainder = (INITIAL_VALUE - total) - POTATOES_PRICE;
                console.log(`Le van quedando $${remainder} pesos`);
            }
            total = total + POTATOES_PRICE;
            console.log(`${POTATOES} añadidas. El total de la factura va en $${total}`);
            break;

        default:
            alert(`Lo sentimos, el producto ${options} que ingresaste no existe en stock.`);
            break;

    }
    // continuar
    keepAddingItems = prompt(`¿Deseas seguir añadiendo items? Escribe 'si' o 'no'`);
    if (keepAddingItems == YES) {
        continue;
    } else {
        if (keepAddingItems == NO && remainder != undefined) {
            alert(`Perfecto. El total de tu factura es $${total}. Te quedan $${remainder} pesos por utilizar. ¡Nos vemos en la tienda!`);
            break;
        } else if (remainder == undefined) {
            alert(`Perfecto. El total de tu factura es $${total}. Te quedan $${INITIAL_VALUE} pesos por utilizar. ¡Nos vemos en la tienda!`);
            break;
        } else {
            alert(`Comando Inválido. Debes escribir 'si' o 'no'`);
           continue;
        }
    }
    
} while (total >= 0 && total <= 5000);

if (total > 4900) {
    alert('Lo sentimos, tu presupuesto se ha sobrepasado. Adiós');
}