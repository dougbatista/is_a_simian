const { handler } = require('./handlers/isSimionHandler');

handler(["ATGCAA", "CAGTGC", "TTATGT", "AGAAGG", "AGAAGG", "TCACTG"]).then(r => console.log(r));