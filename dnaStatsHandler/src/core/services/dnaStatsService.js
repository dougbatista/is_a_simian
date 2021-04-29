const repository = require("../repository/dynamoRepository");
const validator = require("../utils/arrayUniquenessValidator");
const helper = require("../helpers/statusHelper");

async function statsDNAService() {
  try {
    
    const [humanResult, simianResult] = await Promise.all([
      repository.getData(process.env.HUMAN_TABLE),
      repository.getData(process.env.SIMIAN_TABLE)
    ]);

    const amountHumanResultDNA = validator.uniquenessValidator(humanResult);
    const amountSimianResultDNA = validator.uniquenessValidator(simianResult);

    const count_mutant_dna = helper.amountDNA(amountSimianResultDNA);
    const count_human_dna = helper.amountDNA(amountHumanResultDNA);
    const ratio = helper.getRatio(count_mutant_dna, count_human_dna);

    return { count_mutant_dna, count_human_dna, ratio };
  } catch (error) {
    throw error;
  }
}

module.exports.statsDNAService = statsDNAService;
