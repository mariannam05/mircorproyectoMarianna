window.onload = function(){
  
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
   
    prevBtn.addEventListener("click",function(){
      prevSlide();
   });
    nextBtn.addEventListener("click",function(){
      nextSlide();
   });
    
  }
  let slideNumber = 0;
  const prevSlide = () =>{
    const slides = document.getElementsByClassName('slides');
  const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName('current');
    currentSlide[0].classList.remove("current");
    if(slideNumber == 0){
      slideNumber = slides.length-1;
    }
    else{
        slideNumber = slideNumber-1;
    }
    slides[slideNumber].classList.add("current");
  }
  const nextSlide = () =>{
    const slides = document.getElementsByClassName('slides');
  const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName('current');
    currentSlide[0].classList.remove("current");
    if(slideNumber == (slides.length-1)){
      slideNumber = 0;
    }
    else{
        slideNumber = slideNumber+1;
    }
    slides[slideNumber].classList.add("current");
  }


var inputs = document.getElementsByClassName('formulario_input');
for (var i =0; i<inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}


const nombre  = document.getElementById("name")
const email  = document.getElementById("email")
const form  = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const comentario = document.getElementById("coment")

form.addEventListener("submit", e=>{
    console.log(inputs);
    var t1 = nombre.value;
    var t2 = email.value;
    var t3 = comentario.value;
    if(t1 == "" || t2 == "" || t3 == ""){
        alert("Llena todos los campos")
    }
})


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings  = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    parrafo.innerHTML = ""
    if(nombre.value.length <2){
        warnings += 'El nombre no es válido <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += 'El correo no es válido <br>'
        entrar = true
    }
    if(comentario.value.length <2){
        warnings += 'El comentario no es válido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        alert("Datos enviados con  exito");
        return true;
    }
    
})

