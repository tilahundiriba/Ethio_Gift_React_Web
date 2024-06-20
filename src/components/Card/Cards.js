import React from 'react'
import CardItems from './CardItems'
import './Cards.css'
import goodland from '../Images/goodland.jpg'
import culture11 from '../Images/culture11.jpeg';
import culture12 from '../Images/culture12.jpg';
import culture13 from '../Images/culture13.jpeg';
import culture14 from '../Images/culture14.jpeg';
import countryside from '../Images/countryside.jpg';
import dalol from '../Images/dalol.jpg';
import gomora2 from '../Images/gomora2.jpg';
import lalibela from '../Images/lalibelHd.jpg';
import konsolandscapecl from '../Images/konso-cultural-landscape.jpg';
import gonder from '../Images/gonder.jpg';
import gonder2 from '../Images/gonder2.jpg';
import gonder3 from '../Images/gonder3.jpeg';
function Cards() {
    return (
        <div className='cards'>
            <h1>Visit our country!!</h1>
            <div className="cards_wapper">
                <ul className="cards_items">
                    <CardItems
                        src={countryside}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={dalol}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={gomora2}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                </ul>
                <ul className="cards_items">
                    <CardItems
                        src={lalibela}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={konsolandscapecl}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={gonder}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                </ul>
                <ul className="cards_items">
                    <CardItems
                        src={culture11}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={culture12}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={culture13}
                        path='/Services'
                        text='Some ethio places to visit'
                        label='Goodland'
                    />
                    <CardItems
                        src={culture14}
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
