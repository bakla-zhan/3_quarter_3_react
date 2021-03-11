import { CHANGE_USERNAME } from '../actions/profileActions';

const initialState = {};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USERNAME: {
            return {
                ...state,
                userName: action.payload.userName,
            };
        }
        default:
            return state;
    }
};
