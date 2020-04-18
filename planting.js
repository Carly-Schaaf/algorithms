// const validNeighbors = (pos, pot) => {
//     const dirs = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1]
//     ]

//     const output = [];

//     dirs.forEach(dir => {
//         const newPos = [pos[0] + dir[0], pos[1] + dir[1]];
//         if (newPos.every(coord => coord >= 0 && coord < pot.length)) {
//             if (pot[newPos[0]][newPos[1]] === 0) {
//                 output.push(newPos);
//             }
//         }
//     })
//     return output;
// }  

// const traverseMaze = (maze, startPos, destPos) => {
//     if ((startPos[0] === destPos[0]) && (startPos[1] === destPos[1])) return true;

//     const neighbors = validNeighbors(startPos, maze);
//     maze[startPos[0]][startPos[1]] = 1;

//     for (let index = 0; index < neighbors.length; index++) {
//         const neighbor = neighbors[index];
//         return traverseMaze(maze, neighbor, destPos)
//     }

//     return false
// }

// const solution = (maze, startRow, startCol, destRow, destCol) => {
//     const startPos = [startRow, startCol];
//     const destPos = [destRow, destCol];
//     return traverseMaze(maze, startPos, destPos)
// };


// console.log(solution([[0,0],[1,0]], 0, 0, 1, 1))
// const validNeighbors = (pos, pot) => {
//     const dirs = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1]
//     ]

//     const output = [];

//     dirs.forEach(dir => {
//         const newPos = [pos[0] + dir[0], pos[1] + dir[1]];
//         if (newPos.every(coord => coord >= 0 && coord < pot.length)) {
//             if (pot[newPos[0]][newPos[1]] === 0) {
//                 output.push(newPos);
//             }
//         }
//     })
//     return output;
// }  

// const startingIdxs = (row) => {
//     const indexes = [];
//     for(let i = 0; i < row.length; i++) {
//         if (row[i] === 0) {
//             indexes.push(i);
//         }
//     }
//     return indexes;
// }

// const traversePot = (position, pot) => {
//     if ((position[0] === (pot.length -1)) && (position[1] === (pot.length - 1))) return true;
//     const neighbors = validNeighbors(position, pot);
//     pot[position[0]][position[1]] = 1;
    

//     for (let index = 0; index < neighbors.length; index++) {
//         const neighbor = neighbors[index];
//         return traversePot(neighbor, pot)
//     }

//     return false
// }

// const solution = (pot) => {
//     let startIdxs = startingIdxs(pot[0]);
//     if (startIdxs.length === 0) return false;
    
//     startIdxs = startIdxs.map(idx => [0, idx]);
    
//     for (let index = 0; index < startIdxs.length; index++) {
//         const position = startIdxs[index];
//         if (traversePot(position, pot)) {
//             return true;
//         };
//     }

//     return false;
// };


// console.log(solution([[0,0],[1,1]]))

const solution = (array) => {
    function merge(left, right) {
      const merged = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          merged.push(left[i]);
          i++;
        } else {
          merged.push(right[j]);
          j++;
        }
      }
      

      if (i === left.length) {
          return merged.concat(right.slice(j));
      } else {
          return merged.concat(left.slice(i));
      }

    }

    function mergeSort(array) {
      if (array.length <= 1) {
        return array;
      }

      const middleIndex = Math.floor(array.length / 2);

      const left = array.slice(0, middleIndex);
      const right = array.slice(middleIndex);
    
      return merge(mergeSort(left), mergeSort(right));
    }
    
    return mergeSort(array);
};


console.log(solution([9,6,7,4,7,2,2,4,2,3,7,7]))