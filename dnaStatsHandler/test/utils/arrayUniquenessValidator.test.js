const utils = require("../../src/core/utils/arrayUniquenessValidator");
const { expect } = require("chai");
const mock = require("../mocks/mock");

describe("function - uniquenessValidator", () => {
  it("Should returns an array with unique elements", () => {
    const { DEFAULT_ARR, DYNAMO_ARR } = mock;
    const result = utils.uniquenessValidator(DYNAMO_ARR);
    expect(result).to.be.not.equals(DEFAULT_ARR);
  });

  it("Should returns an array with unique elements", () => {
    const { DEFAULT_ARR, DYNAMO_ARR } = mock;
    const result = utils.uniquenessValidator(DYNAMO_ARR);
    expect(result).to.be.not.equals(DEFAULT_ARR);
  });

  it("Should returns an error", () => {
    try {
      utils.uniquenessValidator(1);
    } catch (error) {
      expect(error).to.be.not.null;
    }    
  });
});
