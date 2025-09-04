let matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

let transposta = []

for (let c = 0; c < matriz[0].length; c++) { 
    transposta[c] = []                       
    for (let l = 0; l < matriz.length; l++) { 
        transposta[c][l] = matriz[l][c]      
    }
}

console.log(transposta)
