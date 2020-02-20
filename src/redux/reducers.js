import { ADD_ITEM, DEL_ITEM } from "./action";
const initialState = {
    availableItems: [
        {name: 'peach'},
        {name: 'banana'}
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {
                availableItems: state.availableItems.concat({name: action.name})
            });
        case DEL_ITEM:
            return Object.assign({}, state, {
                availableItems: state.availableItems.filter(items => items.name !== action.name)
            });
        default:
            return state;
    }
};

export {rootReducer};