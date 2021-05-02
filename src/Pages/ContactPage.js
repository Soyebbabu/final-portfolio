import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                   
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+880 18516513488'} text2={'+880 1973322421'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'mdabusoyebbabu@gmail.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'Abdul Hamid Road, Foys Lake Chittagong'} text2={'Bangladesh'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
