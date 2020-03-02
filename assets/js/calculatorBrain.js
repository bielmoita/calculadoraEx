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
    if (operacao=="F!")
    {
        n2 = n1;
        // if (n1<0) {
        //     result.innerHTML = "O numero precisa ser maior que zero";
        // }
        // else{
            if ((n2 == 0) || (n2 == 1)) 
            {
                result.innerHTML = 1;
            }
            else {
                var fator = 1
                for(var i=1 ; i<=n2 ; i++)
                {
                    fator = fator*i;
                }
                result.innerHTML = fator;
        }
        

    }
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
    // função  fatorial ( valor )  {
    //     // para valores econômicos
    //     if ( valor < 0 )  {
  
    //       retornar  'Valor deve ser maior ou igual a zero' ;
        
    //       // para valor = 0 ou igual a 1
    //     }  senão  se  (  ( valor  ==  0 )  ||  ( valor  ==  1 )  )  {
  
    //       retornar  1 ;
         
    //     }  mais  {
  
    //       var  acumula  =  1 ;
    //       para ( x = valor ; x > 1 ; x - )  {
    //         acumula  =  acumula * x ;
    //       }
    //       retorno  acumula ;
    //     } 
  
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

function onFatorialClicked(){
    //TODO implement this function
    n1 = result.innerHTML
    n1 = parseInt(n1); //Convertendo para numero
    operacao = "F!"
    //result.innerHTML = "0";
}

