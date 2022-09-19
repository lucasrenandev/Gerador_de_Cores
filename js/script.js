// Criando DIVS de forma dinâmica
for(let i = 1; i <= 30; i ++) {
    const box = document.createElement("div")
    box.classList.add("box")
    document.querySelector("#sectionContainer").appendChild(box)
}
// Selecionando todas as DIVS criadas
const colorsBox = document.querySelectorAll(".box")

// Selecionando o botão 
const button = document.querySelector("#button")

// Adicionando evento de clique no botão + função
button.addEventListener("click", generateColors)

// Função para gerar as cores
function generateColors() {
    colorsBox.forEach(color => {
        const newColor = hexaColorCodigo()
        color.style.background = newColor
        color.innerHTML = newColor
    })
}

// Função para gerar sistema Hexadecimal + Cor aleatória
function hexaColorCodigo() {
    const characters = "123456789abcdef"
    const maxCharacters = 6
    let color = ""

    for(let i = 0; i < maxCharacters; i ++) {
        let colorRandom = Math.floor(Math.random() * characters.length)
        color += characters.substring(colorRandom, colorRandom + 1)
    }
    return "#" + color
}