const INITIAL_STATE = {
   data: [],
   isLoaded: false,
};
const usersReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "SET_USERS":
         return {
            ...state,
            data: action.payload,
            isLoaded: true,
         };
      default:
         return state;
   }
};
export default usersReducer;
