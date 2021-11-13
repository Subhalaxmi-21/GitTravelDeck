import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className='abt_container'>
            <div className='abt_cards'>
                <div className='img-bx'>
                    <img alt="person1" src='images/pro1.jpg' />
                </div>
                <div className='content'>
                    <div className='details'>
                        <h2>Subhlaxmi Das<br /><span>Engineering Student</span></h2>
                        <ul className='social_icons'>
                            <li>
                                <Link to='/mail' className='social_links'>
                                <i className="far fa-envelope"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/insta' className='social_links'>
                                <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/linked' className='social_links'>
                                <i className="fab fa-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='abt_cards'>
                <div className='img-bx'>
                    <img alt="person2" src='images/pro2.jpg' />
                </div>
                <div className='content'>
                    <div className='details'>
                        <h2>Mansi Kela<br /><span>Engineering Student</span></h2>
                        <ul className='social_icons'>
                            <li>
                                <Link to='/mail' className='social_links'>
                                <i className="far fa-envelope"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/insta' className='social_links'>
                                <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/linked' className='social_links'>
                                <i className="fab fa-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='abt_cards'>
                <div className='img-bx'>
                    <img alt="person3" src='images/pro3.jpg' />
                </div>
                <div className='content'>
                    <div className='details'>
                        <h2>Falguni Vaidya<br /><span>Engineering Student</span></h2>
                        <ul className='social_icons'>
                            <li>
                                <Link to='/mail' className='social_links'>
                                <i className="far fa-envelope"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/insta' className='social_links'>
                                <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/linked' className='social_links'>
                                <i className="fab fa-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About