import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent }  from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

moment.locale('es')

const localizer = momentLocalizer(moment)

const events = [{
    title:'Compleaños de marcos',
    start: moment().toDate(),
    end : moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa',
    user : {
        _id: '123',
        name: 'Diego'
    }
}]
export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month')


    const onDoubleClickEvent = e => {
       //console.log('abrir')
    }

    const onSelectEvent = e => {
       // console.log(e)
    }

    const onViewChange = e => {
        localStorage.setItem('lastView', e)
        setLastView(e)
    }
    
    const eventPropGetter = (event, start, end, isSelected) => {
        // console.log(event, start, end, isSelected)
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
                onDoubleClickEvent= {onDoubleClickEvent}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                eventPropGetter = {eventPropGetter}
                components={{
                    event: CalendarEvent
                }}
                // style={{ height: 500 }}
            />
            <CalendarModal/>
        </div>
    )
}


