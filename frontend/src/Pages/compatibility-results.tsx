import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PORT } from '../../../backend/config.json';

const CompatibilityResults = () => {
    const navigate = useNavigate();
    const [bestMatchName, setBestMatchName] = useState<string>("Loading...");
    // const [data, setData] = useState([
    //     { person1: 'NA', person2: 'NA', compatibility: -1 },
    //     { person1: 'NA', person2: 'NA', compatibility: -1 }
    // ]);

    const getUserPreferences = async () => {
        console.log('awaiting data');
        await fetch(`http://localhost:${PORT}/api/compatibility/final-result`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                console.log('GET request successful:', data);
                // Process the retrieved data

                // setData(data.result);
                // console.log('got: ', data.result);

                // figure out the best match from result collected

                const userName = localStorage.getItem('userName');

                // console.log('username is this: ', userName);

                let lover = '?';
                for (const entry of data.result) {
                    if (entry.person1 === userName) {
                        lover = entry.person2;
                        setBestMatchName(lover);
                        break;
                    } else if (entry.person2 === userName) {
                        lover = entry.person1;
                        setBestMatchName(lover);
                        break;
                    }
                }
                // console.log(lover, ' and therefore my match = ', bestMatchName);
            })
            .catch(error => {
                console.error('GET request failed:', error);
            });
    }

    useEffect(() => {
        getUserPreferences();
        // const fetchBestMatch = async () => {
        //     try {
        //         const userName = localStorage.getItem("userName");
        //         if (!userName) {
        //             setBestMatchName("No session found");
        //             return;
        //         }

        //         const res = await fetch(`http://localhost:${PORT}/quiz-results/${userName}`, {
        //             method: "GET",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({ userName }),
        //         })
        //         const data = await res.json();

        //         if (data.bestMatchName) {
        //             setBestMatchName(data.bestMatchName);
        //         }
        //     } catch (err) {
        //         console.error(err);
        //         setBestMatchName("Error fetching match");
        //     }
        // };

        // fetchBestMatch();


    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
            {/* Back button */}
            <div className="p-6">
                <button
                    onClick={() => navigate('/')}
                    className="px-5 py-3 bg-orange-600 font-bold text-white rounded-lg hover:bg-orange-700"
                >
                    Back to Events!
                </button>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-2xl text-center mt-10">
                <h1 className="text-5xl font-bold text-green-700 mb-4">Your Match Results</h1>
                <p className="font-bold text-lg text-gray-800 mb-8">
                    Congratulations! Based on your quiz responses, here’s the person you’re most compatible with:
                </p>

                {/* Match Name Section */}
                <div className="bg-white shadow-lg rounded-2xl p-8">
                    <h2 className="text-4xl font-extrabold text-purple-700">{bestMatchName}</h2>
                </div>
            </div>
        </div>
    );
};

export default CompatibilityResults;