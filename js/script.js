// Seleção de elementos
const passwordOne = document.querySelector("#pass-one")
const passwordTwo = document.querySelector("#pass-two")

// Funções
const randomize = () => {
    const characters = [
        "A","B","C",
        "D","E","F",
        "G","H","I",
        "J","K","L",
        "M","N","O",
        "P","Q","R",
        "S","T","U",
        "V","W","X",
        "Y","Z","a",
        "b","c","d",
        "e","f","g",
        "h","i","j",
        "k","l","m",
        "n","o","p",
        "q","r","s",
        "t","u","v",
        "w","x","y",
        "z","0","1",
        "2","3","4",
        "5","6","7",
        "8","9","#",
        "*","_","-"
    ];

    let characterTable1 = []
    let characterTable2 = []

    for (let i = 1; i < 8; i++) {
        characterTable1.push(characters[Math.floor(Math.random() * characters.length)])
        characterTable2.push(characters[Math.floor(Math.random() * characters.length)])

}
passwordOne.innerText = characterTable1.join("")
passwordTwo.innerText = characterTable2.join("")

}

// Eventos
const btn = document.querySelector("#rando-btn")

btn.addEventListener("click", randomize)
