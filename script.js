const message = [
    "You are underweight. Consider improving your nutrition.",
    "You have a healthy body weight. Keep it up!",
    "You are overweight. Consider regular exercise."
];

const submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    const height1 = document.getElementById("height")
    const height_real = Number(height1.value);
   // console.log(height_real)
    
    const weight1 = document.getElementById("weight")
    const weight_real = Number(weight1.value);
    
    const bmi = Number(((weight_real/(height_real*height_real))*10000)).toFixed(2);
    //console.log(bmi)

    const catogery = document.getElementById("catogery");
    if(height_real>272|| weight_real>500){
        catogery.textContent="shi details dal bro";
    }
    else if(height_real<50|| weight_real<10){
               
        catogery.textContent="shi details dal bro";
    }
    else if(bmi<18.5){
      
        catogery.textContent=bmi + " " +message[0];
    }

    else if (bmi>=18.5&&bmi<=24.9){
               
        catogery.textContent=bmi +" "+ message[1];
    }

    else{
              
        catogery.textContent=bmi +" "+ message[2];
    }

})