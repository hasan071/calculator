let input = document.querySelector(".input")

window.onload = function (){
    input.focus()
}

let buttons = document.querySelectorAll(".bt, .Mbt, .n, .mm, .m");
let equal = document.querySelectorAll(".eq")[0]
buttons.forEach(function (el){
        el.onclick = function(){
            if ( el==document.querySelector(".Mbt") ){
                input.value = 0
            }
            else if ( el==document.querySelectorAll(".Mbt")[1] ){
                    input.value = input.value.slice(0,-1)
            }
            else {
                if ( input.value==0 ){
                    input.value = el.innerHTML
                }else {
                    input.value += el.innerHTML
                }
            }
        }
})

equal.onclick = function(){
    input.value = eval(input.value)
}

// console.log(document.querySelectorAll(".Mbt")[0]);
// console.log(document.querySelectorAll(".Mbt")[1]);
// console.log(document.querySelectorAll(".eq")[0]);

