const ADD_ITEM = "ADD_ITEM";
const DEL_ITEM = "DEL_ITEM";

const addItem = (name) => {
    return {type: ADD_ITEM, name: name}
};

const delItem = (name) => {
    return {type: DEL_ITEM, name: name}
};

export {ADD_ITEM, DEL_ITEM, addItem, delItem}