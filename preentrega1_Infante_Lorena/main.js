alert(`¡Hola! 👋 Bienvenido a tu lista de supermercado. Por ser cliente nuevo te regalaremos $5.000 para tu primera compra 💰. Podrás añadir a tu lista cualquiera de los productos que verás a continuación 📃. Al final te entregaremos tu listado final con el que podrás ir a reclamar los productos a nuestro punto de venta. ¡Comencemos! ✨`);

let options = prompt(`Puedes añadir a tu lista alguna de estas opciones (escríbela sin el emoji ni el precio. Sólo el nombre del producto 😉):\n
    Leche 🥛 por $500\n
    Pan 🍞 por $400\n
    Carne 🍖 por $1000\n
    Frutas 🥝 por $700\n
    Arroz 🍚 por $900\n
    Papas 🥔 por $1200\n`).toLowerCase();

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
let finalList;
let total = 0;
let remainder;

//loop
do {
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
            console.log(`El total de la factura va en $${total}`);
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
            console.log(`El total de la factura va en $${total}`);
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
            console.log(`El total de la factura va en $${total}`);
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
            console.log(`El total de la factura va en $${total}`);
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
            console.log(`El total de la factura va en $${total}`);
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
            console.log(`El total de la factura va en $${total}`);
            break;

        default:
            alert(`Lo sentimos, el producto ${options} que ingresaste no existe en stock.`);
            //total = 0;
            break;

    }
    // continuar
    keepAddingItems = prompt(`¿Deseas seguir añadiendo items? Escribe 'si' o 'no'`);

    if (keepAddingItems == YES) {
        options = prompt(`Puedes añadir a tu lista alguna de estas opciones (escríbela sin el emoji ni el precio. Sólo el nombre del producto 😉):\n
        Leche 🥛 por $500\n
        Pan 🍞 por $400\n
        Carne 🍖 por $1000\n
        Frutas 🥝 por $700\n
        Arroz 🍚 por $900\n
        Papas 🥔 por $1200\n
        Whiskey 🥃 por $3000\n
        Cerveza 🍺 por $2000\n`).toLowerCase();
    } else {
        alert(`Perfecto. El total de tu factura es $${total}. Te quedan $${remainder} pesos por utilizar. ¡Nos vemos en la tienda!`);
        break;
    }
    console.log(`El total hasta aquí es: ${total}`)

} while (total >= 1 && total <= 5000);