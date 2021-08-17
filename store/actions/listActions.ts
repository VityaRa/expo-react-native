import { ListItem } from "../../types/interfaces";

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'

export const addItem = (newItem: ListItem) => (
    {
        type: ADD_ITEM,
        newItem,
    }
);

export const toggleItem = (id: string) => (
    {
        type: TOGGLE_ITEM,
        id,
    }
);

export const removeItem = (id: string) => (
    {
        type: REMOVE_ITEM,
        id,
    }
);