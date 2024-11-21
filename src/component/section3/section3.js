import { useEffect, useState } from "react";
import database from "../../config/config"; // Ensure the path is correct
import { ref, onValue } from "firebase/database";

const Section3 = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Reference the "section3" path in the database
    const projectsRef = ref(database, "section3");

    // Fetch data in real-time
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object data to an array
        const projects = Object.values(data).map((project, index) => ({
          id: `ed${index + 1}`,
          name: project.name,
          study: project.occupations,
          time: project.time,
        }));
        setProjectData(projects);
      } else {
        setProjectData([]);
      }
    });
  }, []);

  return (
    <div>
      <h2>Education</h2>
      <ul>
        {projectData.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> ({project.time})<br />
            {project.study}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section3;