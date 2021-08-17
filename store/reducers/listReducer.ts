import { combineReducers } from 'redux';
import { ListItem } from '../../types/interfaces';
import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM } from '../actions/listActions';

export interface IListState {
    list: ListItem[],
}

export interface IListAction {
    type: string,
    newItem: ListItem,
    id: string,
}

const initialState: IListState = {
    list: [],
};

export const listReducer = (state = initialState, action: IListAction) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, list: [...state.list, action.newItem] }
        case TOGGLE_ITEM:
            return {
                ...state, list: state.list.map(item => {
                    if (item.id === action.id) return {
                        id: item.id,
                        text: item.text,
                        isDone: !item.isDone
                    }
                    return item;
                })
            }
        case REMOVE_ITEM:
            return { ...state, list: [...state.list.filter(item => item.id !== action.id)] }
        default:
            return state
    }
};

