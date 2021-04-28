function amountDNA(dnas = []) {
  if (dnas.length > 0) return dnas.length;
  return 0;
}

function getRatio(simianDNAAmount = 0, humanDNAAmount = 0) {
  let ratio = 0;

  if (simianDNAAmount === 0 || humanDNAAmount === 0) return 0;

  if (simianDNAAmount < humanDNAAmount) {
    ratio = (simianDNAAmount / humanDNAAmount) * 100;
  } else {
    ratio = (humanDNAAmount / simianDNAAmount) * 100;
  }

  return ratio;
}

module.exports = {
  amountDNA,
  getRatio
};
