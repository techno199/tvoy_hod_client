import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * 
 * Возвращает время до указанной даты.
 * @param {String} toDate - Дата, до которой ведётся отсчёт в любом поддерживаемом new Date() формате
 * 
 * Возвращает:
 *  {days, hours, minutes, seconds}
*/

const useCountdown = ({
    toDate
}) => {



    // eslint-disable-next-line no-unused-vars
    const [countdownDate, setCountdownDate] = useState(new Date(toDate).getTime());


    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        let tick;

        if (state.seconds >= 0) {
            let tick = setInterval(() => setNewTime(), 1000);
        }


        return () => {
            if (tick) clearInterval(tick)
        }
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            days = `${days}`;
            hours = ('0' + hours).slice(-2);
            minutes = ('0' + minutes).slice(-2);
            seconds = ('0' + seconds).slice(-2);

            setState({ days, hours, minutes, seconds });
        }
    };


    return ({ ...state })
}

useCountdown.propTypes = {
    /* Дата, до которой ведётся отсчёт */
    toDate: PropTypes.string.isRequired
}

export default useCountdown
