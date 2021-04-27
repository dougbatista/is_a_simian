function matrixTransposer(matrix = []) {
  try {
    return matrix[0].map((_, i) => matrix.map((row) => row[i]));  
  } catch (error) {
    throw new Error(error.message);
  }
  
}

function matrixBuilder(array = []) {
  try {
    let matrix = [];
    for (let word of array) {
      matrix.push(word.split(""));
    }

    return matrix;
  } catch (error) {
    throw new Error(error.message);
  }
}

function arrayGrouper(horizontalResult={}, verticalResult={}, diagonalResult={}) {
  
}

module.exports = {
  matrixTransposer,
  matrixBuilder
}