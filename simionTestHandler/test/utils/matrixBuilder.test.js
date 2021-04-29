const maxtrixBuilderUtils = require("../../src/core/utils/matrixBuilder");
const { expect } = require("chai");

const arr = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "CCCCTA"];

describe("function - matrixTransposer", () => {
  it("Should transpose a matrix", () => {
    const matrixResult = maxtrixBuilderUtils.matrixBuilder(arr);
    const transposedMatrix = maxtrixBuilderUtils.matrixTransposer(matrixResult);
    expect(matrixResult[0]).to.be.not.equals(transposedMatrix[0]);
  });

  it("Should return an error", () => {
    try {
      maxtrixBuilderUtils.matrixTransposer(arr);
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});

describe("function - matrixBuilder", () => {
  it("Should build a matrix", () => {
    const matrixResult = maxtrixBuilderUtils.matrixBuilder(arr);
    expect(matrixResult[0][0]).to.be.not.empty;
  });

  it("Should return an error", () => {
    try {
      maxtrixBuilderUtils.matrixBuilder([0]);
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});

describe("function - uniqueElements", () => {
  it("Should returns unique array elements ", () => {
    const newArr = maxtrixBuilderUtils.uniqueElements(arr);
    expect(newArr).to.be.not.equals(arr);
  });
});

describe("function - arrayGrouper", () => {
  const resultFromMatrixs = {
    horizontalResult: {
      simianSequencesMatches: ["CCCCTA"],
      humanSequencesMatches: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "TCACTG"],
      result: true
    },
    verticalResult: {
      simianSequencesMatches: ["GGGGTT"],
      humanSequencesMatches: ["ACTACT", "TATGCC", "GGAACA", "CTTACC", "ACTGAG"],
      result: true
    },
    diagonalResult: {
      simianSequencesMatches: ["AAAATG"],
      humanSequencesMatches: ["AGTACT"],
      result: true
    },
  };

  it("Should agroup array", () => {
    const result = maxtrixBuilderUtils.arrayGrouper(resultFromMatrixs);
    expect(result).to.have.all.keys("uniqueSimiansMatch", "uniqueHumanMatch");
  });

  it("Should return an error", () => {
    try {
      maxtrixBuilderUtils.arrayGrouper({});
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});
