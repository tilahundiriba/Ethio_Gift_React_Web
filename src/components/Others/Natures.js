import React from 'react'
import CardItems from '../Card/CardItems';
import goodland from '../Images/goodland.jpg';
import abaydum from '../Images/abaydum.jpg';
import coffe from '../Images/coffe.jpg';
import afarsalt from '../Images/afarsalt.jpg';
import countryside from '../Images/countryside.jpg';
import dalol from '../Images/dalol.jpg';
import gomora2 from '../Images/gomora2.jpg';
import ethiogift from '../Images/ethiogift.jpeg';
import lanscap from '../Images/lanscap.jpg';
function Natures() {
  return (
    <div>
          <h1 className="products">
              Nutures
          </h1>
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
                          src={abaydum}
                          path='/Services'
                          text='Some ethio places to visit'
                          label='Goodland'
                      />
                      <CardItems
                          src={coffe}
                          path='/Services'
                          text='Some ethio places to visit'
                          label='Goodland'
                      />
                  </ul>
                  <ul className="cards_items">
                      <CardItems
                          src={afarsalt}
                          path='/Services'
                          text='Some ethio places to visit'
                          label='Goodland'
                      />
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
                  </ul>
                  <ul className="cards_items">
                      <CardItems
                          src={lanscap}
                          path='/Services'
                          text='Some ethio places to visit'
                          label='Goodland'
                      />
                      <CardItems
                          src={ethiogift}
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
              </div>

          </div>
    </div>
  )
}

export default Natures
