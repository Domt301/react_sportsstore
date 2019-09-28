import {createstore} from "redux";
import {ShopReducer} from "./ShopReducer";

export const SportsStoreDataStore = createstore(ShopReducer);