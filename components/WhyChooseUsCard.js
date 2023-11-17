import React from 'react'
import '../styles/WhyChooseUsCard.css'

const WhyChooseUsCard = ({component, text}) => {
    
    return (
        <div className='why-choose-us-card-main-div'>
            <div className='card-circle'>
                {component}
            </div>
            <h3>{text}</h3>
        </div>
    )
}

export default WhyChooseUsCard