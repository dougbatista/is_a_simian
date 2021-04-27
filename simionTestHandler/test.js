const { handler } = require('./index.handler');

handler(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]).then(r => console.log(r));