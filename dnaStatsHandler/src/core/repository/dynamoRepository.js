const { ddb } = require("../config/dbConfig");
const { dbParams } = require("../models/dbParamsModels");

async function getData(tableName = "") {
  try {
    dbParams.TableName = tableName;
    const { Items } = await ddb.scan(dbParams).promise();
    return Items;
  } catch (error) {
    throw new Error(error.stack);
  }
}

module.exports.getData = getData;
