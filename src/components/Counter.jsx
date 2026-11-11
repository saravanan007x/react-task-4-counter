import { useState } from "react";

function Counter() {
  // Counter state: starts at 0 and is allowed to become negative.
  const [count, setCount] = useState(0);

  // Each handler receives the previous value so updates are always correct.
  const handleIncrement = () => setCount((previousCount) => previousCount + 1);
  const handleDecrement = () => setCount((previousCount) => previousCount - 1);
  const handleReset = () => setCount(0);

  return (
    <section className="counter" aria-labelledby="counter-label">
      <p className="counter__label" id="counter-label">
        Current Count
      </p>

      <p
        className={`counter__value ${count < 0 ? "counter__value--negative" : ""}`}
        aria-live="polite"
      >
        {count}
      </p>

      <div className="counter__actions">
        <button
          type="button"
          className="button button--increment"
          onClick={handleIncrement}
          aria-label="Increment counter by one"
        >
          <span className="button__symbol" aria-hidden="true">
            +1
          </span>
          <span>Increment</span>
        </button>

        <button
          type="button"
          className="button button--decrement"
          onClick={handleDecrement}
          aria-label="Decrement counter by one"
        >
          <span className="button__symbol" aria-hidden="true">
            &minus;1
          </span>
          <span>Decrement</span>
        </button>

        <button
          type="button"
          className="button button--reset"
          onClick={handleReset}
          aria-label="Reset counter to zero"
        >
          <span className="button__symbol button__symbol--reset" aria-hidden="true">
            &#8635;
          </span>
          <span>Reset</span>
        </button>
      </div>
    </section>
  );
}

export default Counter;
