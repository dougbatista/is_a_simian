const simianService = require("../../src/core/services/simianService");
const queueService = require("../../src/core/services/queueService");

async function isASimianController(dnas = []) {
  const statusResult = {};
  try {
    const {
      horizontalResult,
      verticalResult,
      diagonalResult
    } = await simianService.isASimian(dnas);

    statusResult.code = 200;
    statusResult.result = [
      horizontalResult,
      verticalResult,
      diagonalResult
    ].some((obj) => obj.result == true);
    
    return statusResult;
  } catch (error) {
    console.log('Controller error:', error);
    statusResult.code = 403;
    statusResult.result = false;
  }
}

module.exports.isASimianController = isASimianController;
