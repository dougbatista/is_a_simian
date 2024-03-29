const controller = require("./app/controllers/dnaStatsController");
const { statusResponse } = require("./src/core/models/responseModel");

exports.handler = async (event, _, callback) => {
  try {
    const statsResult = await controller.dnaStatsController();
    statusResponse.body = { ...statsResult };
    statusResponse.statusCode = 200;

    callback(null, statusResponse);
  } catch (error) {
    statusResponse.statusCode = 500;
    statusResponse.body = { error };

    callback(JSON.stringify(statusResponse), null);
  }
};
