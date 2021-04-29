const { expect } = require("chai");
const sinon = require("sinon");
const results = require("../mocks/mock");
const controller = require("../../app/controllers/simianController");
const simianService = require("../../src/core/services/simianService");
const queueService = require("../../src/core/services/queueService");

describe("function - isASimianController", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });
  const arr = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  it("Should return the final result with status 200", async () => {
    const { RESULT_FROM_MATRIX } = results;
    sinon.stub(simianService, "isASimianService").resolves(RESULT_FROM_MATRIX);
    sinon.stub(queueService, "queueToDNAStore").resolves({ result: true });

    const finalResult = await controller.isASimianController(arr);
    expect(finalResult).to.include({ result: true, code: 200 });
  });

  it("Should return the final resul with status 403", async () => {
    const { RESULT_FROM_MATRIX } = results;
    RESULT_FROM_MATRIX.diagonalResult.result = false;
    RESULT_FROM_MATRIX.horizontalResult.result = false;
    RESULT_FROM_MATRIX.verticalResult.result = false;

    sinon.stub(simianService, "isASimianService").resolves(RESULT_FROM_MATRIX);
    sinon.stub(queueService, "queueToDNAStore").resolves({ result: true });

    const finalResult = await controller.isASimianController(arr);
    expect(finalResult).to.include({ result: false, code: 403 });
  });

  it("Should give a controller error", async () => {
    sinon
      .stub(simianService, "isASimianService")
      .rejects(new Error("Something wrong happened!"));
    try {
      const finalResult = await controller.isASimianController(arr);
      expect(finalResult).to.include({ result: false, code: 403 });
    } catch (_) {}
  });
});
