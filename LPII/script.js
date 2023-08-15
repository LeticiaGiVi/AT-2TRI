const leia = require('prompt-sync')()
const MAX_SERVICOS_NO_CARRINHO = 10

const CODIGO = ["COD01", "COD02", "COD03"]
const SERVICO = [
    "doação para melhorar a infraestrutura para pessoas com deficiencia",
    "doação para distribuição de próteses",
    "doação para aulas de maternidade para pessoas com filhos com doenças mentais"
]
const VALORUNITARIODOACAO = [10.00, 20.00, 25.50]
const MOVIMENTO = [0, 0, 0]

function mostrarServicos() {
    console.log("Serviços disponíveis:")
    for (let i = 0; i < CODIGO.length; i++) {
        console.log(
            `${CODIGO[i]}. ${SERVICO[i]}, Valor: R$${VALORUNITARIODOACAO[i].toFixed(2)}`
        )
    }
}

function solicitarServico() {
    const codigo = leia("Insira o código do serviço que deseja solicitar: ").toUpperCase()
    const indexServico = CODIGO.indexOf(codigo)
    if (indexServico !== -1 && MOVIMENTO[indexServico] === 0) {
        console.log(`Serviço solicitado: ${SERVICO[indexServico]}`)
        MOVIMENTO[indexServico] = 1
        return VALORUNITARIODOACAO[indexServico]
    } else {
        console.log("Serviço indisponível ou já solicitado.")
        return 0
    }
}

function fazerCompras() {
    let valorTotalDoacao = 0
    let numServicosNoCarrinho = 0

    while (numServicosNoCarrinho < MAX_SERVICOS_NO_CARRINHO) {
        mostrarServicos()
        valorTotalDoacao += solicitarServico()
        numServicosNoCarrinho++

        if (numServicosNoCarrinho >= MAX_SERVICOS_NO_CARRINHO) {
            console.log(
                `Carrinho de compras cheio. Totalizando doação: R$${valorTotalDoacao.toFixed(2)}`
            )
            break
        }

        const continuar = leia("Deseja solicitar mais um serviço? (S/N) ").toUpperCase()
        if (continuar == "S") {
          
        }
        else{
            console.log(`Total de doação: R$${valorTotalDoacao.toFixed(2)}. Obrigado por contribuir com a ONG!`)
            break
        }
    
    }
}

console.log("Bem-vindo ao Site de Doações!")
const querFazerCompras = leia("Gostaria de fazer compras? (S/N) ").toUpperCase()
if (querFazerCompras == "S") {
    fazerCompras()
} else {
    console.log("Até breve!")
}
