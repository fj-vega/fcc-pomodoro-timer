// Using this component the FCC test is not passed
// We have to resort to use React refs
// However, I would do it like this if it was my own project


import React from 'react';

const Alarm = ({ timeLeft }) => {
  return (
    <audio 
      id="beep" 
      src="http://docs.google.com/uc?export=open&id=1C1XDqcVcqeCaxxALqXwp6HkAgj_7fs5D" 
      type="audio/mp3" 
      autoPlay={ timeLeft === 0 }
    /> 
  );
};

export default Alarm;
