const { AWS } = require('../config/awsConfig');
const { queueParams } = require('../models/queueModel');

//TODO variável de ambiente no lambda
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const { arrayGrouper } = require('../utils/matrixBuilder')

function queueToDNAStore(dnaResults={}) {

  const groupedArrays= arrayGrouper(dnaResults);
  queueParams.MessageBody = JSON.stringify(groupedArrays);
  
  sqs.sendMessage(queueParams, function(err, data) {
    if (err) {
      console.log("Queue post error", err);
    } else {
      console.log("Success Queue", data.MessageId);
    }
  });
}

module.exports = {
  queueToDNAStore
}