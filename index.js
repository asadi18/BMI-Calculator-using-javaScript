const heightEl=document.getElementById("height");
const weightEl=document.getElementById("weight");
const btnEl=document.getElementById("btn");
const bmiResultEl=document.getElementById("bmi-result");
const weightConditionEl=document.getElementById("weight-condition");

const calculateBMI = ()=>{
    const heighValue=heightEl.value/100;
    const weightValue=weightEl.value;
    const bmiValue = weightValue/(heighValue * heighValue);

    bmiResultEl.value=bmiValue;

    if(bmiValue<18.5){
        weightConditionEl.innerText = "Weight is very Low";
       
    }
    else if(bmiValue >=18.5 && bmiValue<= 24.9){
        weightConditionEl.innerText = "Weight is Normal";
      
    }
    else if(bmiValue >=25 && bmiValue<= 29.9){
        weightConditionEl.innerText = "Overweight";
      
    }
    else if(bmiValue >=30){
        weightConditionEl.innerText = "Obesity";
        
    }
    
}

btnEl.addEventListener("click",calculateBMI);




