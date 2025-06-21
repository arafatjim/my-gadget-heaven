import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';



const Root = () => {
          return (
                    <div>
                              <div className='grid'>
                                        <NavBar></NavBar>
                                        
                              </div>
                              <div className='-mb-40 w-[98%] mx-auto min-h-screen'>
                                        <Outlet></Outlet>
                              </div>
                              <Footer className='mt-0'></Footer>
                    </div>
          );
};

export default Root;