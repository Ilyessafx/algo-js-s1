let Playlist = ["Anissa", "The MC", "Bokurano", "Kick back", "Mr Loverman"]

class Aigri {
    constructor(name, sm) {
        this.name = name 
        this.sm = sm
    }

    Trajet(Playlist) {
        var feu = 0
        var changementTaxi = 0
        while (this.sm > 0 && feu < 30) {
            feu ++
            var Musique = Playlist[Math.floor(Math.random()*Playlist.length)]
            if (Musique = Playlist["Anissa"]) {
                console.log("AH NON PAS WEJDENE, je sors!!")
                changementTaxi += 1
                this.sm -= 1
            } else {
                console.log("J'aime la bonne musique.")
                Jhon.feu =+ 1
                break
            }
        
        if(Jhon.sm == 0) {
            console.log("repose en paix Jhon, qui est mort d'explosion à cause de Wejdene.")
        }
            
            
        }
    }
}

let Jhon = new Aigri("Jhon", 10)

console.log()

