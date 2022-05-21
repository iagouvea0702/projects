const campo = document.querySelector(".entrada")
let digitado = []
const operacoes = ['/', '*', '-', '+', '.']
const parenteses = ['(', ')']


const valor = (dado) => {
        digitado.push(dado)
        if(operacoes.includes(digitado[digitado.length - 2]) == true && operacoes.includes(digitado[digitado.length - 1]) == true){
            console.log('Operação inválida!')
            return digitado.pop()   
        }else{
            if(parenteses.includes(digitado[digitado.length - 2]) == true && parenteses.includes(digitado[digitado.length-1]) == true){
                console.log('Parâmetro inválido')
            } else{
                return campo.value += dado  
            }
        }
}

const apagar = () => {
    digitado = []
    return campo.value = ""
}

const calcular = () => {
    resultado = eval(campo.value)
    return campo.value = resultado
}

const remover = () => {
    digitado.pop()
    return campo.value = campo.value.slice(0, -1)
}