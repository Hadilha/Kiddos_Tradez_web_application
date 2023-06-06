import { SET_CATEGORY } from "./Action";
import { SET_SEARCH } from "./Action";
import { SET_SOLD_OUT } from "./Action";
import { SET_ID_ANNONCE } from "./Action";
import { SET_ADMIN } from "./Action";
import { SET_IS_A_FAVORIE } from "./Action";
import { SET_UPDATE_NOTIF } from "./Action";
import { SET_UPDATE_NOTIF_BOOLEAN } from "./Action";
const initialState = {
  category: "",
  search: "",
  soldout: false,
  idannonce: "",
  admin: false,
  isafavorie: false,
  updatenotif: 0,
  updatenotifbolean: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_SOLD_OUT:
      return {
        ...state,
        soldout: action.payload,
      };
    case SET_ID_ANNONCE:
      return {
        ...state,
        idannonce: action.payload,
      };

    case SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case SET_IS_A_FAVORIE:
      return {
        ...state,
        isafavorie: action.payload,
      };
    case SET_UPDATE_NOTIF:
      return {
        ...state,
        updatenotif: action.payload,
      };
    case SET_UPDATE_NOTIF_BOOLEAN:
      return {
        ...state,
        updatenotifbolean: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
