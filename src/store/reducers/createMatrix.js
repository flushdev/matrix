const initialState = {
  array: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATING_MATRIX":
      return {
        ...state,
        array: action.matrix
      };
    case "INCREMENT_CELL":
      return {
        ...state,
        array: action.matrix
      };
    case "MATRIX_DELETE":
      return initialState;
    default:
      return state;
  }
};
