const btn_instruction = document.getElementById('btn-instruction')
const card_instruction = document.getElementById('card-instruction')
const btn_play = document.getElementById('buttonplay')
const table = document.getElementById('table')

function close_card(){
    card_instruction.style.top = "-50%"
}

btn_instruction.addEventListener('click',()=>{
    card_instruction.style.top = "40%"
})
btn_play.addEventListener('click',()=>{
    localStorage.setItem('screenload',true)
    btn_play.style.display = 'none'
    table.style.display = 'block'   
})

