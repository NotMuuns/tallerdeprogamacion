import Vehiculo from "./vehiculo.js"

//funcion flecha
const mostrar = () => {
    const km= document.getElementById("imp_km").value;

    //se crea la instancia de clase que nos va a permitir tener acceso a los metodos y atributos de la clase
    let vehiculo = new Vehiculo(km)
    //ejecute el metodo de la clase
    vehiculo.mostrar_kilometraje()
}

document.getElementById("btn_mostrar").addEventListener("click",mostrar)

//forma 2 de enviar datos a la clas
const mostrar_forma2= () =>{

    const mod=document.getElementById("inp_modelo").value
    let vehiculo= new Vehiculo()
    vehiculo.modelo=mod
    vehiculo.mostrar_modelo()
}

document.getElementById("btn_modelo").addEventListener("click",mostrar_forma2)