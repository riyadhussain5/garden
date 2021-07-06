import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import Testimonials from '../Testimonials/Testimonials';





const Home = () => {
    return (
        <div>
          <Header></Header>

       <Services></Services>
       <Terms></Terms>
       <Appointment></Appointment>
       <Testimonials></Testimonials>
       <Blogs></Blogs>
       <Doctors></Doctors>
       <Contact></Contact>
       <Footer></Footer>
      

    
        </div>
    );
};

export default Home;