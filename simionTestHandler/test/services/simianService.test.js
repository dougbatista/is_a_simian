const { expect } = require("chai");
const sinon = require("sinon");
const results = require("../mocks/mock");
const service = require("../../src/core/services/simianService");
const utils = require("../../src/core/utils/searchers");

describe("function - isASimianService", () => {
  beforeEach(() => {
    sinon.restore();
    sinon.reset();
  });

  it("Should return the result from matrixes", async () => {
    const { DEFAULT_ARR } = results;
    const result = await service.isASimianService(DEFAULT_ARR);

    expect(result).to.have.all.keys(
      "horizontalResult",
      "verticalResult",
      "diagonalResult"
    );
  });
});
