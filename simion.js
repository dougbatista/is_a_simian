async function isSimian(dnas = []) {
  try {
    if (!matrixValidator(dnas)) return false;

    const matrix = buildMatrix(dnas);
    const matrixToTranspose = JSON.parse(JSON.stringify(matrix));
    const transposedMatrix = matrixTransposer(matrixToTranspose);
  
    const horizontalSearch = searcher(matrix);
    const verticalSearch = searcher(transposedMatrix);
    const diagonalSearch = diagonalsSearcher(matrix);

    const [
      horizontalResult,
      verticalResult,
      diagonalResult
    ] = await Promise.all([horizontalSearch, verticalSearch, diagonalSearch]);
    console.log(
      `Horizontal: ${horizontalResult}; Vertical: ${verticalResult}; Diagonal: ${diagonalResult}`
    );
    return [horizontalResult, verticalResult, diagonalResult].some(
      (result) => result == true
    );
  } catch (error) {
    console.log(error);
  }
}

function buildMatrix(array = []) {
  try {
    let matrix = [];
    for (let word of array) {
      matrix.push(word.split(""));
    }

    return matrix;
  } catch (error) {
    throw error;
  }
}

function searcher(matrix = []) {
  return new Promise((resolve, reject) => {
    try {
      for (let i = 0; i < matrix.length; i++) {
        const dnaSequence = matrix[i].join("").toUpperCase();
        const dnaSequenceMatch = dnaMatching(dnaSequence);

        if (dnaSequenceMatch) return resolve(true);
      }
      resolve(false);
    } catch (error) {
      reject(error);
    }
  });
}

function diagonalsSearcher(matrix = []) {
  return new Promise((resolve, reject) => {
    try {
      if (matrix.length < 4) return resolve(false);
      const diagonal1 = [],
        diagonal2 = [],
        sequencesMatches = [];

      for (let i = 0; i < matrix.length; i++) {
        diagonal1.push(matrix[i][i]);
        diagonal2.push(matrix[i][matrix.length - i - 1]);
      }

      let dnaSequence1 = stringGetter(diagonal1);
      let dnaSequence2 = stringGetter(diagonal2);

      const dnaSequenceMatch1 = dnaMatching(dnaSequence1);
      const dnaSequenceMatch2 = dnaMatching(dnaSequence2);

      if (dnaSequenceMatch1) sequencesMatches.push(dnaSequenceMatch1);
      if (dnaSequenceMatch2) sequencesMatches.push(dnaSequenceMatch2);

      if (sequencesMatches.length > 0) return resolve(true);

      return resolve(false);
    } catch (error) {
      return reject(error);
    }
  });
}

function matrixTransposer(matrix = []) { 
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function stringGetter(array = []) {
  return array.join("").toUpperCase();
}

const dnas = ["ATGCGA", "CAGTGC", "TTATGT", "GAAGG"];
isSimian(dnas);

function dnaMatching(dna = "") {
  if (dna.match(/.*([G,A,T,C]+)\1{3}.*/g)) return dna;
}

function matrixValidator(matrix = []) {
  if (matrix.length === 0) return false;

  let words = {};

  for (let word of matrix) {
    words[word] = word.length;
  }

  const wordsValues = Object.values(words);
  const matrixValidation = wordsValues.every((val, i, arr) => val === arr[0]);
  return matrixValidation;
}
