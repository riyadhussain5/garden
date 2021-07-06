import React from 'react';
import terms from '../../../images/Mask Group 3.png'

const Terms = () => {
    return (
        <main  style={{height:'600px'}} className='row d-flex align-items-center'>
     
            <div className='col-md-4 offset-md-1'>
<img src={terms} alt='' className='img-fluid'/>
            </div>

            <div className='col-md-6 '>
         <h1 style={{color:'#203047'}}>Exceptional dental <br/>Care on your terms</h1>
<p className='text-secondary'>Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</p>
<p className='text-secondary'>Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</p>
<button  className='btn btn-primary'>GET APPOINTMENT</button>
     </div>
        </main>
    );
};

export default Terms;