

// // Pegar nome de usuário ao iniciar a nevagação
var pessoa = prompt('Nome de usuário ?')

var usuario = document.getElementById('usuario')



let inputadultos = document.getElementById('adultos')
let inputcriancas = document.getElementById('criancas')
let inputduracao = document.getElementById('duracao')

let resultadocarne = document.getElementById('carnes')
let resultadocerveja = document.getElementById('cerva')
let resultadorefri = document.getElementById('refri')

function calcular() {

    console.log('calculando....')
    let adultos = inputadultos.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value

    let qtdcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qtdcerveja = cervejaPP(duracao) * adultos
    let qtdbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    usuario.innerHTML = `Olá, ${pessoa}, obrigado por utilizar nossos serviços <br> <p>Para o seu churrasco irá precisar de: </p>`
    resultadocarne.innerHTML = `${qtdcarne / 1000} kg de carnes`
    resultadocerveja.innerHTML = `${Math.ceil(qtdcerveja / 335)} Latas de cervejas`
    resultadorefri.innerHTML = `${qtdbebidas / 2000} Litros de bebidas (aguá, refrigerantes)`

}

// foi criado 3 funções para lidar com, carne, cerveja, e bebidas

function carnePP(duracao) { // se a duração for maior que 6 horas, aumentar para 650 gramas de carne
    if (duracao >= 6) {
        return 650
    } else {
        return 400; // ou se a duração for menos que 6 horas, será de 400 gramas
    }
}

function cervejaPP(duracao) {   // se a duração for maior que 6 horas, aumentar para 2000
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200;  // se a duração for menor que 6 horas, manter 12000
    }
}

function bebidasPP(duracao) {  // se a duração for maior que 6 horas, aumentar para 650 gramas de carne
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000;  // se a duração for menor que 6 horas, manter 1000
    }
}
