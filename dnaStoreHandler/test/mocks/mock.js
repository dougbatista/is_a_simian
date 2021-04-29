exports.SIMIAN_DNAS = ["GGGGTT", "CCCCTA"];
exports.HUMAN_DNAS = ["ACTACT", "TATGCC", "GGAACA", "CTTACC", "ACTGAG"];
exports.FAKE_RETURNS = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  })
  
};
