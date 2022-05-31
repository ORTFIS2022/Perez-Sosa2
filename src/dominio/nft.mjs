const Limite = 1;

export default class Nft {
    constructor(nombre, categoria, precio, plazo, archivo){
        this.nombre = nombre;
        this.categoria = categoria;
        this.setPrecio(precio);
        this.plazo = plazo;
        this.archivo = archivo;
    }

    setPrecio(precio){
        if (precio <= limite){
            this.precio = precio;
        }else{
            throw new Error(`El precio excede el limite`);
        }
    }
}