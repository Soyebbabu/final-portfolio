import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Soyeb</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                    quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                    A sint ipsam earum nemo omnis et.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <a href="https://www.facebook.com/soyeb.babu/">
                        <FontAwesomeIcon icon={faFacebook } className="icon fb" />
                        </a>
                        
                    </Link>
                    <Link to="test" className="icon-holder">
                        <a href="https://github.com/Soyebbabu">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                        </a>
                    </Link>
                    <Link to="test" className="icon-holder">
                       <a href="https://www.linkedin.com/in/md-abu-soyeb-997966bb/">
                       <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                       </a>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
