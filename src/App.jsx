import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "./components/weatherInformation/WeatherInfo";
import "./App.css";
import WeatherInformations5Days from "./components/weatherInformation5Days/WeatherInfo5Days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "c75d82eba585e55fb997b6f742f111bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days);
    console.log(apiInfo5Days);
    setWeather(apiInfo.data);
    setWeather5Days(apiInfo5Days.data);
  }

  return (
    <div className="container">
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
