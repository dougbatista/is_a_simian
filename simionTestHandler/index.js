const simianController = require("./app/controllers/simianController");

exports.handler = async (event, _, callback) => {
  const { dna } = event;
  const { code, result } = await simianController.isASimianController(dna);
	const response = {
		statusCode: code,
		body: {
			isASimianDNA: result,
		},
	};
	if (code != 200) return callback(JSON.stringify(response), null);
  

	callback(null, response);
};
