// console.log('added app.js file');

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
       //  console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin(){
   const random = Math.round(Math.random()*10000);
   return random; 
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    //  console.log(pin);

    const displaypinField = document.getElementById('display-pin');
    displaypinField.value= pin;

})



document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typedNumberField.value;

    if(isNaN(number)){
         if(number === 'C'){
            typedNumberField.value = '';
         }
         else if(number === '<'){
           // console.log(previousTypeNumber);
           const digits = previousTypeNumber.split('');
           digits.pop();
           const remainingDigits = digits.join('');
           typedNumberField.value = remainingDigits;
         }
    }
    else{
       // const previousTypeNumber = typedNumberField.value;
        const newTypeNumber = previousTypeNumber + number;
        typedNumberField.value = newTypeNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click',function(){
   //console.log('verify pin clicked');
   const displaypinField = document.getElementById('display-pin');
   const currentPin = displaypinField.value;

   const typedNumberField = document.getElementById('typed-numbers');
   const typedNumber = typedNumberField.value;
   
   const pinSuccessMessage = document.getElementById('pin-success');
   const pinFailureMessage = document.getElementById('pin-failure');

   if(typedNumber === currentPin ){
    
    pinSuccessMessage.style.display =  'block';
    pinFailureMessage.style.display =  'none';
   }
   else{
    
    pinFailureMessage.style.display =  'block';
    pinSuccessMessage.style.display =  'none';

   }
   

})



