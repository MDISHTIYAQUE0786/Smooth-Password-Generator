 let passwordBox=document.getElementById('passBox');
 let inputSlider=document.getElementById('inputSlider');
 let sliderValue=document.getElementById('sliderValue');
 let lowercase=document.getElementById('lowercase');
 let uppercase=document.getElementById('uppercase');
 let numbers=document.getElementById('numbers');
 let symbols=document.getElementById('symbols');
 let genBtn=document.getElementById('genBtn');

 //for inputSlider value
 sliderValue.textContent=inputSlider.value;
 // for input slider AddEventListener
 inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
 });

 //for Button addEventListener
 genBtn.addEventListener('click',()=>{
    passwordBox.value=generatePassword();
 });

let lowerChars="abcdefghijklmnopqrstuvwxyz";
 let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let allNumbers="0123456789";
 let allSymbols="~`!@$%^&*()_-+=\|?/>.<,#;:"

 //for Creating a Generate Password
  function generatePassword() {
    let genPassword="";
    //for all Characters
    let allChars="";
    allChars+=lowercase.checked?lowerChars:"";
    allChars +=uppercase.checked ? upperChars:"";
    allChars+=numbers.checked ? allNumbers : "";
    allChars+=symbols.checked ?allSymbols : "";

    if(allChars =="" || allChars.length==0){
        return genPassword;
    }

     let i=1;
     while(i<=inputSlider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
     }
    return genPassword;
  }
