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
    if(comentario.value = ""){
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



const array = [{skill : "Javascript", progreso: "60"},{skill : "CSS", progreso: "70"},{skill : "HTML", progreso: "90"},{skill : "Dormir", progreso: "100"},{skill : "Jugar", progreso: "90"},{skill : "Python", progreso: "85"},{skill : "Cocinar", progreso: "75"}]
const vari = document.getElementById("sectionid");

array.forEach(p =>{
    vari.innerHTML +=`<p class="skills-name">${p.skill}</p>
    <div class="progress">
        <div class="progress-bar" data-progreso = "${p.progreso}">
            <span>${p.progreso}</span>
        </div>
    </div>`
})

function mostrarProgreso(progressBar){
    progressBar.forEach(p =>{
        const value = p.dataset.progreso;
        p.style.opacity = 1;
        p.style.width = `${value}%`;
    });
}

function ocultarProgeso(progressBar){
    progressBar.forEach(p =>{
        const value  = p.dataset.progreso;
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const section  = document.getElementById('skills-section');
    const progressBar = document.querySelectorAll('.progress-bar');
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos){
        mostrarProgreso();
        
    }else{
        ocultarProgeso();
    }
});