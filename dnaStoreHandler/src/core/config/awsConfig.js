const AWS = require('aws-sdk');
//TODO passar para variável de ambiente
AWS.config.update({region: 'us-east-1'});

module.exports.AWS = AWS;