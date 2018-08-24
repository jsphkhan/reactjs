const initialState = {
	articles: []
};

const rootReducer = (state = initialState, action) => {
	console.log('--- reducer invoked--- ', action);
	switch(action.type) {
		case 'ADD_ARTICLE':
			//return {...state, articles: state.articles.concat(action.payload)};
			return {...state, articles:[...state.articles, action.payload]}; //shallow copy is done here
		case 'REMOVE_ARTCILE':
			return {...state, articles: state.articles.filter((item) => {
				return item.id !== action.id;
			})}; 
		default:
			return state;
	}
}

export default rootReducer;