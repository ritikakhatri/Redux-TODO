import {act} from "../constants/action-types.js";

export const deleteItem = item=>{
	return {
	type: act["DELETE_Item"],
	payload: item
}}