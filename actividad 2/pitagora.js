//declaro la clase y la exporto
export default class Pitagora{
    
    catetoa;
    catetob;

    //se declara el constructor vacio porque no se envian datos al constructor
    constructor ()
    {
        
    }

    calcular_hipotenusa(){
        //se hacen los calculos de potencias para la hipotenusa
        let potencias=Math.pow(this.catetoa,2) + Math.pow(this.catetob,2)

        //se calcula la raiz con math sqrt diciendo que es el resultado de potencias
        let raiz=Math.sqrt(potencias)
        console.log (raiz)
    }
}