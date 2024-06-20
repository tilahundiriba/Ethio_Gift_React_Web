import React from 'react'
import CardItems from '../Card/CardItems';
import goodland from '../Images/goodland.jpg';
import konsolandscapecl from '../Images/konso-cultural-landscape.jpg';
import konsolandscape2 from '../Images/konso-landscape2.png';
import konsolandscape from '../Images/konso-landscape3.jpg';
import lalibela from '../Images/lalibelHd.jpg';
import manmade from '../Images/man-made-1.jpg';
import man from '../Images/man.jpg';
import gonder from '../Images/gonder.jpg';
import gonder2 from '../Images/gonder2.jpg';
import gonder3 from '../Images/gonder3.jpeg';
import flag from '../Images/flag.png';
function Human_made() {
  return (
    <div>
      <h1 className="products">
        Human Made
      </h1>
      <div className='cards'>
        <h1>Visit our country!!</h1>
        <div className="cards_wapper">
          <ul className="cards_items">
            <CardItems
              src={konsolandscape}
              path='/Services'
              text='Some ethio places to visit'
              label='Goodland'
            />
            <CardItems
              src={konsolandscape2}
              path='/Services'
              text='Some ethio places to visit'
              label='Goodland'
            />
            <CardItems
              src={man}
              path='/Services'
              text='Some ethio places to visit'
              label='Goodland'
            />
          </ul>
          <ul className="cards_items">
            <CardItems
              src={manmade}
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
            <CardItems
              src={gonder2}
              path='/Services'
              text='Some ethio places to visit'
              label='Goodland'
            />
          </ul>
          <ul className="cards_items">
            <CardItems
              src={gonder3}
              path='/Services'
              text='Some ethio places to visit'
              label='Goodland'
            />
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
              src={flag}
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

export default Human_made
