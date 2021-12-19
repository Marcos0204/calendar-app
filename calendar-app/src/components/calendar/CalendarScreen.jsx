import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'

moment.locale('es')

const localizer = momentLocalizer(moment)

const events = [{
    title:'Compleaños de marcos',
    start: moment().toDate(),
    end : moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa'
}]
export const CalendarScreen = () => {

    const eventPropGetter = (event, start, end, isSelected) => {
        console.log(event, start, end, isSelected)
        const style ={
            backgroundColor :'#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }
    return (
        <div className='calendar-screen'>
            <Navbar/>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter = {eventPropGetter}
                // style={{ height: 500 }}
            />
        </div>
    )
}


