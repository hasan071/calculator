let input = document.querySelector(".input")

window.onload = function (){
    input.focus()
}

let buttons = document.querySelectorAll(".bt, .Mbt, .n, .mm, .m");
let equal = document.querySelectorAll(".eq")[0]
buttons.forEach(function (el){
        el.onclick = function(){
            const operators = [ "*" , "/" , "+" , "-" , "%" ]
            const lastChar = input.value.slice(-1)
            if ( operators.includes(lastChar) && operators.includes(el.innerText) ){
                return;
            }
            if ( el==document.querySelector(".Mbt") ){
                input.value = ""
            }
            else if ( el==document.querySelectorAll(".Mbt")[1] ){
                input.value = input.value.slice(0,-1)
            }
            else if ( el==document.querySelector(".sin") ){
                input.value = Math.sin(eval(input.value)*(Math.PI/180)).toFixed(1)
            }
            else if ( el==document.querySelector(".cos") ){
                input.value = Math.cos(eval(input.value)*(Math.PI/180)).toFixed(1)
            }
            else if ( el==document.querySelector(".tan") ){
                input.value = Math.tan(eval(input.value)*(Math.PI/180)).toFixed(1)
            }
            else {
                    input.value += el.innerHTML
            }
            
            buttons.forEach(function(ell){
                ell.style.border = "1px solid white"
            })
            el.style.border = "3px solid rgb(0, 180, 180)"
        }
})

equal.onclick = function(){
    if ( input.value=="" ){
        input.value = 0
    }
    else {
        input.value = eval(input.value)
    }
    buttons.forEach(function(ell){
                ell.style.border = "1px solid white"
            })
            
        }