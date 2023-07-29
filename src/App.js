import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStepFunc] = useState(1);
  // let step = 3;
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  function handlePrevious() {
    if (step > 1) setStepFunc((currentStep) => currentStep - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStepFunc((currentStep) => currentStep + 1);
      // setStepFunc((currentStep) => currentStep + 1);
    }
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#a21caf" textColor="#fff" onClick={handlePrevious}>
              Previous
              <span>👈</span>
            </Button>

            <Button bgColor="#a21caf" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
