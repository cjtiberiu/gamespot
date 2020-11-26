import React, { useEffect } from 'react';

import './styles.css';

import MapContainer from '../../components/MapContainer';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='contact-page'>

            <div className='info-container'>
                <i className="fas fa-phone-square-alt icon"></i>
                <span className='contact-info'>0742000888</span>
            </div>

            <div className='info-container' onClick={() => window.open('https://facebook.com', '_blank')}>
                <i className="fab fa-facebook-square icon"></i>
                <span className='contact-info'>Facebook Page</span>
            </div>

            <div className='info-container'>
                <i className="fas fa-map-marker-alt icon"></i>
                <span className='contact-info' onClick={() => window.open("https://goo.gl/maps/SHvbS2bPD61ZymgDA")}>Location</span>
            </div>
            

            <MapContainer />
        </div>
    )
};

export default ContactPage;