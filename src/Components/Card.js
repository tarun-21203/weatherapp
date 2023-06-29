import React from 'react'

const Card = (props) => {
    let { time, temp, feelslike, wind, precip, humidity } = props;
    return (
        <div class="card mx-2 mb-3" style={{ "width": "10rem"}}>
            <div class="card-body">
                <h5 class="card-title">{time}</h5>
                <h5 class="card-title mb-2">{temp}&#176;</h5>
                <p class="card-text">Feels Like {feelslike}&#176;</p>
                <p class="card-text">Precip {precip} in</p>
                <p class="card-text">Humidity {humidity} %</p>
                <p class="card-text">Wind {wind} mph</p>
            </div>
        </div>
    )
}

export default Card