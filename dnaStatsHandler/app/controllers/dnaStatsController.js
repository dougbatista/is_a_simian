const service = require('../../src/core/services/dnaStatsService');

async function dnaStatsController() {
  try {
    return await service.statsDNAService();
  } catch (error) {
    throw error;
  }
}

module.exports.dnaStatsController = dnaStatsController;