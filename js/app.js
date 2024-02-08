const toggle = document.querySelector('.input');
const invertir = document.querySelector('body');
const divencri = document.querySelector('#encriptado');
const consteImg = document.querySelector('#conte-img');
const btnencri = document.querySelector('#btn-encri');
const btndesencri = document.querySelector('#btn-desencri');
const alerta= document.querySelector('#alerta');
const divaler= document.querySelector('#divaler');
const textoenviado= document.querySelector('#texto'); 
const textarea= document.querySelector('#textarea');
const div = document.createElement('div');
const btn = document.createElement('button');

import {cifrarTexto ,descifrarTexto} from './algoritmo.js'


document.addEventListener('DOMContentLoaded',()=>{
    
})

textoenviado.addEventListener('keypress',(event)=>{
    if(event.keyCode ===13){
       validar();
       
    }

})
       



toggle.addEventListener('change',()=>{
    invertir.classList.toggle('inventir') 
})

textoenviado.addEventListener('click',()=>{
    textarea.value="";
})


btndesencri.addEventListener('click',desencriptar);

function desencriptar(){


  
        textarea.classList.add('resiveOf');


    textarea.value= descifrarTexto(textoenviado.value);

     textoenviado.value="";
         crearHtml();
        
    


  

}


btnencri.addEventListener('click',validar);

function validar(){
   
    const acento = /[aeiou]/;
    const mayusculas = /[A-Z]/;
   
        if(!mayusculas.test(textoenviado.value)){
            if(acento.test(textoenviado.value)){
                consteImg.classList.add('apagado');
                textarea.classList.add('resiveOf');
               
                    
                textarea.value= cifrarTexto(textoenviado.value);
            
                 textoenviado.value="";
                     crearHtml();
                     return
    

            }
           


                
          
    
        
      

    }
    
    
    divaler.classList.add('divaler');
    setTimeout(() => {
        divaler.classList.remove('divaler');
       
        
    }, 3000);
   


   

   
}



function copiartexto(){
   
    
 navigator.clipboard.writeText(textarea.value)
 btn.textContent = 'Copiado';
 setTimeout(() => {
    btn.textContent = 'Copiar';
    
 }, 3000);

    
}
btn.addEventListener('click',copiartexto)






function crearHtml(){
   
    div.classList.add('boton');
    btn.classList.add('btn1','btn');
    btn.textContent='Copiar'
    btn.id='btn-copi';
  
   
    div.appendChild(btn);
    divencri.appendChild(div);

}