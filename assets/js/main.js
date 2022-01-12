const formIMC = document.querySelector('#imc')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')

formIMC.addEventListener('submit', (event)=>{
    event.preventDefault()
    calculaIMC(peso.value, altura.value)
    limparCampos()
})






function calculaIMC(peso, altura){
    const resultado = peso / (altura * altura)
    return resultado
}

function limparCampos(){
    peso.value = ""
    altura.value = ""
}

