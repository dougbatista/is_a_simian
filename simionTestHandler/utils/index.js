const  { matrixBuilder, matrixTransposer } = require('./matrixBuilder');
const { searcher, diagonalsSearcher } = require('./searchers');
const { dnaMatching, matrixValidator, stringGetter } = require('./validators');

module.exports = {
    matrixBuilder,
    matrixTransposer,
    searcher,
    diagonalsSearcher,
    dnaMatching,
    matrixValidator,
    stringGetter
}