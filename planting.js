const validNeighbors = (pos, pot) => {
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    const output = [];

    dirs.forEach(dir => {
        const newPos = [pos[0] + dir[0], pos[1] + dir[1]];
        if (newPos.every(coord => coord >= 0 && coord < pot.length)) {
            if (pot[newPos[0]][newPos[1]] === 0) {
                output.push(newPos);
            }
        }
    })
    return output;
}  

const startingIdxs = (row) => {
    const indexes = [];
    for(let i = 0; i < row.length; i++) {
        if (row[i] === 0) {
            indexes.push(i);
        }
    }
    return indexes;
}

const traversePot = (position, pot) => {
    if ((position[0] === (pot.length -1)) && (position[1] === (pot.length - 1))) return true;
    const neighbors = validNeighbors(position, pot);
    pot[position[0]][position[1]] = 1;
    

    for (let index = 0; index < neighbors.length; index++) {
        const neighbor = neighbors[index];
        return traversePot(neighbor, pot)
    }

    return false
}

const solution = (pot) => {
    let startIdxs = startingIdxs(pot[0]);
    if (startIdxs.length === 0) return false;
    
    startIdxs = startIdxs.map(idx => [0, idx]);
    
    for (let index = 0; index < startIdxs.length; index++) {
        const position = startIdxs[index];
        if (traversePot(position, pot)) {
            return true;
        };
    }

    return false;
};


console.log(solution([[0,0],[1,1]]))