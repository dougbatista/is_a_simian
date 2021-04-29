const service = require("../../src/core/services/dnaStatsService");
const repository = require("../../src/core/repository/dynamoRepository");
const sinon = require("sinon");
const { expect } = require("chai");
const mock = require("../mocks/mock");

describe("function - statsDNAService", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });

  it("Should return the stats from data", async () => {
    const { DYNAMO_ARR_HUMAN, DYNAMO_ARR_SIMIAN } = mock;

    sinon
      .stub(repository, "getData")
      .onCall(0)
      .resolves(DYNAMO_ARR_HUMAN)
      .onCall(1)
      .resolves(DYNAMO_ARR_SIMIAN);

    const stats = await service.statsDNAService();
    expect(stats).to.have.all.keys(
      "count_mutant_dna",
      "count_human_dna",
      "ratio"
    );
  });

  it("Should return an error", async () => {
    try {
      const { DYNAMO_ARR_HUMAN } = mock;
      sinon
        .stub(repository, "getData")
        .onCall(0)
        .resolves(DYNAMO_ARR_HUMAN)
        .onCall(1)
        .rejects(new Error("Something wrong happened" ));

      await service.statsDNAService();
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});
