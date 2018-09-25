function solve() {
    let matrix = [];
    
    //initialize matrix 
    for(let i = 0; i < 9; i++) {
        matrix[i] = [];
        for(let j = 0; j < 9; j++) {
            matrix[i][j] = 0;
        }
    }
    
    matrix = [ //difficulty: medium
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
    
    matrix = [ //difficulty: hard
        [0, 0, 0, 9, 0, 4, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [7, 9, 0, 5, 0, 6, 0, 8, 1],
        [6, 0, 0, 0, 0, 0, 0, 0, 3],
        [1, 0, 0, 3, 5, 7, 0, 0, 6],
        [0, 2, 0, 0, 9, 0, 0, 5, 0],
        [9, 0, 7, 2, 0, 8, 4, 0, 5],
        [0, 6, 0, 4, 0, 5, 0, 3, 0],
        [0, 0, 0, 0, 6, 0, 0, 0, 0],
    ];
    
    matrix = [ //difficulty: expert
        [9, 0, 0, 7, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 3, 0],
        [0, 0, 2, 0, 4, 0, 0, 0, 6],
        [8, 0, 0, 2, 0, 0, 0, 9, 0],
        [0, 4, 0, 0, 3, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 6, 0, 0, 0],
        [0, 3, 0, 0, 9, 0, 0, 7, 0],
        [0, 0, 6, 0, 0, 8, 2, 0, 0],
        [1, 0, 0, 5, 0, 0, 0, 0, 0],
    ];
    
    console.log("Problem: ");
    print(matrix);
    
    if(solveSudoku(matrix)) {    
        console.log("Solution: ");
        print(matrix);
    } else {
        console.log("No solution exists.");
    }
}

function solveSudoku(matrix) {
    //print(matrix);
    let [x,y] = getUnassignedLocation(matrix);
    
    if(x == null && y == null) return true; //sudoku is solved
    
    for(let num = 1; num <= 9; num++) {
        if(canAssign(x, y, num, matrix)) {
            //assign the number for now - correct with backtracking later
            matrix[x][y] = num;
            
            if(solveSudoku(matrix)) return true;
            
            //sudoku not solved unassign number and try new num iteration
            matrix[x][y] = 0;
        } //try next iteration
    }
    
    return false;
}

function getUnassignedLocation(matrix) {
    for(i = 0; i < 9; i++)
        for(j = 0; j < 9; j++)
            if(matrix[i][j] === 0) return [i, j];
        
    return [null, null];
}

function canAssign(i, j, num, matrix) {
    return notInRow(i, j, num, matrix) && notInColumn(i, j, num, matrix) && notIn3X3(i, j, num, matrix);
}

function notInRow(i, j, num, matrix) {
    return matrix[i].indexOf(num) === -1
}

function notInColumn(i, j, num, matrix) {
    return matrix.map(function(row) { return row[j]; }).indexOf(num) === -1
}

function notIn3X3(i, j, num, matrix) {
    //define 3X3 edges for each cell
    let iStarts3X3 = {0:0, 1:0, 2:0, 3:3, 4:3, 5:3, 6:6, 7:6, 8:6};
    let jStarts3X3 = {0:0, 1:0, 2:0, 3:3, 4:3, 5:3, 6:6, 7:6, 8:6};
    //find position in 3X3 Matrix
    let arr3X3 = [];
    for(let x = iStarts3X3[i]; x < iStarts3X3[i]+3; x++) {
        for(let y = jStarts3X3[j]; y < jStarts3X3[j]+3; y++) {
            arr3X3.push(matrix[x][y]);
        }        
    }
    return arr3X3.indexOf(num) === -1
}

function print(matrix) {
    for(let i = 0; i < 9; i++) {
        if(i%3 == 0) console.log("\n");
        console.log(matrix[i][0]+" "+matrix[i][1]+" "+matrix[i][2]+"\t"+matrix[i][3]+" "+matrix[i][4]+" "+matrix[i][5]+"\t"+matrix[i][6]+" "+matrix[i][7]+" "+matrix[i][8]);
    }
}

solve();
