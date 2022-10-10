import { IProduct, calculaIVA } from './06 - deses func';

const carritoC: IProduct[] = [

    {
        desc: "Samsung Galaxy",
        price: 200,
    },
    {
        desc: "Iphone 13",
        price: 300,
    }
];

const [total, isv] = calculaIVA(carritoC);

console.log("Total: ", total);
console.log("Impuestos: ",(isv))  ;