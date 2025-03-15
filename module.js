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
        list[i].innerHTML += `<td>${array[i]}</td>`
    }
}