let res='';
subtotalValues=[];
let total;

let pepe = [{nombre: 'pepo', precio:50, cantidad:10},
{nombre: 'pipi', precio:40, cantidad:1},
{nombre: 'p0po', precio:50, cantidad:10}];

pepe.map((name)=>{
    subtotal = name.precio * name.cantidad;
    subtotalValues.push(subtotal);
    total = subtotalValues.reduce((total,subtotal)=>{
        return total + subtotal;
    },0);
    res = res + `Producto: ${name.nombre}\n Precio: ${name.precio}\n Cantidad:${name.cantidad}. \n Subtotal de ${name.nombre}: ${subtotal}`;
});

console.log(`Este es el resumen de los productos: \n ${res}`);
console.log(`Total: ${total}`);
