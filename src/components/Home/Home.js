import React from 'react'
import '../App/App.css';
import './Home.css';
import  Button  from '../Button/Button.js';
const Home = () => {
    return (
        <div className='home-container'>
            {/* <img src="/images/goodland.jpg" alt="goodland" height='auto' width='auto' backgroundColor='red'/> */}
            {/* <video src="" autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="home-btns">
                <Button className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    Children="GET STARTED"
                >
                    
                </Button>

                <Button className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    Children="GET STARTED"
                >
                  
                </Button>
            </div>

        </div>
    )
}

export default Home;
