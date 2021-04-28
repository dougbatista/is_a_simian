exports.queueParams = {
    // Remove DelaySeconds parameter and value for FIFO queues
   DelaySeconds: 10,
   MessageAttributes: { },
   MessageBody: "",
   QueueUrl: "https://sqs.us-east-1.amazonaws.com/739303625657/dnaQueue" //TODO colocar na variável de ambiente do lambda
 };