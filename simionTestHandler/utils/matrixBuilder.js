function matrixTransposer(matrix = []) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

function matrixBuilder(array = []) {
  try {
    let matrix = [];
    for (let word of array) {
      matrix.push(word.split(""));
    }

    return matrix;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  matrixTransposer,
  matrixBuilder
}