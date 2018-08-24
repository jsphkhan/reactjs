const initialState = {
	basket: []
};

const rootReducer = (state = initialState, action) => {
	console.log('Action Type: ', action.type);
	console.log('Action Data: ', action);
	switch(action.type) {
		case "ADD_ITEM": 
			return {...initialState, basket: [...state.basket, action.item]};
			break;
		case "REMOVE_ITEM":
			return {...initialState, basket: state.basket.filter((item) => {
				return item.id !== action.id;
			})}
			break;
		default:
			return {...state}
			break;
	}
}

export default rootReducer;