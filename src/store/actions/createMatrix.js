export const generateAndFillArray = (M, N) => {
  console.log(M, N);
  const matrix = [...Array(M)].map(() =>
    [...Array(N)].map(cell => {
      cell = createMatrixData();
      return cell;
    })
  );
  calculateR(matrix);
  matrix.push(calculateC(matrix));
  return matrix;
};

const calculateR = matrix => {
  matrix.map(row => row.push(row.reduce((acc, value) => acc + +value.data, 0)));
};

const calculateC = matrix => {
  return matrix[0].map((_, i) =>
    matrix.reduce((columns, arr) => columns + +arr[i].data, 0)
  );
};

const createMatrixData = () => {
  const id = `u${(~~(Math.random() * 1e8)).toString(16)}`;
  return { id, data: Math.round(Math.random() * (1000 - 100) + 100) };
};

export const creatingMatrix = (M, N) => {
  const matrix = generateAndFillArray(M, N);
  console.log("eee");
  return {
    type: "CREATING_MATRIX",
    matrix: matrix
  };
};
