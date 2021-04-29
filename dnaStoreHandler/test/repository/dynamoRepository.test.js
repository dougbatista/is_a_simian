const repository = require("../../src/core/repository/dynamoRepository");
const dbConfig = require("../../src/core/config/dbConfig");
const mocks = require("../mocks/mock");
const sinon = require("sinon");
const { expect } = require("chai");

describe("function - insertData", () => {
  beforeEach(() => {
    sinon.restore();
    sinon.reset();
  });
  it("Should insert an item to dynamoDB", async () => {
    const { ddb } = dbConfig;
    sinon.stub(ddb, "putItem")
      .resolves({ status: "OK"});
    
    const result = await repository.insertData("CCCCAT", "");
    expect(result).to.have.all.keys('status');
  });

  it("Should not insert an item to dynamoDB and return an error", async () => {
    const { ddb } = dbConfig;
    sinon.stub(ddb, "putItem")
      .rejects({ stack: "Something wrong happened"});
    try {
      await repository.insertData("CCCCAT", "");  
    } catch (error) {
      expect(error).to.not.be.null;
    }
  });
});
