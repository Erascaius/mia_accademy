function operazione1(cb, num1, num2){
    const result = num1 + num2;
    cb();
}

function operazione2(cb, num3, num4){
    const result = num3 + num4;
    cb();
}

operazione1(function(){
    operazione2(function(){
        console.log("hai raggiunto la funzione interna");
    }, 6, 2)
}, 2, 4)

