const simpleReducer = (
  state = {
    username: 'kiskacsa',
  },
  action
) => {
  switch (action.type) {
    case 'SIMPLE_ACTION': {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state
  }
}

export default simpleReducer;
