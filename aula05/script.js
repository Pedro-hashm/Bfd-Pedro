function getNotas() {

    let col1 = document.getElementById('col1')
    let liA1 = col1.children

    let col2 = document.getElementById('col2')
    let liA2 = col2.children

    let col3 = document.getElementById('col3')
    let liA3 = col3.children

    let notasA1 = []
    for (let i = 0; i < liA1.length; i++) {
       notasA1.push(parseFloat(liA1[i].innerText))
    }

    let notasA2 = []
    for (let i = 0; i < liA2.length; i++) {
       notasA2.push(parseFloat(liA2[i].innerText))
    }

    let notasA3 = []
    for (let i = 0; i < liA3.length; i++) {
       notasA3.push(parseFloat(liA3[i].innerText))
    }

    notas = [
        notasA1,
        notasA2,
        notasA3
    ]

    let l = 0
    let soma1 = 0
    let soma2 = 0
    let soma3 = 0
    let status1 = ''
    let status2 = ''
    let status3 = ''
    
    for (let j = 0; j < notas[l].length; j++) {
        soma1 += notas[j][l]
    } 

    l = 1

    for (let j = 0; j < notas[l].length; j++) {
        soma2 += notas[j][l]
    }

    l = 2

    for (let j = 0; j < notas[l].length; j++) {
        soma3 += notas[j][l]
    }

    if (soma1/3 < 7) {
        status1 = 'red'
    } else {
        status1 = 'green'
    }

    if (soma2/3 < 7) {
        status2 = 'red'
    } else {
        status2 = 'green'
    }

    if (soma3/3 < 7) {
        status3 = 'red'
    } else {
        status3 = 'green'
    }

    result = document.getElementById('result')
    result.innerHTML = `<p id=${status1}>Aluno 1: ${soma1/3}</p> <p id=${status2}>Aluno 2: ${soma2/3}</p><p id=${status3}>Aluno 3: ${soma3/3}</p>`
    

}