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