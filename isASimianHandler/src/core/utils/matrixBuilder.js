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

function arrayGrouper({horizontalResult, verticalResult, diagonalResult}) {
  try {
    const {
      simianSequencesMatches: simianHor,
      humanSequencesMatches: humanHor
    } = horizontalResult;

    const {
      simianSequencesMatches: simianVer,
      humanSequencesMatches: humanVer
    } = verticalResult;
    const {
      simianSequencesMatches: simianDiag,
      humanSequencesMatches: humamDiag
    } = diagonalResult;

    const simiansAllMatch = [...simianHor, ...simianVer, ...simianDiag];
    const humansAllMatch = [...humanHor, ...humanVer, ...humamDiag];
    
    const uniqueSimiansMatch = uniqueElements(simiansAllMatch);
    const uniqueHumanMatch = uniqueElements(humansAllMatch);

    return { uniqueSimiansMatch, uniqueHumanMatch };
  } catch (error) {
    throw new Error(error.stack);
  }
}

function uniqueElements(array = []) {
  return [...new Set(array)];
}

module.exports = {
  matrixTransposer,
  matrixBuilder,
  arrayGrouper,
  uniqueElements
};
