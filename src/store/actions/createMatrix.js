export const generateAndFillArray = (M, N) => {
  const matrix = [...Array(Math.abs(M))].map(() =>
    [...Array(Math.abs(N))].map(cell => {
      cell = createMatrixData();
      return cell;
    })
  );
  calculateR(matrix);
  matrix.push(calculateC(matrix));
  calculatePercentage(matrix);
  return matrix;
};

const calculateR = matrix => {
  matrix.map(row =>
    row.push(row.reduce((acc, value) => acc + +value.value, 0))
  );
};

const calculateEmptyR = (matrix, row) => {
  matrix[row].push(matrix[row].reduce((acc, value) => acc + +value.value, 0));
};

const calculateC = matrix => {
  return matrix[0]
    .map((_, i) => matrix.reduce((columns, arr) => columns + +arr[i].value, 0))
    .map(average => (average / matrix.length).toFixed(1));
};

const calculatePercentage = matrix => {
  return matrix.map((row, idx) =>
    row.map(percent =>
      percent.value
        ? Object.assign(percent, {
            percent: (
              (+percent.value / +matrix[idx][matrix[0].length - 1]) *
              100
            ).toFixed(2)
          })
        : null
    )
  );
};

const addEmptyRow = (matrix, row) => {
  return matrix.splice(row + 1, 0, [
    ...Array(matrix[0].length - 1).fill({ value: null })
  ]);
};

export const findNearestValues = (matrix, amount, nearestFor) => {
  const array = []
    .concat(...matrix)
    .filter(element => element.value)
    .sort((a, b) =>
      Math.abs(nearestFor - a.value) > Math.abs(nearestFor - b.value) ? 1 : -1
    );
  array.splice(0, 1);
  array.splice(amount);
  return array;
};

const updateMatrixData = newRow => {
  return newRow.map(item => ({
    id: `u${(~~(Math.random() * 1e8)).toString(16)}`,
    value: item
  }));
};

const createMatrixData = () => {
  return {
    id: `u${(~~(Math.random() * 1e8)).toString(16)}`,
    value: Math.round(Math.random() * (999 - 100) + 100)
  };
};

const updateMatrix = (matrix, row_id, col_id) => {
  ++matrix[row_id][col_id].value;
  ++matrix[row_id][matrix[0].length - 1];
  matrix.pop();
  matrix.push(calculateC(matrix));
  calculatePercentage(matrix);
};

export const addDataInNewRow = (matrix, row, newRow) => {
  matrix.splice(row, 1, updateMatrixData(newRow));
  calculateEmptyR(matrix, row);
  matrix.pop();
  matrix.push(calculateC(matrix));
  calculatePercentage(matrix);
  console.log(matrix);
  return {
    type: "UPDATE_DATA_IN_NEW_ROW",
    matrix
  };
};

export const addRow = (matrix, row) => {
  addEmptyRow(matrix, row);
  return {
    type: "ADD_NEW_ROW",
    matrix
  };
};

export const incrementCell = (matrix, row_id, col_id) => {
  updateMatrix(matrix, row_id, col_id);
  return {
    type: "INCREMENT_CELL",
    matrix
  };
};

export const creatingMatrix = (M, N) => {
  const matrix = generateAndFillArray(M, N);
  return {
    type: "CREATING_MATRIX",
    matrix
  };
};

export const matrixDelete = () => ({
  type: "MATRIX_DELETE"
});
