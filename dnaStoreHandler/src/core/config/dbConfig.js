const { AWS } = require("./awsConfig");

const ddb = new AWS.DynamoDB({ apiVersion: process.env.DYNAMO_API_VERSION });

module.exports.ddb = ddb;
