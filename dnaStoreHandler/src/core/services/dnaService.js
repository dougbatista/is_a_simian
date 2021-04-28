const { insertData } = require("../repository/dynamoRepository");

async function simianDnaService(simianDNS = []) {
  try {
    for (const dna of simianDNS) {
      await insertData(dna, process.env.SIMIAN_TABLE);
    }
  } catch (error) {
    throw error;
  }
}

async function humanDnaService(humanDNAS = []) {
  try {
    for (const dna of humanDNAS) {
      await insertData(dna, process.env.HUMAN_TABLE);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  humanDnaService,
  simianDnaService
};
