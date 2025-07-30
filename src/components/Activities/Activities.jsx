import { useEffect, useState } from "react";
import activityJson from "../../../public/activiteies.json";
import { Helmet } from "react-helmet-async";
import SingleActivityCard from "../SingleActivityCard/SingleActivityCard";
const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(activityJson);
  }, []);
  return (
    <div className="text-center p-2 mb-6 mt-20 bg-[#232323] shadow-lg">
      <Helmet>
        <title>DeltaITClub | Activities</title>
      </Helmet>
      <h1 className="text-4xl font-extrabold">Activities</h1>
      <div className="grid justify-center gap-4 my-6 items-center p-2 w-full h-auto mx-auto md:grid-cols-2 lg:grid-cols-4">
        {activities.map((activity, index) => (
          <SingleActivityCard activity={activity} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
