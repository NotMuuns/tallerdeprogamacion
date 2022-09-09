//creacion de un objeto
let datos_personales={
    nombre: 'Juan',
    apellido: 'SSJ',
    dni:69666999,
    correos:{
        gmail:'juanissj@gmail.com',
        outlook:'juanssjdiosblue@outlook.com',
        yahoo:'juanitoXx777xX@yahoo.com.ar'
    },
    edad:21
}
/*forma 1 
const gmail=datos_personales.correos.gmail
const outlook=datos_personales.correos.outlook
const yahoo=datos_personales.correos.yahoo*/

//forma 2 - Destructuring object
const { gmail,outlook,yahoo }=datos_personales.correos

console.log(`
    Gmail:${gmail}
    Outlook:${outlook}
    Yahoo:${yahoo}
`)

//consumo de API
async function consumir_api(){
    //Realiza por defecto una solicitud HTTP
    //a traves del metodo GET
    let publicaciones = await fetch ('https://jsonplaceholder.typicode.com/posts')

    let publicaciones_definitivas=await publicaciones.json()

    publicaciones_definitivas.forEach(element => {
        
        console.log(element.title)
    });
}

consumir_api()