let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,8,7,6],
    [5,4,3,2]
]
let l = 0
let c = 0

for (l = 0; l < 4; l++) {
    for (c = 0; c < 4; c++) {
        if (c == l) {
            console.log(matriz[c][l])
        }
    }
}