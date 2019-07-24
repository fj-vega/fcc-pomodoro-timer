import React from 'react';

const Timer = ({ label, timeLeft }) => {
  let mm = Math.trunc(timeLeft / 60);
  if (mm < 10) mm = '0' + mm;
  
  let ss = timeLeft % 60;
  if (ss < 10) ss = '0' + ss;

  return (
    <div id="display">
      <div id="timer-label">
        { label[0].toUpperCase() + label.slice(1) }
      </div>
      <div id="time-left">
        { `${mm}:${ss}` }
      </div>
    </div>
  );
};

export default Timer;
