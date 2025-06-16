count = 0;

function myAnswers(){

    if (document.querySelector('input[name=question1]:checked').value === "option3"){
       count +=1;
    }
    if (document.querySelector('input[name=question2]:checked').value === "option6"){
        count +=1;
    }
    if (document.querySelector('input[name=question3]:checked').value === "option9"){
        count +=1;
    }
    if (document.querySelector('input[name=question4]:checked').value === "option12"){
        count +=1;
    }
    console.log(`You scored ${count} out of 4`);
}

function reset(){
    count = 0;
}
