const simianService = require("../../src/core/services/simianService");
const queueService = require("../../src/core/services/queueService");

async function isASimianController(dnas = []) {
  const statusResult = {};
  try {
    const isASimianResults = await simianService.isASimian(dnas);
    const {
      horizontalResult,
      verticalResult,
      diagonalResult
    } = isASimianResults;

    statusResult.result = [
      horizontalResult,
      verticalResult,
      diagonalResult
    ].some((obj) => obj.result == true);

    if(statusResult.result) 
      statusResult.code = 200;
    else
      statusResult.code = 403;

    queueService.queueToDNAStore(isASimianResults);

    return statusResult;
  } catch (error) {
    console.log("Controller error:", error);
    statusResult.code = 403;
    statusResult.result = false;
    return statusResult;
  }
}

module.exports.isASimianController = isASimianController;
