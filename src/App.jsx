import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import FeedBack from "./components/FeedBack/FeedBack";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [counter, setCounter] = useState(
    JSON.parse(window.localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  let totalFeedback = counter.good + counter.neutral + counter.bad;

  const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setCounter({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        resetFeedback={resetFeedback}
      ></Options>

      {totalFeedback > 0 && (
        <FeedBack
          good={counter.good}
          bad={counter.bad}
          neutral={counter.neutral}
          total={totalFeedback}
          positive={positiveFeedback}
        ></FeedBack>
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
