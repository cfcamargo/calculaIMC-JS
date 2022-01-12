const formIMC = document.querySelector('#imc')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
let imc

const modal = document.querySelector('#modal')
const modalButton = document.querySelector('#modal-button')

modalButton.addEventListener('click', () => {
  closeModal()
})

formIMC.addEventListener('submit', event => {
  event.preventDefault()

  if (peso.value != '' && altura.value != '') {
    calculaIMC(peso.value, altura.value)
  } else {
    const errorModal = document.querySelector('#modal-error')
    errorModal.classList.add('show')

    setTimeout(() => {
      errorModal.classList.remove('show')
    }, 3000)
  }

  limparCampos()
})

function calculaIMC(peso, altura) {
  resultado = peso / (altura * altura)
  imc = resultado

  atualizaDadosEmTela()
  modal.classList.add('show')
}

function atualizaDadosEmTela() {
  console.log(imc)
  const pResult = document.querySelector('#p-result')
  const pDescription = document.querySelector('#p-description')

  const mensagens = [
    'Você esta abaixo do peso, pecisa se alimentar',
    'Parabens ! seu peso esta normal',
    'Cuidado ! voce esta com sobrepeso',
    'Alerta ! , voce esta com grau de obesidade 1',
    'Alerta ! , voce esta com grau de obesidade 2',
    'Alerta ! , voce esta com grau de obesidade 3',
  ]

  pResult.innerHTML = `Seu IMC é : ${imc.toFixed(2)}`

  if (imc < 18.5) {
    pDescription.innerHTML = `${mensagens[0]}`

    pDescription.classList.remove('succes')
    pDescription.classList.remove('warning')

    pDescription.classList.add('warning')
  } else if ((imc >= 18, 5 && imc < 25)) {
    pDescription.innerHTML = `${mensagens[1]}`

    pDescription.classList.remove('danger')
    pDescription.classList.remove('warning')

    pDescription.classList.add('success')
  } else if (imc >= 25 && imc < 30) {
    pDescription.innerHTML = `${mensagens[2]}`

    pDescription.classList.remove('danger')
    pDescription.classList.remove('success')

    pDescription.classList.add('warning')
  } else if (imc >= 30 && imc < 35) {
    pDescription.innerHTML = `${mensagens[3]}`
    pDescription.classList.remove('success')
    pDescription.classList.remove('warning')
    pDescription.classList.add('danger')
  } else if (imc >= 35 && imc < 40) {
    pDescription.innerHTML = `${mensagens[4]}`

    pDescription.classList.remove('success')
    pDescription.classList.remove('warning')

    pDescription.classList.add('danger')
  } else {
    pDescription.innerHTML = `${mensagens[4]}`

    pDescription.classList.remove('success')
    pDescription.classList.remove('warning')

    pDescription.classList.add('danger')
  }
}

function limparCampos() {
  peso.value = ''
  altura.value = ''
}

function closeModal() {
  modal.classList.remove('show')
  limparCampos()
}
