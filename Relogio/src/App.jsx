import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountdown from "./hooks/useCountdown";
import useClock from "./hooks/useClock";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00");
  const [hours, minutes, seconds] = useClock();

  return (
    <div className="App">
      <div className="container">
        <Title title="Relogio" />
        <div className="clock-container">
          <Counter title="Horas" number={hours} />
          <Counter title="Min" number={minutes} />
          <Counter title="Seg" number={seconds} />
        </div>
        <Title title="Contagem Regressiva" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Min" number={minute} />
          <Counter title="Seg" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
