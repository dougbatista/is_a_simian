const { ddb } = require("../config/dbConfig");
const { dbParams } = require("../models/dbParamsModels");

async function insertData(data = "", table = "") {
  try {
    dbParams.TableName = table;
    dbParams.Item.dna.S = data;
    dbParams.Item.id.N = `${+new Date()}`;
    return await ddb.putItem(dbParams).promise();
  } catch (error) {
    throw new Error(error.stack);
  }
}

module.exports.insertData = insertData;
