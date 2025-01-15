import TextField from '@mui/material/TextField';
import "./WeatherInput.css" ;
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import clear from "./assets/Assets/clear.png";
import cloud from "./assets/Assets/cloud.png"
import drizzle from "./assets/Assets/drizzle.png"
import humidity from "./assets/Assets/humidity.png"
import rain from "./assets/Assets/rain.png"
import search from "./assets/Assets/search.png"
import snow from "./assets/Assets/snow.png"
import wind from "./assets/Assets/wind.png"
export default function WeatherInput({setweatherdata}){
    const [search,setsearch]= useState("");
    const [error,seterror]= useState(false);
    const allIcons= {
        "01d": clear,
        "01n": clear,
        "02d":cloud,
        "02n":cloud,
        "03d":cloud,
        "03n":cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d":rain,
        "09n":rain,
        "10d":rain,
        "10n":rain,
        "13d":snow,
        "13n":snow
    }
    let API_KEY='619f1b187338472fbb49ab7db24f1eac';
    let API_URL1= `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${API_KEY}`   
    function Search(event){
    setsearch(event.target.value);
    }
    async function Submit(event){
        try{
        event.preventDefault();
        let response= await fetch(API_URL1);
        let JSONresponse= await response.json();
        let lat= JSONresponse[0].lat;
        let lon= JSONresponse[0].lon;
        let API_URL2=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        let response2 = await fetch(API_URL2);
        
        let JSONresponse2= await response2.json();
        console.log(JSONresponse2)
        seterror(false);
        const icon= allIcons[JSONresponse2.weather[0].icon] || clear;
        let result={
           city:search,
           feels_like: String((parseInt(JSONresponse2.main.feels_like)-273.15).toFixed(2)),
           temp : String((parseInt(JSONresponse2.main.temp)-273.15).toFixed(2)),
           maxTemp: String((parseInt(JSONresponse2.main.temp_max)-273.15).toFixed(2)),
           minTemp: String((parseInt(JSONresponse2.main.temp_min)-273.15).toFixed(2)),
           humidity: JSONresponse2.main.humidity,
           weather: JSONresponse2.weather[0].main,
           icon:icon
        }
        console.log(result)
        setweatherdata(result);
        }catch(err){
            event.preventDefault();
            seterror(!error);
        }
        
    }

    return (
     <>
        <div className="WeatherInput flex justify-center ">
            <form className=' w-[100%] flex flex-col md:flex-row md:justify-center items-center'>
                <label className="citylabel w-[60%] flex justify-center md:w-[26%] lg:w-[13%]" htmlFor="city">Search for City</label>
                <TextField className='w-[60%] md:w-[40%] 2xl:w-[20%] ' id="city" label="City" variant="outlined" value={search} required onChange={event=>Search(event) } />
                <Button  className='w-[40%] md:w-[15%] lg:w-[10%] ' color='success' type='submit'  variant="contained" onClick={event=>Submit(event)} endIcon={<SendIcon />}> Search</Button>
            </form>
            {error && <p style={{color:"red"}}>Error!! No such city exists</p>}
        </div>
    </>
    )
}