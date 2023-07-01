import React, { useEffect, useState } from 'react'
import Card from './Card'
import DayCard from './DayCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Weather = (props) => {


    let { search } = props;
    // console.log(search);
    
    // To mount initial component

    const [second, setSecond] = useState({
        "location": {
            "name": "",
            "country": ""
        },
        "current": {
            "condition": {
                "text": ""
            },
            "last_updated": "",
            "temp_f": null,
            "humidity": null,
            "feelslike_f": null,
            "wind_mph": null,
            "precip_in": null,
            "vis_miles": null,
            "wind_dir": "",
            "forecast": {
                "forecastday": []
            }
        },

    });

    // const firstMount = async () => {
    //     let url = `http://api.weatherapi.com/v1/forecast.json?key=35d08e06bebe4204b8353129232506&q=London&days=10&aqi=no&alerts=no`
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     setSecond(parsedData)
    // }

    // useEffect(() => {
    //     firstMount();
    // },[]);

    useEffect(()=> {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=35d08e06bebe4204b8353129232506&q=London&days=10&aqi=no&alerts=no`)
        .then((res) => res.json())
        .then((data) => {
            setSecond(data);
        })
    },[search])


    // For carousel

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 8,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    // const hourly = second.forecast.forecastday[0].hour.map(element => (<Card time={element.time} temp={element.temp_f} feelslike={element.feelslike_f} wind={element.wind_mph} precip={element.precip_in} humidity={element.humidity} />))

    // const day = second.forecast.forecastday.map(element => (<DayCard date={element.date} maxtemp={element.day.maxtemp_f} mintemp={element.day.mintemp_f} desc={element.day.condition.text} />))

    return (
        <>
            <div className="container text-center">
                <div className="display-5 mt-4">{second.location.name}, {second.location.country}</div>
                <div className="display-2 fw-normal">{(second.current.temp_f)}&#176; </div>
                <div className="display-6 fw-light">{(second.current.condition.text)}</div>
                <div className="mt-2">Updated as of {(second.current.last_updated)}</div>
            </div>


            <div className="container text-center">
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
            </div>

            <div className="container text-center">
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
            </div>



            {/* For hour wise weather */}

            {/* <div className="h2 container mt-3">Hourly</div>
            <div className="container mt-2">
                <Carousel responsive={responsive} transitionDuration={1000}>
                    {hourly}
                </Carousel>;
            </div> */}




            {/* For date wise weather */}

            {/* <div className="h2 container">10 Day</div>
            <div className="container text-center mt-2">
                <Carousel responsive={responsive} transitionDuration={1000}>
                    {day}
                </Carousel>;
            </div> */}

        </>
    )
}

// Weather.defaultProps = {
//     search: 'London'
// }

// Weather.propTypes = {
//     search: PropTypes.string
// }

export default Weather