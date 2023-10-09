function convertUnitOfTemp(){
    const inputTemp=parseFloat(document.getElementById("temp").value);
    const fromUnit=document.getElementById("FromUnit").value;
    const toUnit=document.getElementById("ToUnit").value;
    let result;
    let resultUnit;

    if(fromUnit===toUnit){
        result=inputTemp;
    }

    else if(fromUnit==="celsius"){

        if(toUnit==="fahrenheit"){
            result=(inputTemp*(9/5))+32;
            resultUnit="F"
        }

        else if(toUnit==="kelvin"){
            result=inputTemp+273.15;
            resultUnit="K"
        }
    }

    else if(fromUnit==="fahrenheit"){

        if(toUnit==="celsius"){
            result=(inputTemp-32)*(5/9);
            resultUnit="C"
        }

        else if(toUnit==="kelvin"){
            result=(inputTemp-32)*(5/9)+273.15;
            resultUnit="K"
        }
    }

    else if(fromUnit==="kelvin"){

        if(toUnit==="celsius"){
            result=inputTemp-273.15;
            resultUnit="C"
        }

        else if(toUnit==="fahrenheit"){
            result=(inputTemp-273.15)*(9/5)+32;
            resultUnit="F"
        }
    }

    document.getElementById("result").textContent='Result: ' +result.toFixed(2)+ ' ' +resultUnit;
}

function InterchangeFunc(){
    const fromUnit=document.getElementById("FromUnit");
    const toUnit=document.getElementById("ToUnit");

    const selectedOption1=fromUnit.options[fromUnit.selectedIndex];
    const selectedOption2=toUnit.options[toUnit.selectedIndex];

    const tempValue=selectedOption1.value;
    const tempText=selectedOption1.text;

    selectedOption1.value=selectedOption2.value;
    selectedOption1.text=selectedOption2.text;

    selectedOption2.value=tempValue;
    selectedOption2.text=tempText;
}