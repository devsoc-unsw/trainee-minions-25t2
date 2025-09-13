import { useNavigate } from "react-router-dom";
import { PORT } from '../../../backend/config.json';
import { useEffect, useState } from "react";

const CompatibilityResults = () => {
    const navigate = useNavigate();
    // const [data, setData] = useState('');

    // replace this with real quiz result data
    const [bestMatchName, setBestMatchName] = useState("Alex Johnson");

    const calculateUserPreferences = async () => {
        await fetch(`http://localhost:${PORT}/api/results/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                console.log('GET request successful:', data);
                // Process the retrieved data
                setBestMatchName(data);
            })
            .catch(error => {
                console.error('GET request failed:', error);
            });
    }

    useEffect(() => {
        console.log(PORT, 'backend port');
        calculateUserPreferences();
        console.log(bestMatchName);
    }, [setBestMatchName])

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