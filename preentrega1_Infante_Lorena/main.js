/*
* Preentrega a realizar: *
- Lista de supermercado con restricción de bebidas alcohólicas para menores de edad.
* Requerimientos:
- Realizar una lista de productos a comprar en un supermercado que reciba por medio de inputs los valores. 
- Los productos de la lista van a ser predeterminados. Se dará una lista inicial de opciones.
- No se deben repetir los productos
- La lista podrá tener máximo 10 elementos y mínimo 2
- Se debe restringir el ingreso de bebidas alcohólicas a la lista para personas menores de 18 años
- Por cada elemento ingresado se debe preguntar si desea agregar uno más o no.
- Mostrar en un alert la lista completa.

* Temas incluídos en el presente desarrollo:
- Variables
- Loops
- Estructuras de control
*/

/*variables*/
let name = prompt(`¡Hola! Qué bueno verte. Escribe tu nombre a continuación:`);
let age = Number(prompt(`Escribe tu edad en números`));
let options = prompt(`Puedes añadir a tu lista alguna de estas opciones:\n
    Arroz\n
    Avena\n
    Fruta\n
    Galletas\n
    Whiskey \n
    Ron \n
    Aguardiente \n
    Carne \n
    Papas \n
    Pan`);
let item1;
let item2;
let item3;
let item4;
let item5;
let item6;
let item7;
let item8;
let item9;
let item10;
let keepAddingItems = prompt(`¿Deseas seguir añadiendo items? Escribe 'sí' o 'no'`);
let finalList;
let numberOfElements = 0;

