import { Types } from "../types/Types";


export const evenstAddNew = (event) =>({
    type: Types.eventAddNew,
    payload: event
})

export const eventSetActive = (event) =>({
    type: Types.eventSetActive ,
    payload: event
})