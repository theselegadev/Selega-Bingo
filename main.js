import generate_bingo from "./module.js";
const btn_play = document.getElementById('buttonplay')
const table = document.getElementById('table')

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

window.addEventListener('DOMContentLoaded',()=>{
    const screenload = localStorage.getItem('screenload')

    if(screenload == null){
        const MyBingo = new Bingo(generate_bingo(1,15),
            generate_bingo(16,30),
            generate_bingo(31,45),
            generate_bingo(45,60),
            generate_bingo(61,75)
        )

        MyBingo.save()
    }else{
        btn_play.style.display = 'none'
        table.style.display = 'block'
    }
})
