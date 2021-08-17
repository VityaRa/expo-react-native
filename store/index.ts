import { createStore } from "redux";
import RootReducer from "./reducers/rootReducer"

const store = createStore(RootReducer);

export type RootState = ReturnType<typeof store.getState>

export default store