import React  from 'react';


import './timezone.css';



function Timezone(){

    /* Hour, minutes and seconds */
    const time = () => {
        let span = document.getElementById('span');
        
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        span.textContent = `${hours}:${minutes}:${seconds}`;
    } 

    setInterval(time, 1000);

    /* Add zero in front of numbers < 10 */
    const checkTime = (i) => {
        if (i < 10) {i = "0" + i};  
    return i;
    }

    return (
        <div id='timeContainer'>
            <span id='span'></span>
            <span className='display cet'>CET</span>
            <span className='display brussels'>, Brussels</span>
        </div>
    )
}

export default Timezone;