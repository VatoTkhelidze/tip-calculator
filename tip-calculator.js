

percentClick = document.querySelectorAll(".percentButton")

numberClick = document.querySelectorAll(".percentColor")

percent5 = document.querySelector('.box-5')
percent5.addEventListener('click', function result(){
    a = 5;
    b = 100;
    c = billInput.value;
    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log(c * a / b)
    }
    
})

percent10 = document.querySelector('.box-10')
percent10.addEventListener('click', function result(){
    a = 10;
    b = 100;
    c = billInput.value;
    console.log(c * a / b);
})

percent15 = document.querySelector('.box-15')
percent15.addEventListener('click', function result(){
    a = 15;
    b = 100;
    c = billInput.value;
    console.log(c * a / b);
})

percent25 = document.querySelector('.box-25')
percent25.addEventListener('click', function result(){
    a = 25;
    b = 100;
    c = billInput.value;
    console.log(c * a / b);
})

percent50 = document.querySelector('.box-50')
percent50.addEventListener('click', function result(){
    a = 50;
    b = 100;
    c = billInput.value;
    console.log(c * a / b);
})

// percentCustom = document.querySelector('.custom-amount')
customButtonInput = document.querySelector(".custom-amount input")
customButtonInput.addEventListener('input', function result(){
    a = customButtonInput.value;
    b = 100;
    c = billInput.value;
    console.log(c * a / b);
})
// customButtonInput.addEventListener('click', function(){
//     a = customButtonInput.value;
//     b = 100;
//     c = billInput.value;
//     console.log(c * a / b);
// })








billInput = document.querySelector(".money-amount input")
billInput.addEventListener('input', function(){
    console.log(billInput.value);
})




peopleNumberInput = document.querySelector(".people-amount input")
peopleNumberInput.addEventListener('input', function(){
    console.log(peopleNumberInput.value);
})












tipAmountOutput = document.querySelector(".tip-amount-person")





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
//next step is to reset "percent box colors" when RESET button pressed.
//next step is to reset "percent box colors" when RESET button pressed.
//next step is to reset "percent box colors" when RESET button pressed.
//next step is to reset "percent box colors" when RESET button pressed.
//next step is to reset "percent box colors" when RESET button pressed.




