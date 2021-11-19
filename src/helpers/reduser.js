const initialState = {
  list:[]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_TASK':
      const task={id:state.list.length + 1,name:action.payload}
      return {
        ...state,
       list:[task,...state.list]
      };

      default:
        return state;
    }
  }
  
  export default reducer;
