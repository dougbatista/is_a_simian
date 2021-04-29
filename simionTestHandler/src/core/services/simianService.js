const {
    matrixValidator,
    matrixBuilder,
    matrixTransposer,
    searcher,
    diagonalsSearcher
  } = require('../utils');
  
  async function isASimianService(dnas = []) {
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
        diagonalResult
      ] = await Promise.all([horizontalSearch, verticalSearch, diagonalSearch]);

      console.log(
        `Horizontal: ${horizontalResult}; Vertical: ${verticalResult}; Diagonal: ${diagonalResult}`
      );
      return {
        horizontalResult,
        verticalResult,
        diagonalResult
      }
    } catch (error) {
      console.log('Service error: ', error);
      throw error;
    }
  };
  
  module.exports.isASimianService = isASimianService;