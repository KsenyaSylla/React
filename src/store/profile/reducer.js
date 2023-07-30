import { SET_GENDER_MALE, SET_GENDER_FEMALE, SET_GENDER_OTHER } from "./action.js";
const initialState = { gender: "other" };

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENDER_MALE: {
            return { gender: "male" };
        }
        case SET_GENDER_FEMALE: {
            return { gender: "female" };
        }
        case SET_GENDER_OTHER: {
            return { gender: "other" };
        }
        default: {
            return state;
        }
    }
};