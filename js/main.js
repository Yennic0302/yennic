let usuario = prompt("usuario")
let clave = prompt("clave")

if(usuario == "Nicole" && clave == "0302"){
    alert("inicio de seccion exitoso")
}else{
    alert("inicio de seccion erroneo")
    presentacionRegalo.getElementsByClassName.visibility = "hidden"
}


let presentacionRegalo = document.querySelector(".imgPrincipal-contenedor")

let presentacion1 = document.querySelector(".presentacion1")
let presentacion2 = document.querySelector(".presentacion2")
let presentacion3 = document.querySelector(".presentacion3")
let presentacion4 = document.querySelector(".presentacion4")

let boton1 = document.querySelector(".boton1")
let boton2 = document.querySelector(".boton2")
let boton3 = document.querySelector(".boton3")
let boton4 = document.querySelector(".boton4")


boton1.addEventListener('click', ()=>{
    presentacionRegalo.setAttribute('hidden',"")
    boton1.setAttribute('hidden',"")
    presentacion1.removeAttribute('hidden',"")
    boton2.removeAttribute('hidden',"")
})

boton2.addEventListener('click', ()=>{
    presentacion1.setAttribute('hidden',"")
    boton2.setAttribute('hidden',"")
    presentacion2.removeAttribute('hidden',"")
    boton3.removeAttribute('hidden',"")
})


boton3.addEventListener('click', ()=>{
    presentacion2.setAttribute('hidden',"")
    boton3.setAttribute('hidden',"")
    presentacion3.removeAttribute('hidden',"")
    boton4.removeAttribute('hidden',"")
})


boton4.addEventListener('click', ()=>{
    presentacion3.setAttribute('hidden',"")
    boton4.setAttribute('hidden',"")
    presentacion4.removeAttribute('hidden',"")

})


let bienvenidaContainer = document.querySelector('.bienvenidaContainer')
let botonTocame = document.querySelector(".tocame")

botonTocame.addEventListener('click', ()=>{
    bienvenidaContainer.setAttribute("hidden","")
})

let titulo =  document.querySelector('.tituloBienvenida')

let Bienvenida = `Bienvenida,<br> ${usuario}`

titulo.innerHTML= Bienvenida
