export default class Cliente{
    nombre=''
    apellido=''
    dni=''
    
    constructor (nombre,apellido,dni)
    {
        this.nombrec=nombre
        this.apellidoc=apellido
        this.dnic=dni
    }
    btn_mostrar()
    {
        console.log(`El nombre completo del cliente es ${this.nombrec} ${this.apellidoc} y el DNI es ${this.dnic}.`)
    }
}
