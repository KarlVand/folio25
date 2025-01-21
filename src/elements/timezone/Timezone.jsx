import React  from 'react';
import { useState, useEffect } from 'react';


import './timezone.css';


function Timezone() {

    /* Hour, minutes and seconds */
    const [time, setTime] = useState('');

    useEffect(() => {
    const updateTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = checkTime(date.getMinutes());
        const seconds = checkTime(date.getSeconds());
        setTime(`${hours}:${minutes}:${seconds}`);
    };

  const timer = setInterval(updateTime, 1000);
  return () => clearInterval(timer);
}, []);
    

    /* Add zero in front of numbers < 10 */
    const checkTime = (i) => {
        if (i < 10) {i = "0" + i};  
    return i;
    }


    /* Date display */
    const [currentDate, setCurrentDate] = useState();

    const date = () => {
        
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        setCurrentDate = `${day}/${month}`;   
         }

        

    useEffect(() => {
        currentDate();
        return () => date();
    }, []);
         

    
    

    return (
        <div id='timeContainer'>
            <span className='display' id='date'>{currentDate}</span>
            <span id='time'>{time}</span>
            <span className='display cet'>CET</span>
            <span className='display brussels'>, Brussels</span>
        </div>
    )
}

export default Timezone;