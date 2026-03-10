import { useEffect, useRef } from "react";

const OTPInput = ({ length = 4, onChange }) => {
  const inputs = useRef([]);

  useEffect(() => {
    inputs.current[0]?.focus()
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    // Move to next input
    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    // Collect OTP
    const otp = inputs.current.map((input) => input?.value || "").join("");
    onChange?.(otp);
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => (inputs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          className="w-12 h-12 text-center text-xl text-white border border-amberGold rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-amberGold"
        />
      ))}
    </div>
  );
};

export default OTPInput;