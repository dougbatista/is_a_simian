const { AWS } = require("./awsConfig");

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

module.exports.ddb = ddb;
