import "./WeatherBox.css"
import { useState } from "react";
import Card from '@mui/material/Card';
import drizzle from "./assets/Assets/drizzle.png"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function WeatherBox({weatherdata}){
    return (
        <>
            <div className=" box">
                    <h1 className="text-[2rem] heading">Weather App</h1>
                    <div className="px-2 py-2 card " style={{backgroundColor: '#500ae4', borderRadius:"20px"}}>
                            {weatherdata.city ?   <>
                                  <div className="cardDetails">
                                        <img src=""/>
                                  </div>
                              <Card className="w-[22rem] h-[25rem] md:h-[40.7rem] md:w-[35rem] ">
                                      <div className="flex flex-col items-center justify-items-center h-[70%]" style={{backgroundColor:"#500ae4"}}>
                                           <img src={weatherdata.icon} className=" h-[8rem] md:h-[15rem]"/>
                                           <div className="md:text-[4rem] text-white">{weatherdata.temp}&deg;C</div>
                                           <div className="headingcard  flex flex-col items-center"> <span style={{fontSize:"3rem", color:"white"}}>{(weatherdata.city)[0].toUpperCase()+(weatherdata.city).slice(1)}</span> &nbsp; <span style={{fontSize:"1.5rem", color:"white"}}>{weatherdata.weather} Weather</span></div>
                                      </div>
                                     <CardContent className="h-[30%]" style={{backgroundColor: '#500ae4', color:"white", border:"1px solid white", borderRadius:"20px"}}>
                                       <Typography variant="body2" sx={{ color: 'white' }} component="span">
                                         <p   className="text-[0.8rem] md:text-[1.3rem] font-bold underline">More Weather Info:-</p>
                                         <div className="text-[0.8rem] md:text-[1.3rem]">Humidity:&nbsp;{weatherdata.humidity}</div>
                                         <div className="text-[0.8rem] md:text-[1.3rem]">Max-Temp:&nbsp;{weatherdata.maxTemp}&deg;C</div>
                                         <div className="text-[0.8rem] md:text-[1.3rem]">Min-Temp:&nbsp;{weatherdata.minTemp}&deg;C</div>
                                         <div className="text-[0.8rem] md:text-[1.3rem]">This Weather feels like:&nbsp;{weatherdata.feels_like}&deg;C</div>
                                       </Typography>
                                     </CardContent>
                               </Card>        
                                           </> : <p className="text-white  text-center">Search for Country Or City Name.</p>}
                          
                    
                    </div>
                  
            </div>
        </>
    )
}