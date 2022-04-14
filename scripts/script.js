

// // Pegar nome de usuário ao iniciar a nevagação
var pessoa = prompt('Nome de usuário ?')

var usuario = document.getElementById('usuario')

// usuario.innerHTML = `Olá, ${pessoa}, obrigado por utilizar nossos serviços`

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
    resultadocerveja.innerHTML = `${qtdcerveja / 1000} Litros de cervejas`
    resultadorefri.innerHTML = `${qtdbebidas / 1000} Litros de bebidas (aguá, refrigerantes)`

}

function carnePP(duracao){
    if(duracao >= 6) {
        return 650
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6) {
        return 2000
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6) {
        return 1500
    }else{
        return 1000;
    }
}