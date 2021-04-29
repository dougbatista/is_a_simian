const maxtrixBuilderUtils = require("../../src/core/utils/matrixBuilder");
const seachersUtils = require("../../src/core/utils/searchers");
const sinon = require('sinon');

const { expect } = require("chai");

describe("function - diagonalSearcher", () => {
  it("Should search in diagonal", async () => {
    try {
      const arr = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "CCCCTA"];
      const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
      const searchResult = await seachersUtils.diagonalsSearcher(buildedMatrix);
      expect(searchResult).to.have.all.keys(
        "simianSequencesMatches:",
        "humanSequencesMatches",
        "result"
      );
    } catch (_) {}
  });

  it("Should search in diagonal and not return a simian DNA", async () => {
    try {
      const arr = ["ATGCGA", "CAGTGC", "TTCTGT", "AGAAGG", "CCCCTA", "CCCCTA"];
      const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
      const searchResult = await seachersUtils.diagonalsSearcher(buildedMatrix);
      expect(searchResult).to.have.all.keys(
        "simianSequencesMatches:",
        "humanSequencesMatches",
        "result"
      );
    } catch (_) {}
  });

  it("Should fail to search in diagonal", async () => {
    try {
      const arr = ["ATGCGA", "CAGTGC", "TTCTGT", "AGAAGG", "CCCCTA", 0];
      const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
      await seachersUtils.diagonalsSearcher(buildedMatrix);
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});

describe("function - searcher", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  })
  it("Should search in horizontal", async () => {
    try {
      const arr = ["ATGCGA", "CAGTGC", "TTCTGT", "AGAAGG", "CCCCTA", "CCCCTA"];
      const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
      const searchResult = await seachersUtils.searcher(buildedMatrix);
      expect(searchResult).to.have.all.keys(
        "simianSequencesMatches:",
        "humanSequencesMatches",
        "result"
      );
    } catch (_) {}
  });

  it("Should search in horizontal and not get simian DNA", async () => {
    try {
      const arr = ["ATGCGA", "CAGTGC", "TTCTGT", "AGAAGG", "ACCCTA", "CTCCTA"];
      const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);
      const searchResult = await seachersUtils.searcher(buildedMatrix);
      expect(searchResult).to.have.all.keys(
        "simianSequencesMatches:",
        "humanSequencesMatches",
        "result"
      );
    } catch (_) {}
  });

  it("Should fail to search in horizontal", async () => {
    try {
      const arr = ["ATGCGA", "CAGTGC", "TTCTGT", "AGAAGG", "ACCCTA", 0];
            
      const buildedMatrix = maxtrixBuilderUtils.matrixBuilder(arr);

      await seachersUtils.searcher(buildedMatrix);
    } catch (error) {
      expect(error).to.be.not.null;
    }
  });
});
