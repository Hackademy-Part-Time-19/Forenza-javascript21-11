
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


 listaProdotti.sort((a, b) => { 
    if (a.nome < b.nome)
    return -1;
    if (a.nome > b.nome)
    return 1;
    return 0;
   }
   )
console.log (listaProdotti)

listaProdotti.sort((a, b) =>  { 
    if (a.prezzo < b.prezzo)
    return -1;
    if (a.prezzo > b.prezzo)
    return 1;
    return 0;
   })
console.log(listaProdotti)

/*let listaNomi = (listaProdotti.map(utente => utente.nome))
listaNomi.sort()
console.log ("la lista dei nomi è " + listaNomi)


let listaPrezzo = (listaProdotti.map (utente => utente.prezzo))
listaPrezzo.sort((a, b) => a - b)
console.log ("La lista prezzi è " + listaPrezzo)*/