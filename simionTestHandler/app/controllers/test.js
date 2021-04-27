const { isASimianController  } = require('./simianController');

isASimianController(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCATA", "TCACTG"]).then(r => console.log('DONE'));