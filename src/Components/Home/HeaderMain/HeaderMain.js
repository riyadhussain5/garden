import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main  style={{height:'600px'}} className='row d-flex align-items-center'>
     <div className='col-md-4 offset-md-1'>
         <h1 style={{color:'#203047'}}>Your New Smile <br/>Starts here</h1>
<p className='text-secondary'>Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</p>
<button  className='btn btn-primary'>GET APPOINTMENT</button>
     </div>
            <div className='col-md-6'>
<img src={chair} alt='' className='img-fluid'/>
            </div>
        </main>
    );
};

export default HeaderMain;