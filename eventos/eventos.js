const zonaRaton = document.getElementById("zonaRaton");
const salidaRaton = document.getElementById("salidaRaton");
zonaRaton.addEventListener("click", (event) => {
    //salidaRaton.textContent = "Se detecto un click";
    zonaRaton.classList.toggle("activa");
    console.log("se detecta click")
})

zonaRaton.addEventListener("mousedown", (event) => {
    salidaRaton.textContent = "Se presiona el boton";
})
zonaRaton.addEventListener("mouseup", (event) => {
    salidaRaton.textContent = "Se suelta el boton";
})

zonaRaton.addEventListener("mouseenter", (event) => {
    salidaRaton.textContent = "hola mouse";
})

zonaRaton.addEventListener("mouseleave", (event) => {
    salidaRaton.textContent = "adios mouse";
})

zonaRaton.addEventListener("contextmenu", () => {
    salidaRaton.textContent = "se solicito el menu contextual";
})
zonaRaton.addEventListener("dblclick", (e) => {
    console.log(e);
    salidaRaton.textContent = e.timeStamp + " x = " + e.x + " y = " + e.y;
})

let botonEvento = document.getElementById("botonEvento");
let salidaEvento = document.getElementById("salidaEvento");

salidaEvento.textContent = "no hay moros en la costa";

botonEvento.addEventListener("click", (e) => {
    salidaEvento.textContent = "click a las " + e.timeStamp + " en area  x = " + e.x + " y = " + e.y;
})

botonEvento.addEventListener("mouseenter", (e) => {
    salidaEvento.textContent = "listo para click";
})

botonEvento.addEventListener("mouseleave", (e) => {
    salidaEvento.textContent = "no hay moros en la costa";
})


const abuelo = document.getElementById("abuelo");
const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");
abuelo.addEventListener("click", (e) => {
    console.log("abuelo click");
})
padre.addEventListener("click", (e) => {
    console.log("padre click");
})
hijo.addEventListener("click", (e) => {
    console.log("hijo click");
})

const nombre = document.getElementById("nombre");

const salidaFormulario = document.getElementById("salidaFormulario");

nombre.addEventListener("input", () => {
    salidaFormulario.textContent = "Valor : " + nombre.value;
    nombre.value = nombre.value.toUpperCase();
})

const carrera = document.getElementById("carrera");

carrera.addEventListener("change", () =>{
    salidaFormulario.textContent = "Carrera seleccionada :"  + carrera.value;
})

nombre.addEventListener("focus", () => {
    salidaFormulario.textContent = "Nombre tiene foco";
})

nombre.addEventListener("blur", () => {
    salidaFormulario.textContent = "Nombre perdio foco";
})

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    salidaFormulario.innerHTML =
        "nombre :" + nombre.value + "<br>" + "carrera: " + carrera.value;
})

nombre.addEventListener("invalid", (e) =>{
    salidaFormulario.textContent = "el nombre es obligatorio"
    salidaFormulario.classList.toggle("abuelo")
    console.log(e.target)
})

const divArrastrable = document.getElementById("elementoArrastrable");
const zonaDrop = document.getElementById("zonaDrop");
const salidaDrag = document.getElementById("salidaDrag");

divArrastrable.addEventListener("dragstart", (e) => {
    salidaDrag.innerText = "inicio drag -> ";
    e.dataTransfer.setData("text/plain", "ola ke aze")
})

divArrastrable.addEventListener("drag", (e) => {
    salidaDrag.innerText = salidaDrag.innerText + ".";
})

divArrastrable.addEventListener("dragend", (e) => {
    salidaDrag.innerText = salidaDrag.innerText + "<- fin drag";
})

zonaDrop.addEventListener("dragenter", (e) => {
    zonaDrop.classList.toggle("zona")
    zonaDrop.classList.toggle("activa")
})


zonaDrop.addEventListener("dragover", (e) => {
    e.preventDefault();
    //zonaDrop.classList.toggle("zona")
    //zonaDrop.classList.toggle("activa")
})


zonaDrop.addEventListener("dragleave", (e) => {
    zonaDrop.classList.toggle("zona")
    zonaDrop.classList.toggle("activa")
})

zonaDrop.addEventListener("drop", (e) => {
    const dato = e.dataTransfer.getData("text/plain");

    salidaDrag.innerText = "soltado, dato recibido :" + dato;

    zonaDrop.classList.remove("activa");
})