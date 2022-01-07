import moment from 'moment'
import { Types } from '../types/Types'

const initialState = {
    events: [{
        title:'Compleaños de marcos',
        start: moment().toDate(),
        end : moment().add(2, 'hours').toDate(),
        bgColor: '#fafafa',
        user : {
            _id: '123',
            name: 'Diego'
        }
    }],
    active: null

}

export const calendarReducer = ( state= initialState, action ) => {
    switch (action.type) {
        case Types.eventSetActive:
                return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}
