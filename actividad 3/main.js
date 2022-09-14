async function generar_tabla(){

    //lo que hace fetch es linkear/buscar la pagina de donde se van a sacar datos
    let monedas= await fetch ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    let datos=await monedas.json()

    let filas=[]
    //forEach es similar a fetch,ya que busca especificamente que tipo de dato mostrar,en este caso "symbol"
    datos.forEach(element => {
        let fila=`
            <tr>
                <td>${element.symbol}</td>
                <td>${element.name}</td>
                <td><img src="${element.image}" alt=" " style="width:4rem"</td>
                <td>${element.current_price}</td>
                <td>${element.total_volume}</td>
            </tr>
        `
        filas.push(fila)
    });
    document.getElementById("cuerpo").innerHTML=filas.join('')
}
generar_tabla()