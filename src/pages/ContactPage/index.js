import React, { useEffect } from 'react';

import './styles.css';

import MapContainer from '../../components/MapContainer';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='contact-page'>
            <div>Location</div>
            <MapContainer />
        </div>
    )
};

export default ContactPage;