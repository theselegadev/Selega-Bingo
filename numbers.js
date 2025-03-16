import { list_numbers } from "./module.js"

const btn_draw = document.getElementById('btn-draw')
const list = JSON.parse(localStorage.getItem('list'))
const show = document.getElementById('show')
const btnclose = document.getElementById('btn-close')
const btn_back = document.getElementById('btn-back')
const card_close = document.getElementById('card-close')
let index = localStorage.getItem('positionnumber')

btn_draw.addEventListener('click',()=>{
    index++
    localStorage.setItem('positionnumber',index)
    if(index != list.list.length -1 || index < list.list.length -1){
        show.innerText = `${list.list[index]}`
        document.getElementById('container').innerHTML += `<p>${list.list[index]}, </p>`
    }else{
        localStorage.setItem('acabou',true)
        if(localStorage.getItem('acabou')){
            card_close.style.top = "40%"
        }
    }
})

window.addEventListener('DOMContentLoaded',()=>{
    show.innerText = `${list.list[index]}`
    list_numbers(list.list,Number(index)+1,document.getElementById('container'))
    if(localStorage.getItem('acabou')){
        card_close.style.top = "40%"
    }
})

btnclose.addEventListener('click',()=>{
    localStorage.clear()
})
btn_back.addEventListener('click',()=>{
    localStorage.clear()
})