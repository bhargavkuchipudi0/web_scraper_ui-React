import React from 'react';
import { Link } from 'react-router-dom';
import './home_component.scss';
import {
        logo,
        landing_page_image,
        flipkart_logo,
        snapdeal_logo,
        amazon_logo,
        jabong_logo,
        ajio_logo,
        myntra_logo
    } from '../../images/index';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='scn_1'>
                    <div className='header'>
                        <div className='logo_div'>
                            <img src={logo} className='logo' alt="Logo" />
                        </div>
                        <div className='nav_div'>
                            <div className='nav home'>
                                <p><Link className='link' to='/home'>Home</Link></p>
                            </div>
                            <div className='nav about'>
                                <p><Link className='link' to='/about'>About</Link></p>
                            </div>
                            <div className='nav login'>
                                <p><Link className='link' to='/login'>Login</Link></p>
                            </div>
                            <div className='nav signup'>
                                <div className='signup-btn'>
                                    <p><Link className='link' to='/signup'>Signup</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='scn_1_body'>
                        <div className='l_cont'>
                            <h2>Price drop &</h2>
                            <h2>Availability Alerts</h2>
                            <p>
                                We track any product for you and notify you once the product droped below the desired price.
                            </p>
                            <p>
                                Set up a price and watch directly form the product page.
                            </p>
                        </div>
                        <div className='r_cont'>
                            <img src={landing_page_image} alt='Landing Page' />
                        </div>
                    </div>
                    <div className='scn_1_counts'>
                        <div className='count'>
                            <div className='users'>
                                <h1>1231</h1>
                                <h2>Users</h2>
                            </div>
                        </div>
                        <div className='count'>
                            <div className='users'>
                                <h1>23443</h1>
                                <h2>Notifications</h2>
                            </div>
                        </div>
                        <div className='count'>
                            <div className='users'>
                                <h1>5436</h1>
                                <h2>Trackings</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scn_2'>
                    <div className='lr_margin_60'>
                        <p>Supported websites for tracking</p>
                        <div className='website_images'>
                            <img className='logo_img' src={flipkart_logo} alt="logo" />
                            <img className='logo_img' src={snapdeal_logo} alt="logo" />
                            <img className='logo_img' src={amazon_logo} alt="logo" />
                            <img className='logo_img' src={myntra_logo} alt="logo" />
                            <img className='logo_img' src={jabong_logo} alt="logo" />
                            <img className='logo_img' src={ajio_logo} alt="logo" />
                        </div>
                        <hr />
                        <p>Exclusive Features</p>
                        <div className='features'>
                            <div className='feat'>
                                
                            </div>
                            <div className='feat'></div>
                            <div className='feat'></div>
                            <div className='feat'></div>
                            <div className='feat'></div>
                            <div className='feat'></div>
                            <div className='feat'></div>
                            <div className='feat'></div>
                        </div>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;