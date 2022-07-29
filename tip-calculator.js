

percentClick = document.querySelectorAll(".percentButton")

numberClick = document.querySelectorAll(".percentColor")




billInput = document.querySelector(".money-amount input")
billInput.addEventListener('input', function(){
    console.log(billInput.value);
})



peopleNumberInput = document.querySelector(".people-amount input")
peopleNumberInput.addEventListener('input', function(){
    console.log(peopleNumberInput.value);
})




customButtonInput = document.querySelector(".custom-amount input")
customButtonInput.addEventListener('input', function(){
    console.log(customButtonInput.value);
})







tipAmountOutput = document.querySelector(".tip-amount-person")

tipAmountOutput.addEventListener('output', function(){
    console.log(tipAmountOutput.value);
})





resetButton = document.querySelector(".reset-box")
resetButton.addEventListener('click', function(){
    if(billInput.value || peopleNumberInput.value || customButtonInput.value > 0){
        billInput.value = '';
        peopleNumberInput.value = '';
        customButtonInput.value = '';
    }
    
})



for(let i=0; i<percentClick.length; i++){
    percentClick[i].addEventListener('click', function(){
        for(let j=0; j<percentClick.length; j++){
            percentClick[j].style.background = '#00474B'
        }
        percentClick[i].style.background = '#26C2AE';
    })
    
}


for(let i=0; i<numberClick.length; i++){
    percentClick[i].addEventListener('click', function(){
        for(let j=0; j<numberClick.length; j++){
            numberClick[j].style.color = '#FFFFFF';
        }
        numberClick[i].style.color = '#00474B';
    })
}




//next step is to reset "percent box colors" when RESET button pressed.




