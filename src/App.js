import './App.css';

import CountDown from './CountDown';

function App() {
  const newYear = new Date("Jan 1, 2024").getTime()
  return (
    <div className="App">
      <h1>Countdown to New Year 2024</h1>
      <CountDown newYear={newYear} />
    </div>
  );
}

export default App;
