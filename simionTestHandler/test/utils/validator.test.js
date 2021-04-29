const validatorUtils = require("../../src/core/utils/validators");
const maxtrixBuilderUtils = require("../../src/core/utils/matrixBuilder");

const { expect } = require("chai");

describe("function - dnaMatching", () => {
  it("shoud validate string with regex", () => {
    const result = validatorUtils.dnaMatching("CCCCTA");
    expect(result).to.be.not.empty;
  });
});

describe("function - matrixValidator", () => {
  it("is it square matrix ? - true", () => {
    const arr = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "CCCCTA"];
    const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
    const matrixValidation = validatorUtils.matrixValidator(buildedMatrix);

    expect(matrixValidation).to.be.true;
  });

  it("is it square matrix ? - false", () => {
    const arr = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "CCCCTAA"];

    const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
    const matrixValidation = validatorUtils.matrixValidator(buildedMatrix);

    expect(matrixValidation).to.be.false;
  });
});

describe("function - stringGetter", () => {
  it("should join the array and get the strings", () => {
    const arr = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "CCCCTAA"];
    const strings = validatorUtils.stringGetter(arr);
    expect(strings).to.be.a('string');
  });
});
