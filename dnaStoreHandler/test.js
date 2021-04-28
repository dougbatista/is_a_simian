const controller = require('./app/controllers/dnaController');
let teste = "{\"uniqueSimiansMatch\":[\"AAAAC\",\"GGGGT\",\"AAAAT\"],\"uniqueHumanMatch\":[\"ATGCG\",\"AAGTG\",\"ATATG\",\"AGAAG\",\"CCCTT\",\"TATGC\",\"GGAAC\",\"CTTAT\",\"GTAGC\"]}"
controller.storeDNAController(teste);