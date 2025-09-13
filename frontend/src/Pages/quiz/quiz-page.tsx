import { useState, useEffect } from "react";
import { Sticker, Heart } from "lucide-react";
import { openQuestions, scaleQuestions, type Question } from "./questions";
import { useNavigate, useParams } from "react-router-dom";

interface PersonalityScores {
  introversion: number;
  extraversion: number;
  spontaneous: number;
  organized: number;
  riskTaker: number;
  cautious: number;
}

const Quiz = () => {
  const { id } = useParams();
  const numericId = Number(id);

  useEffect(() => {
    console.log(numericId);
  }, [])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [scaleValue, setScaleValue] = useState(3);
  const [personalityScores, setPersonalityScores] = useState<PersonalityScores>(
    {
      introversion: 0,
      extraversion: 0,
      spontaneous: 0,
      organized: 0,
      riskTaker: 0,
      cautious: 0,
    },
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Shuffle questions left and right randomly
    const shuffledOpen = [...openQuestions].sort(() => Math.random() - 0.5);
    const shuffledScale = [...scaleQuestions].sort(() => Math.random() - 0.5);

    // Select first 8 and 12 questions
    const selectedOpen = shuffledOpen.slice(0, 8);
    const selectedScale = shuffledScale.slice(0, 12);

    // Combine and shuffle all selected questions
    const allSelected = [...selectedOpen, ...selectedScale].sort(
      () => Math.random() - 0.5,
    );
    setSelectedQuestions(allSelected);

    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      setContentVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const updatePersonalityScores = (question: Question, value: number) => {
    if (question.type === "scale" && question.traits) {
      setPersonalityScores((prev) => {
        const newScores = { ...prev };

        question.traits?.forEach((trait) => {
          if (value >= 4) {
            // High score (4-5) increments the trait
            newScores[trait as keyof PersonalityScores]++;
          } else if (value <= 2) {
            // Low score (1-2) increments opposite trait
            const oppositeTraits: Record<string, keyof PersonalityScores> = {
              introversion: "extraversion",
              extraversion: "introversion",
              spontaneous: "organized",
              organized: "spontaneous",
              riskTaker: "cautious",
              cautious: "riskTaker",
            };

            const opposite = oppositeTraits[trait];
            if (opposite) {
              newScores[opposite]++;
            }
          }
          // Score of 3 is neutral, no increment
        });

        return newScores;
      });
    }
  };

  const handleNextQuestion = (): void => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    // Update personality scores if it's a scale question
    updatePersonalityScores(currentQuestion, scaleValue);

    setContentVisible(false);

    setTimeout(() => {
      if (currentQuestionIndex < selectedQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 300);

    // Reset scale value AFTER transition delay
    setTimeout(() => {
      setScaleValue(3);
      setContentVisible(true);
    }, 300);
  };

  const completedProgressPercentage = isCompleted
    ? 100
    : (currentQuestionIndex / selectedQuestions.length) * 100;
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  if (!currentQuestion && !isCompleted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-white px-10 text-center transition-all duration-300 ease-in-out">
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-base text-gray-500">
            Get ready to link!
          </div>
        )}

        {/* Content */}
        <div
          className={`transition-opacity duration-300 ease-in-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
        >
          {!isCompleted ? (
            <>
              <div className="mb-10 max-w-2xl text-3xl leading-relaxed font-medium text-gray-800">
                {currentQuestion.text}
              </div>

              {currentQuestion.type === "scale" && (
                <div className="mb-10">
                  <div className="mx-auto mb-2 flex max-w-md justify-between text-sm text-gray-600">
                    <span>{currentQuestion.scaleLabels?.left}</span>
                    <span>{currentQuestion.scaleLabels?.right}</span>
                  </div>
                  <div className="mb-6 flex items-center justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => setScaleValue(value)}
                        className={`h-12 w-12 rounded-full border-2 transition-all duration-200 ${scaleValue === value
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-300 text-gray-500 hover:border-blue-300"
                          }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Sticker
                onClick={handleNextQuestion}
                className="mx-auto h-12 w-12 cursor-pointer text-red-400 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:rotate-10 active:translate-y-0"
              />
            </>
          ) : (
            <>
              <div className="mb-10 flex flex-row items-center justify-center gap-3 text-2xl leading-relaxed font-medium text-gray-800">
                Quiz Complete!
                <Heart className="text-red-500" />
              </div>

              <div className="my-5 max-w-3xl text-left">
                <div className="mb-5 border-l-4 border-green-500 bg-gray-50 p-4">
                  <div className="mb-1 font-semibold text-gray-800">
                    Find anyone you liked? Go get them!
                  </div>
                  <div className="text-gray-600 italic">
                    Feel free to close this window
                  </div>

                  {/* Debug: Show personality scores, remove post editing */}
                  <div className="mt-4 text-xs text-gray-500">
                    Personality Scores: {JSON.stringify(personalityScores)}
                  </div>

                  {/* Back button */}
                  <div className="p-6">
                    <button
                      onClick={() => navigate('/')}
                      className="px-6 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                    >
                      Back to Events!
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 z-50 h-1.5 w-full bg-gray-200">
        <div
          className="h-full rounded-r-sm bg-green-500 transition-all duration-500 ease-in-out"
          style={{ width: `${completedProgressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default Quiz;
