import {act} from "../constants/action-types.js";

export const addItem = item=>{
	return {
	type: act["ADD_Item"],
	payload: item
}}