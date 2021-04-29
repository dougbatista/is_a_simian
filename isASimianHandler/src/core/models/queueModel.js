exports.queueParams = {
   DelaySeconds: 10,
   MessageAttributes: { },
   MessageBody: "",
   QueueUrl: process.env.SQS_URL
 };