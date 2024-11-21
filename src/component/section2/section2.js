import { useEffect, useState } from "react";
import database from "../../config/config"; // Ensure the path is correct
import { ref, onValue } from "firebase/database";

const Section2 = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Reference the "section2" path in the database
    const projectsRef = ref(database, "section2");

    // Fetch data in real-time
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object data to an array
        const projects = Object.values(data).map((project, index) => ({
          id: `skill${index + 1}`,
          title: project.name,
          year: project.sub,
          description: project.desc,
        }));
        setProjectData(projects);
      } else {
        setProjectData([]);
      }
    });
  }, []);

  return (
    <div>
      <h2>Pengalaman Mmebuat Projek</h2>
      <ul>
        {projectData.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong> ({project.year})<br />
            {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section2;