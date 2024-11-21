import { useEffect, useState } from "react";
import database from "../../config/config"; // Ensure the path is correct
import { ref, onValue } from "firebase/database";

const Section4 = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    // Reference the "section4" path in the database
    const skillsRef = ref(database, "section4");

    // Fetch data in real-time
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object data to an array
        const skills = Object.values(data).map((skill, index) => ({
          id: `skill${index + 1}`,
          name: skill,
        }));
        setSkillsData(skills);
      } else {
        setSkillsData([]);
      }
    });
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section4;