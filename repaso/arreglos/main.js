
let helados= ['Banana Split','Menta Granizada','Cereza','Dulce de Leche','Maracuya','Vainilla','Frutos Rojos','Pistacho']


//como obtener la longitud de un arreglo
let longitud=helados.length
console.log('longitud '+longitud)

//como obtener el ultimo elemento de un arreglo
let ultimo=helados[longitud-1]
console.log('ultimo elemento '+ultimo)

//como agrego un elemento al final del arreglo
helados.push('Crema rusa')
//console.log(helados)

//eliminar el ultimo elemento de un arreglo
helados.pop
//console.log(helados)

//como agrego un elemento al inicio de un arreglo
helados.unshift('Marroc') 
//console.log(helados)

//como eliminar el primer elemento de un arreglo
helados.shift('Marroc')
//console.log(helados)

//como obtener el indice(posicion) de un elemento
let indice_cereza=helados.indexOf('Cereza')
console.log('Indice de cereza: '+indice_cereza)
//console.log(helados[indice_cereza])

//eliminando un elemento conociendo su indice
helados.splice(indice_cereza,1)
console.log(helados)

//como agrego mas de un elemento dentro de un arreglo
helados.splice(1,0,'Dulce de Leche')
console.log(helados)

























/*
//let helados= ['Banana Split','Menta Granizada','Cereza','Dulce de Leche','Maracuya','Vainilla','Frunos Rojos','Pistacho']
let helados= ['Banana Squirt','Pasta de dientes','Cerveza','Dulce Leche','Estatuya','Tetilla','Brunos Rojos','Pinocho']


//como obtener la longitud de un arreglo
let longitud=helados.length
console.log('longitud '+longitud)

//como obtener el ultimo elemento de un arreglo
let ultimo=helados[longitud-1]
console.log('ultimo elemento '+ultimo)

//como agrego un elemento al final del arreglo
//helados.push('Crema rusa')
helados.push('Teta rusa')

//eliminar el ultimo elemento de un arreglo
helados.pop

//como agrego un elemento al inicio de un arreglo
//helados.unshift('Marroc') 
helados.unshift('Barro')

//como eliminar el primer elemento de un arreglo
helados.shift('Barro')
console.log(helados)

//como obtener el indice(posicion) de un elemento
let indice_cerveza=helados.indexOf(Cerveza)
console.log('Indice de cereza :'+indice_cerveza)
console.log(helados[indice_cerveza])
*/