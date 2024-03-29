import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div className="display">
        <span className="display__item">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className="display__item">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span className="display__item">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default App;
