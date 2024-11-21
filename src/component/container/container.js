import { useEffect, useState } from "react";
import database from "../../config/config"; // Ensure the path is correct
import { ref, onValue } from "firebase/database";

const C1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Reference the "c1" path in the database
    const dataRef = ref(database, "c1");

    // Fetch data in real-time
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value || {}); // Use an empty object if data is not available
    });
  }, []);

  return (
    <div>
      <h1>{data.nama || "Name Not Available"}</h1>
      <p>
        <strong>Email:</strong> {data.email || "Email Not Available"} |{" "}
        <strong>Phone:</strong> {data.tlp || "Phone Not Available"}
      </p>
      <p>
        <strong>Address:</strong> North Sulawesi, Manado
      </p>
    </div>
  );
};

export default C1;