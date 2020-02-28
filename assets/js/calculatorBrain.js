// Variaveis Globais
var result = document.getElementById("result");
var n1, n2; //Declaração de variaveis
var operacao="";

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = "0";
    n1=0;
    n2=0;
}

function onEqualsClicked(){
    //TODO implement this function
    n2=parseInt(result.innerHTML); //Atribuição e conversão para numero
    if(operacao=="+")
    {
        result.innerHTML = n1+n2;
    }
    if(operacao=="-")
    {
        result.innerHTML = n1-n2;
    }
    if(operacao=="*")
    {
        result.innerHTML = n1*n2;
    }
    if(operacao=="/")
    {
        if (n2>0){
            result.innerHTML = n1/n2;
        }
        else {
            result.innerHTML = "Impossivel Dividir por zero!"
        }
        
    }   

}

function onDivideClicked(){
    //TODO implement this function
    n1 = result.innerHTML
    n1 = parseInt(n1); //Convertendo para numero
    operacao = "/"
    result.innerHTML = "0";
}



function onAddClicked(){
    //TODO implement this function
    n1 = result.innerHTML
    n1 = parseInt(n1); //Convertendo para numero
    operacao = "+"
    result.innerHTML = "0";
   

}

function onSubtractClicked(){
    //TODO implement this function
    n1 = result.innerHTML
    n1 = parseInt(n1); //Convertendo para numero
    operacao = "-"
    result.innerHTML = "0";
}

function onMultiplyCliked(){
    n1 = result.innerHTML
    n1 = parseInt(n1); //Convertendo para numero
    operacao = "*"
    result.innerHTML = "0";
}

