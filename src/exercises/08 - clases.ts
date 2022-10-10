
class personanormal {

    constructor(
    public nombre: string,
    public direccion: string
    )   {}
}

class hero extends personanormal {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string 
    )   {
        super( nombreReal, "New York" );
    }
}

const ironman = new hero("IronMan", 45, "Tony Stark");
console.log(ironman);