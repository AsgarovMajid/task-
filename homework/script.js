const username=document.querySelector("#username")
const myForm=document.querySelector("#form")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const button=document.querySelector("button")

if(button.click){
      button.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(username.value);
        console.log(email.value);
        console.log(password.value);
      })
      
}
function removeDisabled(anyInput){
    anyInput.addEventListener('change',()=>{
        
        console.log(anyInput.value);
        
    })
}
removeDisabled(username)
removeDisabled(email)
removeDisabled(password)