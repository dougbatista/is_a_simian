const { AWS } = require("./awsConfig");

module.exports = () => new AWS.SQS({ apiVersion: process.env.SQS_API_VERSION });