const btn_draw = document.getElementById('btn-draw')
const list = JSON.parse(localStorage.getItem('list'))
const show = document.getElementById('show')
let index = 1

btn_draw.addEventListener('click',()=>{
    show.innerText = `${list.list[index]}`
    index++
})
