 let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"
 let splittato = url.split('?')[1]
 let parametri = splittato.split('&')
 parametri.forEach(element => {
    let coppia = element.split('=')
    console.log(coppia[0] + ":" + coppia[1])
 });
