import Pitagora from "./pitagora.js"
const calcular = () => {
    let instancia=new Pitagora()
    instancia.catetoa=document.getElementById("inp_catetoa").value
    instancia.catetob=document.getElementById("inp_catetob").value

    instancia.calcular_hipotenusa()
}
document.getElementById("mostrar").addEventListener("click",calcular)