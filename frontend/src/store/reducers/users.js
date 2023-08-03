import { SET_TOKEN, SET_USERS } from "store/types";

let token = localStorage.getItem("token");
if (!token) {
  token = "";
}
const initialState = {
  token: token,
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
}
