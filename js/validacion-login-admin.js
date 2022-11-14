// --------------------- LOGIN ADMIN------------------

const email3=document.getElementById("email3")
const password4=document.getElementById("pass4")
form3.addEventListener("submit", a=>{
  a.preventDefault()
  let entrar = false
  let regexEmail3= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  let regpassword3=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

if(!regexEmail3.test(email3.value)){
  error8.innerHTML= "X Correo no válido <br>"
  error8.style.background="white";
  error8.style.padding="5px"; 
  email3.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-7").innerHTML="close";
  document.getElementById("icon-form-7").style.color="rgb(232, 39, 39)";
  email3.style.color="white";
}else{
  document.getElementById("icon-form-7").innerHTML="check";
  document.getElementById("icon-form-7").style.color="rgb(0, 184, 0)";
  email3.style.background="#bbb5ef";
  error8.innerHTML= ""
  error8.style.background="none";
}
if(!regpassword3.test(password4.value)){
  password4.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-8").innerHTML="close";
  document.getElementById("icon-form-8").style.color="rgb(232, 39, 39)";
  password4.style.color="white";
  error9.innerHTML= "X Contraseña (pruebe 8-16 cifras al menos 1número/1Mayuscula/1minuscula)<br>"
  error9.style.background="white";
  error9.style.padding="5px"; 
}else{
  document.getElementById("icon-form-8").innerHTML="check";
  document.getElementById("icon-form-8").style.color="rgb(0, 184, 0)";
  password4.style.background="#bbb5ef";
  error9.innerHTML= ""
  error9.style.background="none";
}

})

