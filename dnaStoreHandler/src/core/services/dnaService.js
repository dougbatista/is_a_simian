const { insertData } = require("../repository/dynamoRepository");

async function simianDnaService(simianDNS = []) {
  try {
    for (const dna of simianDNS) {
      //TODO passar para variável de ambiente
      await insertData(dna, "dnaSimian");
    }
  } catch (error) {
    throw error;
  }
}

async function humanDnaService(humanDNAS = []) {
  try {
    for (const dna of humanDNAS) {
      //TODO passar para variável de ambiente
      await insertData(dna, "dnaHuman");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  humanDnaService,
  simianDnaService
};
