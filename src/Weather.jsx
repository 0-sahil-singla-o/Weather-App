import WeatherInput from "./WeatherInput"
import WeatherBox from "./WeatherBox"
import "./Weather.css"
import { useState } from "react"
export default function WeatherApp(){
    let [weatherdata,setweatherdata]= useState({})
    return (
        <> 
            <div className="main">
                    <WeatherInput setweatherdata={setweatherdata}/>
                    <WeatherBox weatherdata={weatherdata}/>
            </div> 
        </>
    )
}