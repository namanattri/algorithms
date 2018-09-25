function solve() {
    let matrix = [];
    //initialize matrix 
    for(let i = 0; i < 8; i++) {
        matrix[i] = [];
        for(let j = 0; j < 8; j++) {
            matrix[i][j] = -1;
        }
    }
    
    print(matrix);
    
    //moves
    // let xCoordinates = [2, 2, 1, 1, -2, -2, -1, -1];
    // let yCoordinates = [1, -1, 2, -2, 1, -1, 2, -2];
    let xCoordinates = [2, 1, -1, -2, -2, -1,  1,  2];
    let yCoordinates = [1, 2,  2,  1, -1, -2, -2, -1];
    
    //initial move 0 at top left 0, 0
    let x = 0;
    let y = 0; 
    matrix[x][y] = 0; // 0: first move
    nextMove = 1; //as current move 0 is already done: the variable is passed to recursive function 
    
    if(solveKnightsTour(x, y, nextMove, matrix, xCoordinates, yCoordinates)) {
        print(matrix);
    } else {
        console.log('Solution Does not exist.');
    }
}

function solveKnightsTour(currentX, currentY, nextMove, matrix, xCoordinates, yCoordinates) {
    //console.log(nextMove);
    //print(matrix);
    //if last move has passed check nextMove == 64 i.e. more than last cell of 0 indexed 8 x 8 chess board
    if(nextMove == 8 * 8) return true;
    
    for(let k = 0; k < 8; k++) {
        let nextX = currentX + xCoordinates[k];
        let nextY = currentY + yCoordinates[k];
        
        if(canMove(nextX, nextY, matrix)) {
            matrix[nextX][nextY] = nextMove;
            
            //recursively call solveKnightsTour with nextMove incremented by 1 and current coordinates
            if(solveKnightsTour(nextX, nextY, nextMove + 1, matrix, xCoordinates, yCoordinates)) return true;
            else 
                matrix[nextX][nextY] = -1; //backtrack: try another coordinate
        }
    }
    return false;
}

function canMove(x, y, matrix) {
    //check if x and y coordinates lie on the board
    //then check if the cell has not been moved to yet
    return x >= 0 && x < 8 && y >= 0 && y < 8 && matrix[x][y] == -1;
}

function print(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

solve();
