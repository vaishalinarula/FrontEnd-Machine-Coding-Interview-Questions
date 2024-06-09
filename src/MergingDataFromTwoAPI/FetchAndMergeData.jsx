import React, { useEffect, useState } from "react";
import { fetchStudentsFromAPI1, fetchStudentsFromAPI2 } from "./api";
import "./FetchAndMergeData";
function FetchAndMergeData() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchAndMergeData = async () => {
      try {
        const [data1, data2] = await Promise.all([
          fetchStudentsFromAPI1(),
          fetchStudentsFromAPI2(),
        ]);

        // Merge and remove duplicates based on registrationID
        const mergedData = [...data1, ...data2];
        const uniqueData = Array.from(
          new Map(
            mergedData.map((student) => [student.registrationID, student])
          ).values()
        );

        setStudents(uniqueData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAndMergeData();
  }, []);

  return (
    <div className="main-content">
      <h3>Students List - Fetching and Merging </h3>
      <ul>
        {students.map((student) => (
          <li key={student.registrationID}>
            {student.name} / {student.marks} / {student.registrationID}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAndMergeData;
