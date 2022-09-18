// Adicionando DIVS de forma dinâmica
for(let i = 1; i <= 30; i ++) {
    const box = document.createElement("div")
    box.classList.add("box")
    document.querySelector("#sectionContainer").appendChild(box)
}
// Selecionado todas as DIVS adicionadas
const colorsBox = document.querySelectorAll(".box")

// Selecionado o botão 
const button = document.querySelector("#button")

// Adicionando evento de clique no botão + função
button.addEventListener("click", generateColors)

// Função para gerar as cores
function generateColors() {
    colorsBox.forEach(colors => {
        const newColor = hexaColorCodigo()
        colors.style.background = newColor
        colors.innerHTML = newColor
    })
}

// Função para gerar sistema Hexadecimal + Cor aleatória
function hexaColorCodigo() {
    const characters = "123456789ABCDEF"
    const maxCharacters = 6
    let color = ""

    for(let i = 0; i < maxCharacters; i ++) {
        let corAleatoria = Math.floor(Math.random() * characters.length)
        color += characters.substring(corAleatoria, corAleatoria + 1)
    }
    return "#" + color
}