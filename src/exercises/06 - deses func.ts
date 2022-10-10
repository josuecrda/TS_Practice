

export interface IProduct {

    desc: string,
    price: number,
}

const telefono: IProduct = {

    desc: "Redmi 10",
    price: 50
}

const tablet: IProduct = {

    desc: " Ipad Mini",
    price: 150
}

export function calculaIVA (productos: IProduct[] ): [number, number] {

    let total=0;
    productos.forEach((producto)=>{
        total += producto.price;

    })

    return [total,total*0.15];

}

const articulos = [telefono, tablet];

const [total, isv] = calculaIVA(articulos);

// console.log("Total: ", total);
// console.log("Impuestos: ",(isv))  ;