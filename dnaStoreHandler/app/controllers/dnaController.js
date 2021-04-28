const dnaService = require('../../src/core/services/dnaService');
async function storeDNAController(data="") {
  try {
    const { uniqueSimiansMatch, uniqueHumanMatch } = JSON.parse(data);
    await Promise.all([
      dnaService.simianDnaService(uniqueSimiansMatch),
      dnaService.humanDnaService(uniqueHumanMatch)
    ]); 
  } catch (error) {
    console.log('storeDNAController error: ', error);
  }
}

module.exports.storeDNAController = storeDNAController;
