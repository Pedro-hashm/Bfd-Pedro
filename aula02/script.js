function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem')
    let nome = 'pedro'
    let hobby = 'desenvolver aplicações'
    mensagem.textContent = `oi meu nome é ${nome}, e eu gosto de ${hobby}`
    alert('alerta')
}