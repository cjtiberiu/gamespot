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
                <span className='contact-info'>000000000</span>
            </div>
            <div className='info-container'>
                <i className="fab fa-facebook-square icon"></i>
                <span className='contact-info'>facebook...</span>
            </div>
            <div className='info-container'>
                <i className="fas fa-map-marker-alt icon"></i>
                <span className='contact-info'>Location</span>
            </div>
            
            
            <div></div>
            <MapContainer />
        </div>
    )
};

export default ContactPage;