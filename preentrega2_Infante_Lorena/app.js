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
        },
        frutales: {
            almendro: {
                nombre_prod: "almendro",
                precio_prod: 9000,
                altura: '1,5mts',
                img: './almendro.jpg',
                descripcion: 'Almendro de Chile',
                cuidados: 'Regarla',
                iluminacion: [1,3],
                stock: 10,
                temporada: "Otoño/Primavera"
            },
            arandano: {
                nombre_prod: "arandano",
                precio_prod: 8000,
                altura: '60cms',
                img: './arandano.jpg',
                descripcion: 'Arándano de Chile',
                cuidados: 'Regarla',
                iluminacion: [3],
                stock: 10,
                temporada: "Otoño/Primavera"
            },
            caqui: {
                nombre_prod: "caqui",
                precio_prod: 9000,
                altura: '1mt',
                img: './caqui.jpg',
                descripcion: 'Caqui de Chile',
                cuidados: 'Regarla',
                iluminacion: [3],
                stock: 10,
                temporada: "Otoño/Primavera"
            }
        }
    }
];

// declaración de constantes

const uvaMoscatel = categorias[0].parras.moscatel;
const uvaSultanina = categorias[0].parras.sultanina;
const uvaTorontel = categorias[0].parras.torontel;
const frutalAlmendro = categorias[0].frutales.almendro;
const frutalArandano = categorias[0].frutales.arandano;
const frutalCaqui = categorias[0].frutales.caqui;


//instanciación de la clase dentro de una función

function crearProducto(producto){
    const newProd = new Producto (producto.nombre_prod,producto.precio_prod, producto.altura, producto.img, producto.descripcion, producto.cuidados, producto.iluminacion, producto.stock, producto.temporada);    
    return newProd;
}

const moscatel_prod = crearProducto(uvaMoscatel);
const sultanina_prod = crearProducto(uvaSultanina);
const torontel_prod = crearProducto(uvaTorontel);
const almendro_prod = crearProducto(frutalAlmendro);
const arandano_prod = crearProducto(frutalArandano);
const caqui_prod = crearProducto(frutalCaqui);


//llamando el método verDetallesProducto
//let verProductoMoscatel = moscatel_prod.verDetallesProducto();



