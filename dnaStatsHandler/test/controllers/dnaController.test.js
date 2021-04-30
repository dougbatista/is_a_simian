const service = require("../../src/core/services/dnaStatsService");
const controller = require("../../app/controllers/dnaStatsController");
const sinon = require("sinon");
const mocks = require("../mocks/mock");
const { expect } = require("chai");

describe("function - dnaStatsController", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });

  it("Should return the DNA status", async () => {
    const { DNA_STATUS } = mocks;

    sinon.stub(service, "statsDNAService").resolves(DNA_STATUS);

    const status = await controller.dnaStatsController();

    expect(status).to.have.all.keys(
      "count_mutant_dna",
      "count_human_dna",
      "ratio"
    );
  });

  it("Should return an error", async () => {
    sinon
      .stub(service, "statsDNAService")
      .rejects(new Error("Something wrong happened"));

    try {
      await controller.dnaStatsController();
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});
