

percentClick = document.querySelectorAll(".percentButton")

numberClick = document.querySelectorAll(".percentColor")






//PERCENT BUTTONS
//PERCENT BUTTONS
//PERCENT BUTTONS

percent5 = document.querySelector('.box-5')
percent5.addEventListener('click', function result(){
    a = 5;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = Math.round(100 * calculation) / 100 + '$'

    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '.00$')
    }
})

percent10 = document.querySelector('.box-10')
percent10.addEventListener('click', function result(){
    a = 10;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = Math.round(100 * calculation) / 100 + '$'


    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '.00$')
    }
})

percent15 = document.querySelector('.box-15')
percent15.addEventListener('click', function result(){
    a = 15;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = Math.round(100 * calculation) / 100 + '$'

    
    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '.00$')
    }
})

percent25 = document.querySelector('.box-25')
percent25.addEventListener('click', function result(){
    a = 25;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = Math.round(100 * calculation) / 100 + '$'



    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '.00$')
    }
})

percent50 = document.querySelector('.box-50')
percent50.addEventListener('click', function result(){
    a = 50;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = Math.round(100 * calculation) / 100 + '$'



    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '.00$')
    }
})


customButtonInput = document.querySelector(".custom-amount input")
customButtonInput.addEventListener('input', function result(){
    a = customButtonInput.value;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = Math.round(100 * calculation) / 100 + '$'



    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '.00$')
    }
})



resetButton = document.querySelector(".reset-box")
resetButton.addEventListener('click', function(){
    if(billInput.value || peopleNumberInput.value || customButtonInput.value || tipAmountOutput.value > 0){
        billInput.value = '';
        peopleNumberInput.value = '';
        customButtonInput.value = '';
        tipAmountOutput.value = '$';
    }
})

//PERCENT BUTTONS
//PERCENT BUTTONS
//PERCENT BUTTONS






                                        //inputs & outputs
                                        //inputs & outputs
                                        //inputs & outputs

billInput = document.querySelector(".money-amount input")
billInput.addEventListener('input', function(){
    console.log(billInput.value);
})




peopleNumberInput = document.querySelector(".people-amount input")
peopleNumberInput.addEventListener('input', function(){
    console.log(peopleNumberInput.value);
})




tipAmountOutput = document.querySelector(".tip-amount-output output")
tipAmountOutput.addEventListener('output', function result(){
    if(!customButtonInput.value){
        tipAmountOutput.value = 0
    }
})


                                        //inputs & outputs
                                        //inputs & outputs
                                        //inputs & outputs












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






