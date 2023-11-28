const productos = [
    new Producto('frutal','Almendro',9000,1.5,'./almendro.jpg','Un árbol de Almendro', 'Requiere Sol o SemiSombra',[0,1],10,'verano'),
    new Producto('parra','Moscatel',8000,1,'./moscatel.jpg','Una parra de moscatel', 'Requiere Sol',[0],10,'otoño'),
    new Producto('planta','Hortensia',8000,0.3,'./hortensia.jpg','Una planta de hortensia de 30cms', 'Requiere Sol o SemiSombra',[0,1],10,'verano'),
    new Producto('rosas','Rosa',7000,0.5,'./rosa.jpg','Una planta de rosa botonera de 50 cms', 'Requiere   SemiSombra',[1],10,'primavera'),
    new Producto('cactus','Cactus',5000,0.2,'./cactus.jpg','Un cactus orejas de conejo', 'Requiere Sol o SemiSombra',[0],10,'invierno'),
];

let input = prompt(`Bienvenido. Tenemos los siguientes productos. Escriba el de su preferencia:
${productos.map((prod)=>{ 
    let prod_precio = `\n🌼 Producto: ${prod.nombre} 💰 Precio: ${prod.precio}\n`;
    return prod_precio;
    })}`).toLowerCase();

