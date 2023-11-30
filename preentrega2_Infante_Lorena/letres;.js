let res='';
let pepe = [{nombre: 'pepo', precio:50, cantidad:10},
{nombre: 'pipi', precio:40, cantidad:1},
{nombre: 'p0po', precio:500, cantidad:100}];

pepe.map((name)=>{
    res = res + `Producto: ${name.nombre}\n Precio: ${name.precio}\n Cantidad:${name.cantidad}`;
});

console.log(`Este es el resuemn de los productos: \n ${res}`);