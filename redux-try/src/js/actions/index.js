export const addItemAction = (item) => {
	return {
		type: 'ADD_ITEM',
		item: item
	}
}
export const removeItemAction = (id) => {
	return {
		type: 'REMOVE_ITEM',
		id: id
	}
}