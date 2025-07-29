
import { useEffect, useState } from 'react';
import activityJson from '../../../public/activiteies.json'
import SingleActivityCard from '../SingleActivityCard/SingleActivityCard';
const Activities = () => {
          const [activities, setActivities] = useState([]);

          useEffect(() => {
                    setActivities(activityJson);
          }, []);
          return (
                    <div className='text-center p-2 my-10 bg-[#f0f4f8] shadow-lg'>
                              <h1 className='text-4xl font-extrabold'>Activities:</h1>
                              <div className='grid justify-center gap-4 my-6 items-center p-2 w-full h-auto mx-auto lg:grid-cols-4'>
                                        {activities.map((activity, index) => (
                                        <SingleActivityCard activity={activity} key={index} />
                              ))}
                              </div>
                    </div>
          );
};

export default Activities;