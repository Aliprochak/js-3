let inc = document.querySelector('.inc');
let result = document.querySelector('.result');
let dce = document.querySelector('.dce');

inc.addEventListener("click", function(){
    if(result.value <=5){
    result.value = Number(result.value)+1
    console.log(result)
   }else{
    alert( 'Please Stop');
   }
   
})
dce.addEventListener("click" ,()=>{
    if(result.value>1){
        result.value = Number(result.value)-1
        console.log(result)
    }else{
        dce.style.cursor = `not-allowed`
    }
})



 let range = document.querySelector('.range');
 let contain = document.querySelector('.contain');



 range.addEventListener('input', function(){
    let result = Number(range.value);
    contain.innerHTML = result;
})
