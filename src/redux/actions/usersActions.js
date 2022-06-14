import usersRequests from "../../services/UsersRequeests";

export const SET_USERS = "SET_USERS";
export const IS_LOADED_USERS = "IS_LOADED_USERS";

export const setUsers = (users) => {
   return {
      type: SET_USERS,
      payload: users,
   };
};

export const isLoadedUsers = (boolean) => {
   return {
      type: IS_LOADED_USERS,
      payload: boolean,
   };
};

export const fetchUsers = () => async (dispatch) => {
   dispatch(isLoadedUsers(false));
   const users = await usersRequests.loadAllUsers();
   dispatch(setUsers(users));
};
