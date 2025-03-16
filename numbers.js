import { list_numbers } from "./module.js"

const btn_draw = document.getElementById('btn-draw')
const list = JSON.parse(localStorage.getItem('list'))
const show = document.getElementById('show')
let index = localStorage.getItem('positionnumber')

btn_draw.addEventListener('click',()=>{
    index++
    localStorage.setItem('positionnumber',index)
    show.innerText = `${list.list[index]}`
    document.getElementById('container').innerHTML += `<p>${list.list[index]}, </p>`
})

window.addEventListener('DOMContentLoaded',()=>{
    show.innerText = `${list.list[index]}`
    list_numbers(list.list,Number(index)+1,document.getElementById('container'))
})
