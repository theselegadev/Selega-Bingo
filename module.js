export default function generate_bingo(init,end){
    const list_num = [0]
    let num = 0
    const array = [] 

    for(let i = 0; i<5; i++){
        for(let k = 0; k < list_num.length; k++){
            if(num == list_num[k]){
                k = 0
                num = Math.floor(Math.random() * (end - init + 1)) + init
            }
        }

        list_num.push(num)
        array.push(num)
    }

    return array
}

export function constructor_table(list,array){
    for(let i = 0; i < 5; i++){
        list[i].innerHTML += `<td id="num">${array[i]}</td>`
    }
}

export function draw_number(){
    const list = [0]
    let num = 0

    for(let k = 0; k < 75; k++){
        for(let i = 0; i<list.length;i++){
            if(num == list[i]){
                i = 0;
                num = Math.floor(Math.random() * (75 - 1 + 1)) + 1
            }   
        }
        list.push(num)
    }

    return {list: list}
}

function save_list(list){
    list = Array.from(list).map(el => el.className)
    localStorage.setItem('listnumbers',JSON.stringify(list))
}

export function markup_number(list){    
    list.forEach(item => {
        item.addEventListener('click',()=>{
            if(!item.classList.contains('markup')){
                item.classList.add('markup')
            }else{
                if(confirm("Deseja desmarcar?")){
                    item.classList.remove('markup')
                }
            }
            save_list(list)
        })
    });
}

export function update_table(nodelist,classlist){
    nodelist.forEach((item,index) => {
        if(classlist[index] != ""){
            item.classList.add(classlist[index])
        }
    })
}

export function list_numbers(list,end,container){
    for(let i = 1; i<end; i++){
        container.innerHTML += `<p>${list[i]}, </p>`
    }
}