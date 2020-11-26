import React, { useRef } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './styles.css';

const MapContainer = props => {

    return (
        <div className='map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5158.621401107203!2d23.632201795546116!3d46.771115810890755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c152cf1d675%3A0xfd6149363b29f3a6!2sParcul%20Iulius%2C%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1606386774384!5m2!1sen!2sro"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
    )
};


export default MapContainer;

