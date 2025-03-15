const btn_instruction = document.getElementById('btn-instruction')
const card_instruction = document.getElementById('card-instruction')


function close_card(){
    card_instruction.style.top = "-50%"
}

btn_instruction.addEventListener('click',()=>{
    card_instruction.style.top = "40%"
})