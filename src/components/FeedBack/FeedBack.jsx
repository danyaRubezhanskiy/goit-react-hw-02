import css from "./FeedBack.module.css";

const FeedBack = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css.feedbackList}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>Total: {total}</li>
      <li>Positive: {positive}</li>
    </ul>
  );
};

export default FeedBack;
