import { Types } from "../types/Types";

const initialState = {
    openModal : false
}

export const uiReducers = (state= initialState, action) => {
    switch (action.type) {
        case Types.uiOpenModal :
            return {
                ...state,
                openModal: true
            }
    
        default:
            return state;
    }
}
