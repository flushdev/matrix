const initialState = {
  array: null,
  calculatedRows: null,
  calculatedColumns: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATING_MATRIX":
      return {
        ...state,
        array: action.matrix,
        calculatedRows: action.rows,
        calculatedColumns: action.columns
      };
    default:
      return state;
  }
};
