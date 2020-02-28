var result = document.getElementById("result");

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
}

function onEqualsClicked(){
    //TODO implement this function
}

function onDivideClicked(){
    //TODO implement this function
}



function onAddClicked(){
    //TODO implement this function
}

function onSubtractClicked(){
    //TODO implement this function
}

function onMultiplyCliked(){
    //TODO implement this function
}

