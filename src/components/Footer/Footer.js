import React from 'react'
import Button from '../Button/Button.js';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Just visit our country to see what do we have!!
                </p>
                <p className="footer-subscription-text">
                    You can visit any time you like!!
                </p>
                <div className="input-areas">
                    <form >
                        <input type="email" name='email' placeholder='You Email' className='footer-input' />
                        <Button buttonStyle='btn--outline' Children='Subscribe' />
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it work</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it work</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it work</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it work</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Ethio
                        </Link>
                    </div>
                    <small className="website-rights"> Ethio © 2024 Devloped By Tilahun Diriba</small>
                    <div className="social-icons">
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_black'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className='social-icon-link telegram'
                            to='/'
                            target='_black'
                            aria-label='Telegram'
                        >
                            <i className="fab fa-telegram" />
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/'
                            target='_black'
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className='social-icon-link twitter'
                            to='/'
                            target='_black'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to='/'
                            target='_black'
                            aria-label='Linkedin'
                        >
                            <i className="fab fa-linkedin" />
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
