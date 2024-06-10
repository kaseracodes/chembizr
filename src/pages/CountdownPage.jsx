import React, { useState, useEffect } from 'react';
import './CountdownPage.css'; // Add styling here

const CountdownPage = ({ onCountdownComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Function to get today's date at 6 PM IST
    const getToday6PMIST = () => {
      const now = new Date();

      // Today's date in IST
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();

      // Create a new date for today at 6 PM IST
      const dateIST = new Date(Date.UTC(year, month, day+2, 14, 5)); // 6 PM IST is 12:30 PM UTC

      return dateIST.getTime();
    };

    // Set the countdown date
    const countdownDate = getToday6PMIST();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        onCountdownComplete(); // Notify that countdown is complete
        return;
      }

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with new time remaining
      setTimeRemaining({
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onCountdownComplete]);

  return (
    <div style={{height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="countdown-container">
      <h1>Our Website Launches In:</h1>
      <div id="countdown">
        <div className="time-box">
          <span id="days">{timeRemaining.days}</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span id="hours">{timeRemaining.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span id="minutes">{timeRemaining.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="time-box">
          <span id="seconds">{timeRemaining.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CountdownPage;
