
/* Arrays, objects, interfaces */

let habilities: string[] = ["Salto", "Cura", "Golpe"];

habilities.push("Patada")


interface IPersonaje { 
    nombre: string,
    tipo: string,
    edad: number,
    ataques: string[]
    volador: boolean
    legendario?: boolean
}

const personaje: IPersonaje = {

    nombre: "Josue Cerda",
    tipo: "luchador",
    edad: 21,
    ataques: ["Salto", "Cura", "Golpe"],
    volador: false

}


personaje.legendario= true;

console.table(personaje)