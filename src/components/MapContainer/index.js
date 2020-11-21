import React, { useRef } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './styles.css';

const MapContainer = props => {

    return (
        <div className='map'>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741.251394344201!2d24.57120929564762!3d46.544145501101724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bb64bff79ed53%3A0x5798cc216158ecc5!2sRoman%20catholic%20cemetery!5e0!3m2!1sen!2sro!4v1605886001264!5m2!1sen!2sro"
              width="100%"
              height="450"
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

