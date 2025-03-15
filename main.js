import generate_bingo from "./module.js";
let load_screen = false

class Bingo{
    constructor(b,i,n,g,o){
        this.b = b
        this.i = i
        this.n = n
        this.g = g
        this.o = o
    }
    save(){
        localStorage.setItem('Bingo',JSON.stringify(this))
    }
}

