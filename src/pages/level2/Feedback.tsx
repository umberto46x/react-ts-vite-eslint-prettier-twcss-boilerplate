import { useState } from 'react';

export const Feedback = () => {
  const [goodFeedbackCount, setGoodFeedbackCount] = useState<number>(0);
  const [neutralFeedbackCount, setNeutralFeedbackCount] = useState<number>(0);
  const [badFeedbackCount, setBadFeedbackCount] = useState<number>(0);
  const totalFeedbacks =
    goodFeedbackCount + neutralFeedbackCount + badFeedbackCount;

  return (
    <div className="w-50 mx-auto bg-gray-500 m-4 text-center   ">
      <p className={`text-center p-4 text-bold text-2xl `}>
        Good Feedbacks: <br /> {goodFeedbackCount}
      </p>
      <p className={`text-center p-4 text-bold text-2xl `}>
        Neutral Feedbacks: <br /> {neutralFeedbackCount}
      </p>
      <p className={`text-center p-4 text-bold text-2xl `}>
        Bad Feedbacks: <br /> {badFeedbackCount}
      </p>
      <p className={`text-center p-4 text-bold text-2xl `}>
        Total Feedbacks: <br /> {totalFeedbacks}
      </p>

      <h3 className="text-center p-4 text-bold text-3xl m-3 bg-gray-300 text-gray-600">
        Give a Feedback for our service!
      </h3>
      <button
        className="btn-circle p-3 bg-gray-300 text-green-500  w-25 m-5   hover:bg-gray-200 hover:text-green-700  "
        onClick={() => setGoodFeedbackCount((prev) => prev + 1)}
      >
        Good
      </button>
      <button
        className="btn-circle p-3 bg-gray-300 text-gray-700  w-25 m-5   hover:bg-gray-200 hover:text-gray-600  "
        onClick={() => setNeutralFeedbackCount((prev) => prev + 1)}
      >
        Neutral
      </button>
      <button
        className="btn-circle p-3 bg-gray-300 text-red-500  w-25 m-5   hover:bg-gray-200 hover:text-red-700  "
        onClick={() => setBadFeedbackCount((prev) => prev + 1)}
      >
        Bad
      </button>
    </div>
  );
};
