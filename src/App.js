import React from 'react';
import './App.css';
import TimerSetting from './components/TimerSetting';
import Timer from './components/Timer';
import Controls from './components/Controls';
import KeyboardInfo from './components/KeyboardInfo';
// Note used, see component for notes
// import Alarm from './components/Alarm';
import alarm_mp3 from './sound/gameboy-startup-sound.mp3';


class App extends React.Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
    timeLeft: 25 * 60,
    mode: 'session',
    active: false
  };

  pomodoro = null;
  audioRef = React.createRef();

  componentDidMount() {
    window.addEventListener('keyup', e => {
      e.preventDefault();

      let button;

      if (e.ctrlKey) {
        button = document.querySelector(`[data-kbd="${e.key}"][data-alt-kbd="true"]`);
      } else {
        button = document.querySelector(`[data-kbd="${e.key}"]`);
      }

      if (!button) return;

      button.click();

      button.addEventListener('transitionend', () => button.classList.remove('keypress'));
      button.classList.add('keypress');
    });
  };

  handleTimerSetting = timerBtn => {
    if (this.state.active) return;

    const { name, value } = timerBtn;

    const newLength = this.state[name] + Number(value);
    if (newLength <= 0 || newLength > 60) return;

    if (name === 'sessionLength') {
      this.setState({
        sessionLength: newLength,
        timeLeft: newLength * 60
      });
    } else {
      this.setState({
        breakLength: newLength
      });
    };
  };

  toggleTimer = () => {
    if (this.pomodoro) return this.stopTimer();

    this.setState({ active: true });

    this.pomodoro = setInterval(() => {
      if (+this.state.timeLeft === 0) {
        const newSetting = this.state.mode === 'session' 
          ? { mode: 'break', timeLeft: this.state.breakLength * 60 }
          : { mode: 'session', timeLeft: this.state.sessionLength * 60 };

        this.setState(newSetting);
        this.audioRef.current.play();
      } else {
        this.setState({ timeLeft: this.state.timeLeft - 1 });
      }
    }, 1000);
  };

  resetTimer = () => {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 25 * 60,
      mode: 'session'
    });

    this.stopTimer();
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
  };

  stopTimer = () => {
    clearInterval(this.pomodoro);
    this.pomodoro = null;
    return this.setState({ active: false });
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Pomodoro Clock</h1>
        <div className="settings-container">
          <TimerSetting 
            type="session" 
            value={ this.state.sessionLength }
            handleTimerSetting={ this.handleTimerSetting }
          />
          <TimerSetting 
            type="break" 
            value={ this.state.breakLength }
            handleTimerSetting={ this.handleTimerSetting }
            altKbd={ true } 
          />
        </div>
        <Timer
          label={ this.state.mode } 
          timeLeft={ this.state.timeLeft }
          toggleTimer={ this.toggleTimer }
          resetTimer={ this.resetTimer }
        />
        <Controls
          active={ this.state.active } 
          toggleTimer={ this.toggleTimer }
          resetTimer={ this.resetTimer } 
        />
        {/* <Alarm timeLeft={ this.state.timeLeft } /> */}
        <audio 
          id="beep" 
          // src="http://docs.google.com/uc?export=open&id=1C1XDqcVcqeCaxxALqXwp6HkAgj_7fs5D" 
          src={ alarm_mp3 }
          type="audio/mp3" 
          ref={ this.audioRef }
        /> 
        <KeyboardInfo />
      </div>
    );
  };
}

export default App;
