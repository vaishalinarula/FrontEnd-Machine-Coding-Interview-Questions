// src/api.js
export const fetchStudentsFromAPI1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Alice", marks: "85%", registrationID: "1234" },
        { name: "Bob", marks: "90%", registrationID: "5678" },
        { name: "Charlie", marks: "92%", registrationID: "9101" },
      ]);
    }, 1000);
  });
};

export const fetchStudentsFromAPI2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Alice", marks: "85%", registrationID: "1234" },
        { name: "David", marks: "88%", registrationID: "1121" },
        { name: "Eve", marks: "95%", registrationID: "3141" },
      ]);
    }, 1000);
  });
};
