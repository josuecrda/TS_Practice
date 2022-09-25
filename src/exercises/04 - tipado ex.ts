interface Isuperhero {
    nombre:string,
    edad: number,
    direccion: Idireccion,
    mostrardire: () => string ;
}

interface Idireccion {
    pais: string,
    estado: string
}

const superhero: Isuperhero = {
    nombre: "spiderman",
    edad: 25,
    direccion: {
        
        pais: "USA",
        estado: "NY"
    },

    mostrardire(){
        return this.nombre + ", " + this.direccion.pais +", " + this.direccion.estado;
    }
}

const direccion = superhero.mostrardire();
console.log( direccion);