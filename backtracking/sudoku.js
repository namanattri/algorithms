function solve() {
    let matrix = [];
    
    //initialize matrix 
    for(let i = 0; i < 9; i++) {
        matrix[i] = [];
        for(let j = 0; j < 9; j++) {
            matrix[i][j] = 0;
        }
    }
    
    matrix = [
        [0, 0, 0, 0, 5, 0, 0, 0, 0],
        [0, 9, 3, 0, 0, 4, 0, 0, 0],
        [0, 5, 0, 9, 6, 1, 4, 0, 0],
        [0, 0, 2, 1, 0, 0, 9, 6, 0],
        [8, 0, 9, 0, 0, 0, 3, 0, 7],
        [0, 6, 1, 0, 0, 9, 8, 0, 0],
        [0, 0, 6, 2, 1, 7, 0, 3, 0],
        [0, 0, 0, 6, 0, 0, 1, 8, 0],
        [0, 0, 0, 0, 8, 0, 0, 0, 0],
    ];
    
    print(matrix);
}

function print(matrix) {
    for(let i = 0; i < 9; i++) {
        if(i%3 == 0) console.log("\n");
        console.log(matrix[i][0]+" "+matrix[i][1]+" "+matrix[i][2]+"\t"+matrix[i][3]+" "+matrix[i][4]+" "+matrix[i][5]+"\t"+matrix[i][6]+" "+matrix[i][7]+" "+matrix[i][8]);
    }
}

solve();
