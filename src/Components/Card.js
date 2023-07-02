import React from 'react'

const Card = (props) => {
    let { time, temp, feelslike, wind, precip, humidity, icon, desc } = props;
    return (
        <div className="card mx-2 mb-3" style={{ "width": "10rem" }}>
            <div className="card-body">
                <h5 className="card-title text-center">{time}</h5>
                <h5 className="card-title text-center">{temp}&#176; F</h5>
                <div className="text-center" style={{"height": "3.5rem"}}><img src={icon} alt="" /></div>
                <div className="text-center h5">{desc}</div>
                <p className="card-text">Feels Like {feelslike}&#176; F<br />
                    Precip {precip} in <br />
                    Humidity {humidity} % <br />
                    Wind {wind} mph</p>
            </div>
        </div>
    )
}

export default Card