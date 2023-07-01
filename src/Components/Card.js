import React from 'react'

const Card = (props) => {
    let { time, temp, feelslike, wind, precip, humidity } = props;
    return (
        <div className="card mx-2 mb-3" style={{ "width": "10rem" }}>
            <div className="card-body">
                <h5 className="card-title text-center">{time}</h5>
                <h5 className="card-title mb-2 text-center">{temp}&#176;</h5>
                <p className="card-text">Feels Like {feelslike}&#176;<br />
                    Precip {precip} in <br />
                    Humidity {humidity} % <br />
                    Wind {wind} mph</p>
            </div>
        </div>
    )
}

export default Card