import generate_bingo, { draw_number, markup_number, update_table } from "./module.js";
import { constructor_table } from "./module.js";

const btn_play = document.getElementById('buttonplay')
const table = document.getElementById('table')
const list_line = document.querySelectorAll('.line')
let list_num

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

        localStorage.setItem('list',JSON.stringify(draw_number()))
        localStorage.setItem("positionnumber",0)

    }else{
        btn_play.style.display = 'none'
        table.style.display = 'block'
    }

    const bingo = JSON.parse(localStorage.getItem('Bingo'))

    constructor_table(list_line,bingo.b)
    constructor_table(list_line,bingo.i)
    constructor_table(list_line,bingo.n)
    constructor_table(list_line,bingo.g)
    constructor_table(list_line,bingo.o)

    list_num = document.querySelectorAll('#num')
    markup_number(list_num)
    update_table(list_num,JSON.parse(localStorage.getItem('listnumbers')))
})






