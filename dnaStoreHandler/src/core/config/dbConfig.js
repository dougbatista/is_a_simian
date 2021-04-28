const { AWS } = require("./awsConfig");
//TODO passar para a variável de ambiente:
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

module.exports.ddb = ddb;