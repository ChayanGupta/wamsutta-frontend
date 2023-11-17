import React from 'react'
import '../styles/WhyChooseUs.css'
import WhyChooseUsCard from './WhyChooseUsCard'
import { BadgeDollarSign, Bus, Clock, Headphones, PackageSearch, Percent } from 'lucide-react'


const cards = [
    {
        component: <Headphones color='#ffffff' />,
        text: '24/7 Support Services'
    },
    {
        component: <Clock color='#ffffff' /> ,
        text: 'Save Your Time'
    },
    {
        component: <PackageSearch color='#ffffff' /> ,
        text: 'Many Varieties of products'
    },
    {
        component: <Percent color='#ffffff' /> ,
        text: 'Discount Deals'
    },
    {
        component: <Bus color='#ffffff' /> ,
        text: 'Easier to return order'
    },
    {
        component: <BadgeDollarSign color='#ffffff' /> ,
        text: 'Better Prices'
    },
]

const WhyChooseUs = () => {

    return (
        <div className='why-choose-us-main-div'>
            <div>
                <h1>Why Choose Us</h1>
                <p>Here are just a few reasons to choose <span>Wamsutta</span> </p>
            </div>
            <div className='why-choose-us-div'>
                {cards.map((item,index)=>{
                    return <WhyChooseUsCard key={index} component={item.component} text={item.text} />
                })}
            </div>
        </div>
    )
}

export default WhyChooseUs