import Cliente from "./cliente.js"
const mostrar= () => {
    const nombre=document.getElementById("inp_nombre").value;
    const apellido=document.getElementById("inp_apellido").value;
    const dni=document.getElementById("inp_dni").value

    let datos=new Cliente(nombre,apellido,dni)
    datos.btn_mostrar()
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)