import { act } from "../constants/action-types.js";

const initialState = {
	items: []
}
const rootReducer = (state= initialState, action)=>{
	switch (action.type) {
		case act["ADD_Item"] :
			
			//return { ...state, items: [...state.items, action.payload] }
			return { items: state.items.concat(action.payload)}
		case act["DELETE_Item"] :
			return { items: state.items.filter((obj)=> {
				console.log(obj.id)
				console.log(action.payload.id)
				return obj.id != action.payload.id
			})}
		default:
			return state
	}

}

export default rootReducer