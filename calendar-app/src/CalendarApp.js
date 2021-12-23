import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { AppRoutes } from './routes/AppRoutes'

const CalendarApp = () => {
    return (
        <Provider store={ store }>    
             <AppRoutes/>
        </Provider>
        
    )
}

export default CalendarApp
