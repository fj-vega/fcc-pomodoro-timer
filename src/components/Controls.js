import React from 'react';

const Controls = ({ active, toggleTimer, resetTimer }) => {
  return (
    <div className="controls">
      <button 
        className="timer-btn" 
        id="start_stop"
        data-kbd=" " 
        onClick={ toggleTimer }
        style={{ backgroundImage: active 
          ? 'url(https://i.postimg.cc/k43V7p1P/colored-pause.png)' 
          : 'url(https://i.postimg.cc/QCgcL3hz/colored-play.png)' }}>
        <span className="sr-only">{ active ? 'Stop' : 'Start'}</span>
      </button>
      
      <button 
        className="timer-btn" 
        id="reset"
        data-kbd="Backspace" 
        onClick={ resetTimer }>
        <span className="sr-only">Reset</span>
      </button>
    </div>
  );
};

export default Controls;
