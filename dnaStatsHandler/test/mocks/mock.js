exports.DYNAMO_ARR_HUMAN = [
  { dna: { S: "ACTACT" } },
  { dna: { S: "ACTACT" } },
  { dna: { S: "TATGCC" } },
  { dna: { S: "CTTACC" } }
];

exports.DYNAMO_ARR_SIMIAN = [
  { dna: { S: "CCCCTA" } },
  { dna: { S: "GGGGTA" } },
  { dna: { S: "TTCCCC" } },
  { dna: { S: "TTTTAA" } }
];

exports.DEFAULT_ARR = ["ACTACT", "ACTACT", "TATGCC", "CTTACC"];

exports.DNA_STATUS = {
  count_mutant_dna: 4, 
  count_human_dna: 3,
  ratio: 75
}
