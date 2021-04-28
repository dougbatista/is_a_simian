function uniquenessValidator(array=[]) {
  try {
    let onlyDNAS = [];
    
    for (const item of array) {

      onlyDNAS.push(item.dna.S);
    }

    onlyDNAS = [...new Set(onlyDNAS)];

    return onlyDNAS;
  } catch (error) {
    throw new Error(error.stack);
  }
}

module.exports.uniquenessValidator = uniquenessValidator;
