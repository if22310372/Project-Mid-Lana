import { useEffect, useState } from "react";
import database from "../../config/config"; // Ensure the path is correct
import { ref, onValue } from "firebase/database";

const Section1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Reference the "csection1" path in the database
    const dataRef = ref(database, "section1");

    // Fetch data in real-time
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value || {}); // Use an empty object if data is not available
    });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>{data.about || "About is not available"}</p>
    </div>
  );
};

export default Section1;