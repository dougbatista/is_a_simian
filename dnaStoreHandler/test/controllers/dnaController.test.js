const mocks = require("../mocks/mock");
const sinon = require("sinon");
const controller = require("../../app/controllers/dnaController");
const services = require("../../src/core/services/dnaService");
const { expect } = require("chai");

describe("function - storeDNAController", () => {
  beforeEach(() => {
    sinon.reset();
    sinon.restore();
  });
  it("Should insert human and simian DNAs", async () => {
    sinon.stub(services, "simianDnaService").resolves({ result: "OK" });
    sinon.stub(services, "humanDnaService").resolves({ result: "OK" });
    const {
      HUMAN_DNAS: uniqueHumanMatch,
      SIMIAN_DNAS: uniqueSimiansMatch,
    } = mocks;
    const payload = {
      uniqueHumanMatch,
      uniqueSimiansMatch
    };
    await controller.storeDNAController(JSON.stringify(payload));
  });

  it("Should give an error while insert", async () => {
    sinon.stub(services, "simianDnaService").resolves({ result: "OK" });
    sinon.stub(services, "humanDnaService").rejects({ stack: "Something wrong happened" });
    const {
      HUMAN_DNAS: uniqueHumanMatch,
      SIMIAN_DNAS: uniqueSimiansMatch,
    } = mocks;
    const payload = {
      uniqueHumanMatch,
      uniqueSimiansMatch
    };
    await controller.storeDNAController(JSON.stringify(payload));
  });
});
