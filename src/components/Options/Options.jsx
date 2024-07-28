import css from "./Options.module.css";
import clsx from "clsx";

const Options = ({ resetFeedback, updateFeedback, total }) => {
  return (
    <ul className={css.btnList}>
      <li>
        <button type="button" onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {total > 0 && (
        <li>
          <button onClick={resetFeedback}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
