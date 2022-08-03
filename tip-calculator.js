

let percentClick = document.querySelectorAll(".percentButton")

let numberClick = document.querySelectorAll(".percentColor")

let a = 0;

let b = 0;

let c = 0;

let d = 0;

let calculation;
let calculationTotal;



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









//PERCENT BUTTONS
//PERCENT BUTTONS
//PERCENT BUTTONS

let percent5 = document.querySelector('.box-5')
percent5.addEventListener('click', function result(){
    a = 5;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    calculationTotal = calculation + c / d;
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    console.log(calculationTotal);
    customButtonInput.value = ''

    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value ='$0.00'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '$')
        totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    }
    
})

let percent10 = document.querySelector('.box-10')
percent10.addEventListener('click', function result(){
    a = 10;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    calculationTotal = calculation + c / d
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    customButtonInput.value = ''
    console.log(calculation);

    if(!peopleNumberInput.value && billInput.value > 0){
        totalAmountOutput.value = '$0.00'
    }


    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(!peopleNumberInput.value && billInput.value > 0){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '$')
    }
})

let percent15 = document.querySelector('.box-15')
percent15.addEventListener('click', function result(){
    a = 15;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    calculationTotal = calculation + c / d
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    console.log(calculationTotal);
    totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    customButtonInput.value = ''

    
    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '$')
    }
})

let percent25 = document.querySelector('.box-25')
percent25.addEventListener('click', function result(){
    a = 25;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    calculationTotal = calculation + c / d
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    console.log(calculationTotal);
    totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    customButtonInput.value = ''



    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '$')
    }
})

let percent50 = document.querySelector('.box-50')
percent50.addEventListener('click', function result(){
    a = 50;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    calculationTotal = calculation + c / d
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    console.log(calculationTotal);
    totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    customButtonInput.value = ''



    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '$')
    }
})


let customButtonInput = document.querySelector(".custom-amount input")
customButtonInput.addEventListener('input', function result(){
    a = customButtonInput.value;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    calculationTotal = calculation + c / d
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    console.log(calculationTotal);
    totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    if(customButtonInput.value > 100){
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    



    if(!peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && !billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(!peopleNumberInput.value && billInput.value){
        console.log('Please enter the bill amount and number of people.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value && billInput.value < 0){
        console.log('Please enter correct Number of People.')
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'

    }
    if(peopleNumberInput.value && billInput.value > 0){
        console.log('Tip payment for person is ' + c * a / b / d + '$')
    }
    if(customButtonInput.value > 0){
        resetButton.style.backgroundColor = '#26C2AE';
    }
    if(customButtonInput?.value === ''){
        resetButton.style.backgroundColor = '#0D686D'
    }
})

customButtonInput.addEventListener('click', function(){
    for(let j=0; j<percentClick.length; j++){
        percentClick[j].style.background = '#00474B'
    }
    for(let j=0; j<numberClick.length; j++){
        numberClick[j].style.color = '#FFFFFF';
    }
    a = customButtonInput.value;
    b = 100;
    c = billInput.value;
    d = peopleNumberInput.value;
    calculation = c * a / b / d
    tipAmountOutput.value = '$' + calculation.toFixed(2)
    tipAmountOutput.value = '$0.00';
    totalAmountOutput.value = '$0.00';

    if(customButtonInput.value > 0){
        resetButton.style.backgroundColor = '#26C2AE';
    }
    if(customButtonInput?.value === ''){
        resetButton.style.backgroundColor = '#0D686D'
    }
})



let resetButton = document.querySelector(".reset-box")
resetButton.addEventListener('click', function(){
    if(billInput.value > 0 || peopleNumberInput.value > 0 || customButtonInput.value > 0 || tipAmountOutput.value > 0 || totalAmountOutput.value > 0){
        billInput.value = '';
        peopleNumberInput.value = '';
        customButtonInput.value = '';
        tipAmountOutput.value = '$0.00';
        totalAmountOutput.value = '$0.00';
    }
    for(let j=0; j<percentClick.length; j++){
        percentClick[j].style.background = '#00474B'
    }
    for(let j=0; j<numberClick.length; j++){
        numberClick[j].style.color = '#FFFFFF';
    }
    
    
})

//PERCENT BUTTONS
//PERCENT BUTTONS
//PERCENT BUTTONS






                                        //inputs & outputs
                                        //inputs & outputs
                                        //inputs & outputs

let billInput = document.querySelector(".money-amount input")
billInput.addEventListener('input', function(){
    if(billInput.value > 0 && peopleNumberInput.value > 0 && a > 0){
        b = 100;
        c = billInput.value;
        d = peopleNumberInput.value;
        calculation = c * a / b / d
        calculationTotal = calculation + c / d
        tipAmountOutput.value = '$' + calculation.toFixed(2)
        totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    }

    // if(peopleNumberInput.value > 0){
    //     totalAmountOutput.value = '$'
    // }
    if(!billInput.value && peopleNumberInput.value){
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(billInput.value && !peopleNumberInput.value){
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(billInput.value > 0){
        resetButton.style.backgroundColor = '#26C2AE';
    }
    if(billInput?.value === ''){
        resetButton.style.backgroundColor = '#0D686D'
    }
})




let peopleNumberInput = document.querySelector(".people-amount input")
peopleNumberInput.addEventListener('input', function(){
    console.log(peopleNumberInput.value);
    if(billInput.value > 0 && peopleNumberInput.value > 0 && a > 0){
        b = 100;
        c = billInput.value;
        d = peopleNumberInput.value;
        calculation = c * a / b / d
        calculationTotal = calculation + c / d
        tipAmountOutput.value = '$' + calculation.toFixed(2)
        totalAmountOutput.value = '$' + calculationTotal.toFixed(2)
    }
    if(!billInput.value && peopleNumberInput.value){
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(billInput.value && !peopleNumberInput.value){
        tipAmountOutput.value = '$0.00'
        totalAmountOutput.value = '$0.00'
    }
    if(peopleNumberInput.value > 0){
        resetButton.style.backgroundColor = '#26C2AE';
    }
    if(peopleNumberInput?.value === ''){
        resetButton.style.backgroundColor = '#0D686D'
    }
})




let tipAmountOutput = document.querySelector(".tip-amount-output output")
let totalAmountOutput = document.querySelector(".total-amount-output output")


                                        //inputs & outputs
                                        //inputs & outputs
                                        //inputs & outputs



















