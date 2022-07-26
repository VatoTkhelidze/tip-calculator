

percentClick = document.querySelectorAll(".percentButton")

numberClick = document.querySelectorAll(".percentColor")


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






