import {
   legacy_createStore,
   compose,
   applyMiddleware,
   combineReducers,
} from "redux";
import thunk from "redux-thunk";

import usersReducer from "./reducers/usersReducer";

console.log(usersReducer);

const rootReducer = combineReducers({
   users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk))
);

export default store;
