<<<<<<< HEAD
import { SET_USER } from './actionTypes';
=======
import { SET_ADMIN, SET_SELECTED_SERVICE, SET_USER } from './actionTypes';
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
<<<<<<< HEAD
=======
    case SET_ADMIN:
      return { ...state, admin: action.payload };
    case SET_SELECTED_SERVICE:
      return { ...state, selectedService: action.payload };
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
    default:
      return state;
  }
};
