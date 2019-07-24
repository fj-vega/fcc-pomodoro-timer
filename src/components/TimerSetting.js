import React from 'react';

const TimerSetting = ({ type, value, handleTimerSetting, altKbd }) => {
  const handleClick = e => {
    const timerBtn = e.target.closest('button');

    if (!timerBtn) return;

    handleTimerSetting(timerBtn);
  };
  
  return (
    <div className="TimerSetting" onClick={ handleClick }>
      <div id={ `${type}-label` }>
        { type[0].toUpperCase() + type.slice(1) } Length
      </div>

      <div className="TimerSetting-controls">
        <button 
          className="TimerSetting-btn" 
          name={ `${type}Length` } 
          id={ `${type}-decrement` }
          data-kbd="ArrowDown"
          data-alt-kbd={ altKbd }
          value="-1">
          &darr;
        </button>

        <div id={ `${type}-length` }>
          { value }
        </div>
        
        <button 
          className="TimerSetting-btn" 
          name={ `${type}Length` } 
          id={ `${type}-increment` }
          data-kbd="ArrowUp"
          data-alt-kbd={ altKbd } 
          value="1">
          &uarr;
        </button>
      </div>
    </div>
  );
};

export default TimerSetting;
