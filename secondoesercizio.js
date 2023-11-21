
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]


let listaFiltrata = listaProdotti.filter(utente => utente.prezzo > 250)

console.log (listaFiltrata)





function Filtra(lista, prezzoMinimo) {
    let listaFiltrata1 =[];

    for (let i = 0; i < listaProdotti.length; i++){
        if ( listaProdotti[i].prezzo > 250 )
        listaFiltrata1.push(listaProdotti[i])
     }


    return listaFiltrata1
    
}
let listaFiltrata1= Filtra(listaProdotti, 250)


console.log(listaFiltrata1)