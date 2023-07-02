import React from 'react'

const DayCard = (props) => {
    let { date, maxtemp, mintemp, desc, icon } = props
    return (
        <div className="card mx-2 mb-3" style={{ "width": "10rem"}}>
            <div className="card-body">
                <h5 className="card-title">{date}</h5>
                <h5 className="card-title mb-2">{maxtemp}&#176; F</h5>
                <h5 className="card-title mb-2">{mintemp}&#176; F</h5>
                <img src={icon} alt="" />
                <p className="card-text">{desc}</p>
            </div>
        </div>
    )
}

export default DayCard