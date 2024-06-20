import './month-styles.css'
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export const MonthCalendarComponent = () => {    
    
    const [ monthYearString, setMonthYearString ] = useState("") 
    const [ daysArray, setDaysArray ] = useState([])  

    const numberOfDaysConversion = {
        "Mon": 0,
        "Tue": 1,
        "Wed": 2,
        "Thu": 3,
        "Fri": 4,
        "Sat": 5,
        "Sun": 6

    }

    const previousSymbol = "<"
    const nextSymbol = ">"

    const mappedDaysArray = daysArray.map(day => {        

        return (
            <>
            {day != "x" ? 
                <div className='day'><p>{day}</p></div>
            :
                <div className='non-day'></div>}            
            </>
            
        )
    })

    const handlePreviousMonthClick = (event) => {
        event.preventDefault()       

        // parse monthYearString into DateTime        
        let dt = DateTime.fromFormat(monthYearString, "MMMM yyyy")

        // subtract one month from luxon date
        let newDt = dt.minus({month: 1})      
        

        // make new monthYearString from newDt
        let month = newDt.monthLong
        let year = newDt.year
        let newMonthDayString = month + " " + year        

        // setMonthYearString to new date
        setMonthYearString(newMonthDayString)

        // setNewCalendarDays
        let newCalendarDays = setCalendarDays({string: newMonthDayString})        
        setDaysArray(newCalendarDays)
        
    }

    const handleNextMonthClick = (event) => {
        event.preventDefault()        

        // parse monthYearString into DateTime        
        let dt = DateTime.fromFormat(monthYearString, "MMMM yyyy")

        // add one month to luxon date
        let newDt = dt.plus({month: 1})      
        

        // make new monthYearString from newDt
        let month = newDt.monthLong
        let year = newDt.year
        let newMonthDayString = month + " " + year        

        // setMonthYearString to new date
        setMonthYearString(newMonthDayString)

        // setNewCalendarDays
        let newCalendarDays = setCalendarDays({string: newMonthDayString})        
        setDaysArray(newCalendarDays)

    }

    const setCalendarDays = ({string}) => {        
        let dayArray = []
        // get current month in use from monthYearString
        let dt = DateTime.fromFormat(string, "MMMM yyyy")

        // find out how many days in the month
        let daysInMonth = dt.daysInMonth

        // find day of week of first day in month       
        let firstDate = dt.set({day: 1})
        let firstDayName = firstDate.weekdayShort
        // use numberOfDaysConversion to find out how many days
        // to pad the front of the month with
        let emptyDayNumber = numberOfDaysConversion[firstDayName]

        // push empty days to dayArray
        for (let i = 0; i < emptyDayNumber; i++) {
            dayArray.push("x")
        }
        
        // push this months dates to day array; start counter at 1
        for (let i = 1; i <= daysInMonth; i++) {            
            dayArray.push(i)
        }

        for (let i = 0; dayArray.length < 35; i++) {
            dayArray.push("x")
        }

        return dayArray

    }

    const DayNameHeader = () => {
        return (
            <div className='day-name-header'>
                    <p className="day-name">mon</p>
                    <p className="day-name">tues</p>
                    <p className="day-name">weds</p>
                    <p className="day-name">thurs</p>
                    <p className="day-name">fri</p>
                    <p className="day-name">sat</p>
                    <p className="day-name">sun</p>                    
            </div>
        )
    } 

    useEffect(() => {
        const dt = DateTime.now()
        
        const monthName = dt.monthLong
        const year = dt.year
        const string = monthName + " " + year
        let daysArray = setCalendarDays({string: string})        
        setDaysArray(daysArray)
        setMonthYearString(string)
    }, [])
    

    

    return (
        <div className='month-calendar-container'>
            <div className='month-nav'>
                <button onClick={handlePreviousMonthClick} className='arrow-button'>{previousSymbol}</button>
                <p>{monthYearString}</p>
                <button onClick={handleNextMonthClick} className='arrow-button'>{nextSymbol}</button>
            </div>

            <div className='month-days-container'>
                <DayNameHeader />
                <div className='days-grid'>{mappedDaysArray}</div>             
            </div>
            
        </div>
    )
}