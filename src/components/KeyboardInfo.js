import React from 'react';

const KeyboardInfo = () => {
  return (
    <div id="keyboard-info">
      <p>
        Session length <span className="colored-text">UP</span> or <span className="colored-text">DOWN</span>
      </p>
      <p>
        Break length <span className="colored-text">CTRL + UP</span> or <span className="colored-text">CTRL + DOWN</span>
      </p>
      <p>Start/stop <span className="colored-text">SPACEBAR</span></p>
      <p>Reset <span className="colored-text">BACKSPACE</span></p>
    </div>
  );
};

export default KeyboardInfo;
