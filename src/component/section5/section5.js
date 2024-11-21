import { useEffect, useState } from "react";
import database from "../../config/config"; // Ensure the path is correct
import { ref, onValue } from "firebase/database";

const Section5 = () => {
  const [languageData, setLanguageData] = useState([]);

  useEffect(() => {
    // Reference the "section5" path in the database
    const languagesRef = ref(database, "section5");

    // Fetch data in real-time
    onValue(languagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object data to an array
        const languages = Object.values(data).map((language, index) => ({
          id: `skill${index + 1}`, // Generate a unique ID for each language
          name: language.language,
          proficiency: language.level,
        }));
        setLanguageData(languages);
      } else {
        setLanguageData([]);
      }
    });
  }, []);

  return (
    <div>
      <h2>Bahasa</h2>
      <ul>
        {languageData.map((language) => (
          <li key={language.id}>
            <strong>{language.name}</strong> ({language.proficiency})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section5;