const { isASimianController  } = require('./simianController');

isASimianController(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]).then(r => console.log('DONE'));