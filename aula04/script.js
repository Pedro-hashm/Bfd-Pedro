function verTabuada() {
    
    try {
        let numero = parseFloat(document.getElementById('numero').value)
    } catch (erro) {
        console.error('ocorreu o erro: ' + erro.message)
    }

    for (let i = 1; i <= 10; i++) {
        alert(`${numero} x ${i} = ${numero * i}`)
    }

}