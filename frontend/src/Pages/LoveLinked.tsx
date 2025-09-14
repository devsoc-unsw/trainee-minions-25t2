import { useEffect, useState } from "react";
import { PORT } from '../../../backend/config.json';

export default function LoveLinked() {
  const [data, setData] = useState({
    id: 'DEMO',
    result: [
      { person1: 'NA', person2: 'NA', compatibility: -1 },
      { person1: 'NA', person2: 'NA', compatibility: -1 }
    ]
  });

  const getUserPreferences = async () => {
    console.log('awaiting data');
    await fetch(`http://localhost:${PORT}/api/results`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        console.log('GET request successful:', data);
        // Process the retrieved data
        setData(data);
      })
      .catch(error => {
        console.error('GET request failed:', error);
      });
  }

  const handlePreferencesResult = () => {
    console.log("this has been clicked!!!");
    getUserPreferences();
    console.log("this has been clicked - aftereffect");
    console.log(data);
  }
  useEffect(() => {
    console.log(PORT, 'backend port');
    // calculateUserPreferences();
    console.log(data);
  }, [data]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
      <button className="rounded-2xl p-4 font-bold text-white border-2 border-black bg-red-400" onClick={() => handlePreferencesResult()}>
        GET RESULTS NOW
      </button>

      <div>
        {data.result.map((deets, i) => (
          <div key={i} className="mb-4 mt-8">
            <div className="bg-red-400 text-white p-2 h-10 w-40 m-2">
              PERSON 1: {deets.person1}
            </div>
            <div className="bg-blue-400 text-white p-2 h-10 w-40 m-2">
              PERSON 2: {deets.person2}
            </div>
            <div className="bg-green-400 text-white p-2 h-10 w-fit m-2">
              COMPATIBILITY SCORE: {deets.compatibility}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}