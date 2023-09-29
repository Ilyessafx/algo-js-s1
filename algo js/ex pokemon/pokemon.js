class Pokemon {
    constructor(name, atk, def, hp, luck) {
        this.name = name
        this.atk = atk 
        this.def = def 
        this.hp = hp
        this.luck = luck
    }

    attackPokemon(pokemon) {
        let degats = this.atk - pokemon.def
        pokemon.hp =- degats
        return degats
    }

}

let Xerneas = new Pokemon("Xerneas", 50, 45, 500, 0.5)
let Yveltal = new Pokemon("Yveltal", 70, 30, 550, 0.5)

while(Xerneas.hp>0 && Yveltal.hp>0) {
    Xerneas.attackPokemon(Yveltal)
    DegatsSubisYveltal = Xerneas.attackPokemon(Yveltal)
    console.log(Yveltal.name + " a " + Yveltal.hp + " HP et a souffert de " + DegatsSubisYveltal + " points de dégats.")
    if (Yveltal.hp <= 0) {
        console.log("Yveltal n'est plus en état de se battre!")
        break
    }

    Yveltal.attackPokemon(Xerneas)
    DegatsSubisXerneas = Yveltal.attackPokemon(Xerneas)
    console.log(Xerneas.name + " a " + Xerneas.hp + " HP et a souffert de " + DegatsSubisXerneas + " points de dégats.")
    if (Xerneas.hp <= 0) {
        console.log("Xerneas n'est plus en état de se battre!")
        break
    }

    
}

