const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION_APP });

module.exports.AWS = AWS;
