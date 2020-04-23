const validNeighbors = (pos, pot, numRows, numCols) => {
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    const output = [];

    dirs.forEach(dir => {
        const newPos = [pos[0] + dir[0], pos[1] + dir[1]];
        if ((newPos[0] >= 0 && newPos[0] < numRows) && (newPos[1] >= 0 && newPos[1] < numCols)) {
            if (pot[newPos[0]][newPos[1]] === 1) {
                output.push(newPos);
            }
        }
    })
    return output;
}  

const traverseOffice = (officePos, grid, numRows, numCols) => {
    const neighbors = validNeighbors(officePos, grid, numRows, numCols);
    
    grid[officePos[0]][officePos[1]] = 0;
    
    for (let index = 0; index < neighbors.length; index++) {
        const neighbor = neighbors[index];
        traverseOffice(neighbor, grid, numRows, numCols)
    }

    return grid;
}

const numOffices = (grid) => {
    let numOffices = 0;
    const numRows = grid.length;
    const numCols = grid[0].length;

    for (let x = 0; x < numRows; x++) {
        for (let y = 0; y < numCols; y++) {
            const officePos = [x, y];
            if (grid[x][y] === 1) {                
                numOffices += 1;
                grid = traverseOffice(officePos, grid, numRows, numCols);
            }
        }        
    }
        

    return numOffices;
};

console.log(numOffices([[1,1,1,1,1],
                        [1,0,0,0,1],
                        [1,0,0,0,0],
                        [1,1,1,0,1]]))