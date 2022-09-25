interface IReproductor {

    volume: number, 
    second: number,
    song: string,
    details: IDetails,

}

interface IDetails  {

    author: string,
    anio: number
}

const reproductor: IReproductor = {

    volume: 75,
    second: 40,
    song: "Creep",
    details: {
        author: "RadioHead",
        anio: 2003
    }
}

const { volume, second, song, details} = reproductor;
const { author } = details;


// console.log("El volumen es: ", volume);
// console.log("El segundo actual es: ", second);
// console.log("La canción es: ", song);
// console.log("El autor es: ", details.author);


const OnePiece : string[] = ["Lufy", "Zoro", "Nami", "Robin"];
const [ p1, p2, p3, p4] = OnePiece;

console.log("Personaje 1", p1);
console.log("Personaje 2", p2);
console.log("Personaje 3", p3);
console.log("Personaje 4", p4);

