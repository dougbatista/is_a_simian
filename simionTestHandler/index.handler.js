const {
  matrixValidator,
  matrixBuilder,
  matrixTransposer,
  searcher,
  diagonalsSearcher
} = require('./utils');

const handler = async function (dnas = []) {
  try {
    if (!matrixValidator(dnas)) return false;

    const matrix = matrixBuilder(dnas);
    const matrixToTranspose = JSON.parse(JSON.stringify(matrix));
    const transposedMatrix = matrixTransposer(matrixToTranspose);

    const horizontalSearch = searcher(matrix);
    const verticalSearch = searcher(transposedMatrix);
    const diagonalSearch = diagonalsSearcher(matrix);

    const [
      horizontalResult,
      verticalResult,
      diagonalResult,
    ] = await Promise.all([horizontalSearch, verticalSearch, diagonalSearch]);
    console.log(
      `Horizontal: ${horizontalResult}; Vertical: ${verticalResult}; Diagonal: ${diagonalResult}`
    );
    return [horizontalResult, verticalResult, diagonalResult].some(
      (result) => result == true
    );
  } catch (error) {
    console.log('Handler error: ', error);
    return false;
  }
};

module.exports.handler = handler;