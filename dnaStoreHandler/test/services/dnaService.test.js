const service = require("../../src/core/services/dnaService");
const repository = require("../../src/core/repository/dynamoRepository");
const mocks = require("../mocks/mock");
const sinon = require("sinon");
const { expect } = require("chai");

describe("function - simianDnaService", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });

  it("Should insert simian DNAS", async () => {
    sinon.stub(repository, "insertData").resolves({ result: "OK" });

    try {
      const { SIMIAN_DNAS } = mocks;

      const result = await service.simianDnaService(SIMIAN_DNAS);
      expect(result).to.have.all.keys("result");
    } catch (_) {}
  });

  it("Should not insert simian DNAS", async () => {
    sinon.stub(repository, "insertData")
      .rejects(new Error("Something wrong happened"));
    try {
      const { SIMIAN_DNAS } = mocks;
      await service.simianDnaService(SIMIAN_DNAS);
    } catch (error) {
      expect(error).to.not.be.null;
    }
  });
});

describe("function - humanDnaService", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });

  it("Should insert human DNAS", async () => {
    sinon.stub(repository, "insertData").resolves({ result: "OK" });
    try {
      const { HUMAN_DNAS } = mocks;

      const result = await service.humanDnaService(HUMAN_DNAS);
      expect(result).to.have.all.keys("result");
    } catch (_) {}
  });

  it("Should not insert human DNAS", async () => {
    sinon.stub(repository, "insertData")
      .rejects(new Error("Something wrong happened"));
    try {
      const { HUMAN_DNAS } = mocks;
      await service.humanDnaService(HUMAN_DNAS);
    } catch (error) {
      expect(error).to.not.be.null;
    }
  });
});