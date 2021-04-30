
const { queueParams } = require("../models/queueModel");
const { arrayGrouper } = require("../utils/matrixBuilder");
const SQS = require("../config/sqsConfig")();

async function queueToDNAStore(dnaResults = {}) {
  const groupedArrays = arrayGrouper(dnaResults);
  queueParams.MessageBody = JSON.stringify(groupedArrays);
  await SQS.sendMessage(queueParams).promise();
}

module.exports = {
  queueToDNAStore
};
