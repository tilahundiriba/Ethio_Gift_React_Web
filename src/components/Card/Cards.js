import React from 'react'
import CardItems from './CardItems'
import './Cards.css'
import goodland from '../Images/goodland.jpg'
function Cards() {
    return (
        <div className='cards'>
            <h1>Visit our country!!</h1>
            <div className="cards_wapper">
                <ul className="cards_items">
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                </ul>
                <ul className="cards_items">
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                </ul>
                <ul className="cards_items">
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={goodland}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                </ul>
            </div>

        </div>
    )
}

export default Cards
