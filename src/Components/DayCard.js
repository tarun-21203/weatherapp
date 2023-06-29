import React from 'react'

const DayCard = (props) => {
    let { date, maxtemp, mintemp, desc } = props
    return (
        <div class="card mx-2 mb-3" style={{ "width": "10rem"}}>
            <div class="card-body">
                <h5 class="card-title">{date}</h5>
                <h5 class="card-title mb-2">{maxtemp}&#176;</h5>
                <h5 class="card-title mb-2">{mintemp}&#176;</h5>
                <p class="card-text">{desc}</p>
            </div>
        </div>
    )
}

export default DayCard