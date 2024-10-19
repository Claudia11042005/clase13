// condiciones 
function leevalores() {
    let varNum1 = document.getElementById("num1").value; 
    let varNum2 = document.getElementById("num2").value; 
    return compara(varNum1, varNum2);
}

function compara(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}