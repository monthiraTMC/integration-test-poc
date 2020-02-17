// Count reducer
const countReducer = (count = 1, action) => {
  switch (action.type) {
    case 'COUNT':
      return count + 1;
    default:
      return count;
  }
};

export default countReducer;
