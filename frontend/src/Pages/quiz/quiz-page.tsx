import { useState, useEffect } from 'react';
import { Sticker, Heart } from 'lucide-react';
import { questions } from './questions';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      setContentVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleNextQuestion = (): void => {
    setContentVisible(false);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 300);

    setTimeout(() => {
      setContentVisible(true);
    }, 400);
  };

  const completedProgressPercentage = isCompleted ? 100 : (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="w-screen h-screen bg-white overflow-hidden">
      {/* Main Container */}
      <div className="w-full h-full flex flex-col justify-center items-center text-center px-10 relative bg-white transition-all duration-300 ease-in-out">
        
        {isLoading && (
          <div className="text-gray-500 text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Get ready to link!
          </div>
        )}

        {/* Content */}
        <div className={`transition-opacity duration-300 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          {!isCompleted ? (
            <>
              <div className="text-3xl font-medium leading-relaxed mb-10 text-gray-800 max-w-2xl">
                {questions[currentQuestionIndex].text}
              </div>
              
              <Sticker
                onClick={handleNextQuestion}
                className="w-12 h-12 text-red-400 cursor-pointer transition-all duration-200 ease-in-out hover:rotate-10 hover:-translate-y-0.5 active:translate-y-0 mx-auto"
              />
            </>
          ) : (
            <>
              <div className="text-3xl font-medium leading-relaxed mb-10 text-gray-800 gap-3 flex flex-row justify-center items-center">
                Quiz Complete!
                <Heart className='text-red-500'/>
              </div>
              
              <div className="max-w-3xl text-left my-5">
                <div className="mb-5 p-4 border-l-4 border-green-500 bg-gray-50">
                  <div className="font-semibold mb-1 text-gray-800">
                    Find anyone you liked? Go get them!
                  </div>
                  <div className="text-gray-600 italic">
                    Feel free to close this window
                  </div>
                  {/* Back button */}
                  <div className = "p-6">
                      <button 
                          onClick = {() => navigate('/')}
                          className = "px-5 py-3 bg-orange-600 font-bold text-white rounded-lg hover:bg-orange-700"
                      >
                          Back to Home Screen!
                      </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-gray-200 z-50">
        <div 
          className="h-full bg-green-500 transition-all duration-500 ease-in-out rounded-r-sm"
          style={{ width: `${completedProgressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default Quiz;