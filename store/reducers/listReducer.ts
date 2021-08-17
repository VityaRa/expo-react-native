import { combineReducers } from 'redux';
import { ListItem } from '../../types/interfaces';
import { ADD_ITEM } from '../actions/listActions';

export interface IListState {
    list: ListItem[],
}

export interface IListAction {
    type: string,
    newItem: ListItem,
}

const initialState: IListState = {
    list: [],
};

export const listReducer = (state = initialState, action: IListAction) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = { action };
            return { ...state, ...state.list, newItem }
        default:
            return state
    }
};

