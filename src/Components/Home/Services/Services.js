import React from 'react';
import img1 from '../../../images/tooth.png';
import img2 from '../../../images/tooth (1).png';
import img3 from '../../../images/001-dental.png'
import Service from '../Service/Service';


const ServicesData=[
    {
        name: 'Floride treatment',
        image: img1,
        description: ' Typically you should get a stacktrace that indicates an approximate location of where the failure occurs. This generally follows straight after the message you have in your original question.'
    },
    {
        name: 'Cavity treatment',
        image: img2,
        description: ' Typically you should get a stacktrace that indicates an approximate location of where the failure occurs. This generally follows straight after the message you have in your original question.'
    },
    {
        name: 'Teeth Whitening ',
        image: img3,
        description: ' Typically you should get a stacktrace that indicates an approximate location of where the failure occurs. This generally follows straight after the message you have in your original question.'
    }
]

const Services = () => {
    return (
        
<section className="service-container mt-5">
           <div className="text-center" >
               <h5 style={{color:'#12D0D4'}}>Our Services</h5>
               <h2>Service we provide</h2>
               </div>
               <div className="d-flex justify-content-center">
          <div className='w-75 row mt-5 pt-5'>
          {
                ServicesData.map(service=> <Service service={service}></Service>)
            }
          </div>
        </div>
              
                
        
               
           
           
        </section>
        

    );
};

export default Services;