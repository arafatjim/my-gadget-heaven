import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Mission from '../Mission/Mission';
import Activities from '../Activities/Activities';
import Whyjoin from '../WhyJoin/Whyjoin';
import Gallary from '../Gallary/Gallary';
import Contacts from '../Contacts/Contacts';


const Home = () => {
          return (
                    <div className='h-auto'>
                              <Helmet>
                                        <title>Delta IT Club | Home</title>
                              </Helmet>
                               {/* <Mission ></Mission>
                               <Activities></Activities>
                               <Whyjoin></Whyjoin>  
                               <Gallary></Gallary>
                               <Contacts></Contacts> */}
                                     
                    </div>
          );
};

export default Home;