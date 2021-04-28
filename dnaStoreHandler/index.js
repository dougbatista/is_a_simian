const dnaStoreController = require("./app/controllers/dnaController");

exports.handler = async (event) => {
  
  for (const { messageId, body } of event.Records) {
    console.log("SQS message %s: %j", messageId, body);
    await dnaStoreController.storeDNAController(body);
  }

  console.log(`Successfully processed ${event.Records.length} messages.`); 
};
