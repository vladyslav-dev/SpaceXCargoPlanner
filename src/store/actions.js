import { types } from "./types";

export const setData = payload => ({
    type: types.SET_DATA,
    payload,
});

export const updateBoxes = payload => ({
    type: types.UPDATE_BOXES,
    payload,
});

export const updateActive = payload => ({
    type: types.UPDATE_ACTIVE,
    payload,
});

export const updateSearchValue = payload => ({
    type: types.UPDATE_SEARCH_VALUE,
    payload,
});

export const burgerHandler = () => ({
    type: types.BURGER_TOGGLE,
})