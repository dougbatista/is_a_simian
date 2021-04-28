const simianController = require("./app/controllers/simianController");

exports.handler = async (event) => {
	console.log('EVENT ::: ', event);
  const { code, result } = await simianController.isASimianController();

  const response = {
    statusCode: code,
    body: result
  };

  return response;
};
