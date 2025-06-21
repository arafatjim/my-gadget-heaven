import React from 'react';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';
import GadgetDetails from '../GadgetDetails/GadgetDetails';

const Home = () => {
          return (
                    <div className='h-auto bg-white'>
                              <Banner></Banner>
                    <Gadgets></Gadgets>                    
                    </div>
          );
};

export default Home;