
function sumar(a: number,b:number): number{

    return a+b; 
}

const sumarFlecha = (a: number, b:number): number => {

    return a+b;
}

function multip (num: number, base:number, num2?:number ): number{
    return num*base;
}


//Interfaces - funciones ----------------------------------------------- Definen la estructrura de los objetos
interface IPersonajehp {
    nombre: string,
    pv: number
    mostrarHp: () => void;
}
//Función para curar personaje - le pasamos un personaje que contenga la estructua de IPersonajeHP y un número
function heal(personaje: IPersonajehp, Nhp: number): void {


    personaje.pv += Nhp;
    console.log(personaje);

}
//Creación de un objeto personaje con estructura IPersonajehp
const nuevoPersonaje: IPersonajehp = {
    nombre: "Player 2",
    pv: 70,
    mostrarHp(){
        console.log("Vida del personake:" , this.pv);
    }
}

heal(nuevoPersonaje, 10);
nuevoPersonaje.mostrarHp();


// const result = multip(50 , 40);   
// console.log(result);
