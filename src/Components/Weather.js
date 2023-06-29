import React, { useEffect, useState } from 'react'
import Card from './Card'
import DayCard from './DayCard'



const Weather = (props) => {

    // To mount initial component
    const [second, setSecond] = useState([])
    let {search} = props;

    const firstMount = async () => {
        let url = `http://api.weatherapi.com/v1/forecast.json?key=35d08e06bebe4204b8353129232506&q=London&days=10&aqi=no&alerts=no`
        let data = await fetch(url)
        let parsedData = await data.json()
        setSecond(parsedData)
    }

    useEffect(() => {
        firstMount();
    })


    return (
        <>
            {/* <div className="container text-center">
                <div className="display-5 mt-4">{second.location.name}, {second.location.country}</div>
                <div className="display-2 fw-normal">{(second.current.temp_f)}&#176; </div>
                <div className="display-6 fw-light">{(second.current.condition.text)}</div>
                <div className="mt-2">Updated as of {(second.current.last_updated)}</div>
            </div> */}

            {/* <div className="container text-center">
                <div className="row mt-5">
                    <div className="col-sm">
                        Feels Like {second.current.feelslike_f}&#176;
                    </div>
                    <div className="col-sm">
                        Wind {second.current.wind_mph} mph
                    </div>
                    <div className="col-sm">
                        Precipitation {second.current.precip_in} in
                    </div>
                </div>
            </div> */}

            {/* <div className="container text-center">
                <div className="row mt-2">
                    <div className="col-sm">
                        Visibility {second.current.vis_miles} miles
                    </div>
                    <div className="col-sm">
                        Humidity {second.current.humidity} %
                    </div>
                    <div className="col-sm">
                        Wind direction {second.current.wind_dir}
                    </div>
                </div>
            </div> */}



            {/* For hour wise weather */}

            {/* <div className='container d-flex flex-row mt-4 text-center flex-wrap align-content-center'>
                <div className="h2 ">Hourly</div>
                {second.forecast.forecastday[0].hour.map((element) => {
                    return <div>
                        <Card time={element.time} temp={element.temp_f} feelslike={element.feelslike_f} wind={element.wind_mph} precip={element.precip_in} humidity={element.humidity} /> 
                        </div>
                })}
            </div> */}



            {/* For date wise weather */}

            {/* <div className='container d-flex flex-row mt-4 text-center flex-wrap align-content-center'>
                <div className="h2">10 Day</div>
                {second.forecast.forecastday.map((element) => {
                    return<div>
                        <DayCard date={element.date} maxtemp={element.day.maxtemp_f} mintemp={element.day.mintemp_f} desc={element.day.condition.text} />
                    </div>
                })}
            </div> */}


        </>
    )
}

// Weather.DefaultProps = {
//     search: 'London'
// }

// Weather.PropTypes = {
//     search: PropTypes.string
// }

export default Weather