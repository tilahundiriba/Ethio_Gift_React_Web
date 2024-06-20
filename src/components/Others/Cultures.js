import React from 'react'
import CardItems from '../Card/CardItems';
import goodland from '../Images/goodland.jpg';
import culture1 from '../Images/culture1.jpeg';
import culture2 from '../Images/culture2.jpeg';
import culture3 from '../Images/culture3.jpeg';
import culture4 from '../Images/culture4.jpeg';
import culture5 from '../Images/culture5.jpeg';
import culture6 from '../Images/culture6.jpeg';
import culture7 from '../Images/culture7.jpeg';
import culture8 from '../Images/culture8.jpeg';
import culture9 from '../Images/culture9.jpeg';
import culture10 from '../Images/culture10.jpeg';
import culture11 from '../Images/culture11.jpeg';
import culture12 from '../Images/culture12.jpg';
import culture13 from '../Images/culture13.jpeg';
import culture14 from '../Images/culture14.jpeg';

function Cultures() {
    return (
        <div>
            <h1 className="products">
                Cultures
            </h1>
            <div className='cards'>
                <h1>Visit our country!!</h1>
                <div className="cards_wapper">
                    <ul className="cards_items">
                        <CardItems
                            src={culture1}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture2}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture3}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItems
                            src={culture4}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture5}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture6}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItems
                            src={culture7}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture8}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture9}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                        <CardItems
                            src={culture10}
                            path='/Services'
                            text='Some ethio places to visit'
                            label='Goodland'
                        />
                    </ul>
                   
                </div>

            </div>
        </div>
    )
}

export default Cultures
