const helpers = require("../../src/core/helpers/statusHelper");
const { expect } = require("chai");

describe("function - amountDNA", () => {
  it("Should return the length of array greater than zero", () => {
    const result = helpers.amountDNA([0, 1]);
    expect(result).to.be.greaterThan(0);
  });

  it("Should return the length of array equal to zero", () => {
    const result = helpers.amountDNA([]);
    expect(result).to.be.equal(0);
  });
});

describe("function - getRatio", () => {
  it("Should return the ratio equal to zero", () => {
    const result = helpers.getRatio(0, 5);
    expect(result).to.be.equal(0);
  });

  it("Should return the ratio greater than zero and with humanDNAAmount > simianDNAAmount ", () => {
    const result = helpers.getRatio(3, 8);
    expect(result).to.be.equals(37.5);
  });

  it("Should return the ratio greater than zero and with simianDNAAmount > humanDNAAmount ", () => {
    const result = helpers.getRatio(8, 3);
    expect(result).to.be.equals(37.5);
  });
});
