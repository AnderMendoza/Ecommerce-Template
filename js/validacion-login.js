// --------------------- LOGIN ------------------

const email2=document.getElementById("email2")
const password3=document.getElementById("pass3")
form2.addEventListener("submit", i=>{
  i.preventDefault()
  let entrar = false
  let regexEmail2= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  let regpassword2=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

if(!regexEmail2.test(email2.value)){
  error6.innerHTML= "X Correo no válido <br>"
  email2.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-5").innerHTML="close";
  document.getElementById("icon-form-5").style.color="rgb(232, 39, 39)";
  email2.style.color="white";
  entrar= true 
}else{
  document.getElementById("icon-form-5").innerHTML="check";
  document.getElementById("icon-form-5").style.color="rgb(0, 184, 0)";
  email2.style.background="#bbb5ef";
  error6.innerHTML= ""
}
if(!regpassword2.test(password3.value)){
  password3.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-6").innerHTML="close";
  document.getElementById("icon-form-6").style.color="rgb(232, 39, 39)";
  password3.style.color="white";
  error7.innerHTML= "X Contraseña (pruebe 8-16 cifras al menos 1número/1Mayuscula/1minuscula)<br>"
}else{
  document.getElementById("icon-form-6").innerHTML="check";
  document.getElementById("icon-form-6").style.color="rgb(0, 184, 0)";
  password3.style.background="#bbb5ef";
  error7.innerHTML= ""
}
})