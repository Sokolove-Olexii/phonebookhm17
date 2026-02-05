import { combineReducers } from "redux";
import { statusFilter } from "./constants";

const contactsInitialState = [{ id: 0, name: "123", number: "123" }];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contact/addContact":
      return [...state, action.payload];
    case "contact/deleteContact":
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = "";

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "filter/setFilter":
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
