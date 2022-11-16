const nombre=document.getElementById("nombre")
const email=document.getElementById("email")
const password1=document.getElementById("pass1")
const password2=document.getElementById("pass2")
const form=document.getElementById("form")
const form2=document.getElementById("form2")
const form3=document.getElementById("form3")
const parrafo=document.getElementById("warnings")

const registrar=document.getElementById("registrar")
// ----------------------------------------
const error1=document.getElementById("error1")
const error2=document.getElementById("error2")
const error3=document.getElementById("error3")
const error4=document.getElementById("error4")
const error5=document.getElementById("error5")
const error6=document.getElementById("error6")
const error7=document.getElementById("error7")
const error8=document.getElementById("error8")
const error9=document.getElementById("error9")
// ----------------------------------------


registrar.addEventListener("click", e=>{
  e.preventDefault()
  let entrar = false
  let regexEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  let regnomnbre=/^[a-zA-ZÀ-ÿ\s]{7,40}$/
  let regpassword=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

  if(!regexEmail.test(email.value)){
    error1.innerHTML= "X Correo no válido <br>"
    email.style.background="rgb(232, 39, 39)";
    document.getElementById("icon-form-1").innerHTML="close";
    document.getElementById("icon-form-1").style.color="rgb(232, 39, 39)";
    email.style.color="white";
    entrar= true 
  }else{
    document.getElementById("icon-form-1").innerHTML="check";
    document.getElementById("icon-form-1").style.color="rgb(0, 184, 0)";
    email.style.background="#bbb5ef";
    error1.innerHTML= ""

  }
  if(!regnomnbre.test(nombre.value)){
    nombre.style.background="rgb(232, 39, 39)";
    document.getElementById("icon-form-2").innerHTML="close";
    document.getElementById("icon-form-2").style.color="rgb(232, 39, 39)";
    nombre.style.color="white";
    error2.innerHTML= "X Nombre(pruebe +6 cifras y solo letras) <br>"
   entrar= true
  }else{
    document.getElementById("icon-form-2").innerHTML="check";
    document.getElementById("icon-form-2").style.color="rgb(0, 184, 0)";
    nombre.style.background="#bbb5ef";
    error2.innerHTML= ""
  }
if(!regpassword.test(password1.value)){
  password1.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-3").innerHTML="close";
  document.getElementById("icon-form-3").style.color="rgb(232, 39, 39)";
  password1.style.color="white";
  error3.innerHTML= "X Contraseña (pruebe 8-16 cifras al menos 1número/1Mayuscula/1minuscula)<br>"
 entrar= true
}else{
  error3.innerHTML= ""
}
// else{
//   password1.style.background="green";
//   document.getElementById("icon-form-3").innerHTML="check";
//   document.getElementById("icon-form-3").style.color="green";
//   password1.style.color="white";
// }

if(!regpassword.test(password2.value)){
  password2.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-4").innerHTML="close";
  document.getElementById("icon-form-4").style.color="rgb(232, 39, 39)";
  password2.style.color="white";
  error4.innerHTML="X Contraseña (pruebe 8-16 cifras al menos 1número/1Mayuscula/1minuscula)<br>"
 entrar= true
}else{
  error4.innerHTML= ""
}
// else{
//   password2.style.background="green";
//   document.getElementById("icon-form-4").innerHTML="check";
//   document.getElementById("icon-form-4").style.color="green";
//   password2.style.color="white";
// }

// 

if(regpassword.test(password1.value) & password1.value==password2.value & password1.value1!="" & password2.value!=""){
  password1.style.background="#bbb5ef";
  document.getElementById("icon-form-3").innerHTML="check";
  document.getElementById("icon-form-3").style.color="rgb(0, 184, 0)";
  password1.style.color="white";
  password2.style.background="#bbb5ef";
  document.getElementById("icon-form-4").innerHTML="check";
  document.getElementById("icon-form-4").style.color="rgb(0, 184, 0)";
  password2.style.color="white";
  error5.innerHTML= ""

  db.collection("Usuarios").add({
    Correo: document.getElementById("email").value,
    Nombre: document.getElementById("nombre").value,
    Password: document.getElementById("pass1").value,
    Password_repeat: document.getElementById("pass2").value,
    
})
.then((docRef) => {
    alert("Registro exitoso")
})
.catch((error) => {
    alert("ERROR EN EL REGISTRO")
});

}else{
  password1.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-3").innerHTML="close";
  document.getElementById("icon-form-3").style.color="rgb(232, 39, 39)";
  password1.style.color="white";
  password2.style.background="rgb(232, 39, 39)";
  document.getElementById("icon-form-4").innerHTML="close";
  document.getElementById("icon-form-4").style.color="rgb(232, 39, 39)";
  password2.style.color="white";
  error5.innerHTML="X Las contraseñas deben ser iguales<br>"
}

  if(entrar){
  parrafo.innerHTML = warnings
  }
})


