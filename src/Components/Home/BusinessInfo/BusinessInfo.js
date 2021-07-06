import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const InfosData =[
    {
        title: 'opening Hours',
        description: ' we are open 7 days',
        icon : faClock,
        background_color: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: ' Brooklyn, NY 10003 USA',
        icon : faMapMarker,
        background_color: 'dark'
    },
    {
        title: 'CALL US NOW',
        description: ' +1564879432',
        icon : faPhone,
        background_color: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
          <div className='w-75 row'>
          {
                InfosData.map(info=> <InfoCard info={info}></InfoCard>)
            }
          </div>
        </section>
    );
};

export default BusinessInfo;