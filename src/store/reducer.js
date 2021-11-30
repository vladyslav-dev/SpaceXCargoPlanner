import { types } from "./types";

const initialState = {
    data: [],
    search: "",
    isBurgerOpen: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        case types.UPDATE_BOXES:
            return {
                ...state,
                data: [...state.data.map(item => item.id === action.payload.id ? { ...item, boxes: action.payload.boxes } : item)],
            };
        case types.UPDATE_ACTIVE:
            return {
                ...state,
                data: [...state.data.map(item => item.id === action.payload ? { ...item, isActive: true } : { ...item, isActive: false })],
                search: "",
                isBurgerOpen: false,
            }
        case types.UPDATE_SEARCH_VALUE:
            return {
                ...state,
                search: action.payload,
            }
        case types.BURGER_TOGGLE:
            return {
                ...state,
                isBurgerOpen: !state.isBurgerOpen,
            }
        default:
            return state;
    }
};
