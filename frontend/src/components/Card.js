import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className="cards">
            <h1 className="heading">Services we provide..!!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/obj1.jpg'
                        text="Provides information about high standard of services suitable for individuals seeking relaxing, comfortable and memorable experiences in the hospitality."
                        label="01"
                        />
                        <CardItem
                        src='images/obj2.jpg'
                        text="Provides information related to local or international tourists’ destinations."
                        label="02"
                        />
                        <CardItem
                        src='images/3.jpg'
                        text="Due to an easy-to-manage website, individuals can post, manage and share their experiences."
                        label="03"
                        />
                        <CardItem
                        src='images/obj4.jpg'
                        text="Provides high quality content which will help people travel and hopefully provide them the answers they want when they search on Google."
                        label="04"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
