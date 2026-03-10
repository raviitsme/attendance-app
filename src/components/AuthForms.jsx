import { useState } from "react";
import Button from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import OTPInput from "./OTPInput";
import { loginUser, registerUniversity, signupUser } from "../api/auth";

export const LoginForm = ({ switchToSignup, switchToForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }
    try {
      const res = await loginUser(formData);
      console.log("Form data : ", res.data);

      if (res.data.success) {
        setError("");
        alert("Login Successful");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center text-white font-poppins">
        Welcome Back
      </h2>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
      />
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <div
          className="absolute right-3 top-1/2 transform transition-all duration-150 active:scale-90 hover:scale-120 -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <Button
        variant="primary"
        onClick={handleLogin}
        className="hover:bg-amberGold border transition-all duration-200 focus:bg-amberGold focus:text-deepNavy hover:text-deepNavy"
      >
        Login
      </Button>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      <p
        className="text-sm text-gray-400 text-center cursor-pointer hover:text-amberGold"
        onClick={switchToForgotPassword}
      >
        Forgot Password?
      </p>
      <p className="text-center text-sm text-gray-400">
        New to AttendX?{" "}
        <span
          onClick={switchToSignup}
          className="relative text-white cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 hover:text-amberGold after:h-0.5 after:bg-amberGold after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export const SignupForm = ({ switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSignup = async () => {
    setError("");
    setMessage("");
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fields!");
      return;
    }
    console.log(formData);
    try {
      const res = await signupUser(formData);
      console.log("Data : ", res.data);
      setMessage(res.data.message);
      setTimeout(() => {
        switchToLogin();
      }, 3000);
    } catch (err) {
      setError(
        err.response?.data?.message || "User already exists login please!",
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl text-white font-bold text-center font-poppins">
        Register Here
      </h2>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Full Name"
        className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
      />
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <div
          className="absolute right-3 top-1/2 transform transition-all duration-150 active:scale-90 hover:scale-120 -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <Button
        variant="primary"
        onClick={handleSignup}
        className="hover:bg-amberGold border transition-all duration-200 focus:bg-amberGold focus:text-deepNavy hover:text-deepNavy"
      >
        Register
      </Button>
      {message && (
        <p className="text-sm text-green-400 text-center">{message}</p>
      )}
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      <p className="text-sm text-gray-500 text-center">
        Already a member?{" "}
        <span
          onClick={switchToLogin}
          className="text-white relative transition-all duration-150 hover:text-amberGold cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-amberGold after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export const ForgotPasswordForm = ({ switchToLogin }) => {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center text-white font-poppins">
        Reset Password
      </h2>
      {!otpSent && (
        <>
          <input
            type="email"
            placeholder="Enter email"
            className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
          />
          <Button
            variant="primary"
            className="hover:bg-amberGold border transition-all duration-200 focus:bg-amberGold focus:text-deepNavy hover:text-deepNavy"
            onClick={() => {
              setOtpSent(true);
            }}
          >
            Send Otp
          </Button>
        </>
      )}
      {otpSent && (
        <>
          <OTPInput />
          <Button
            variant="primary"
            className="hover:bg-amberGold border transition-all duration-200 focus:bg-amberGold focus:text-deepNavy hover:text-deepNavy"
          >
            Verify OTP
          </Button>
        </>
      )}
      <p
        className="text-gray-500 text-sm text-center cursor-pointer"
        onClick={switchToLogin}
      >
        Back to login
      </p>
    </div>
  );
};

export const UniversityForm = ({ switchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    uniName: "",
    adminName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
    console.log(name, value);
  };

  const handleRegister = async () => {
    setError("");
    if (
      !formData.uniName ||
      !formData.adminName ||
      !formData.email ||
      !formData.location ||
      !formData.phone ||
      !formData.password
    ) {
      setError("Please fill all fields");
      return;
    }
    try {
      const res = await registerUniversity(formData);
      console.log(res.data);
      setMessage(res.data.message);
      setError("");
      setTimeout(() => {
        switchToLogin();
      }, 2500);
    } catch (err) {
      setError(err.response?.data?.success) || "Server Error";
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl text-white font-bold text-center font-poppins">
        Register your University
      </h2>
      <div className="grid grid-cols-2 gap-3.5">
        <input
          type="text"
          name="uniName"
          onChange={handleChange}
          placeholder="University Name"
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <input
          type="text"
          name="adminName"
          onChange={handleChange}
          placeholder="Email holder name"
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Official email"
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          placeholder="Phone number"
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <input
          type="text"
          name="location"
          onChange={handleChange}
          placeholder="University location"
          className="placeholder-gray-500 relative text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
          />
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute right-2 top-1/2 -translate-1/2 text-white cursor-pointer scale-110 active:scale-95 transition duration-150"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm password"
          className="placeholder-gray-500 text-white rounded-lg border border-amberGold w-full p-3 focus:outline-none focus:ring-2 focus:ring-amberGold focus:border-amberGold transition-all"
        />
        <div
          onClick={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
          className="absolute top-1/2 right-3.5 -translate-y-1/2 text-white cursor-pointer scale-110 active:scale-95 transition duration-150"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
      {message && (
        <p className="text-sm text-green-400">{message}</p>
      )}
      <Button
        variant="primary"
        onClick={handleRegister}
        className="hover:bg-amberGold border transition-all duration-200 active:bg-amberGold active:text-deepNavy hover:text-deepNavy"
      >
        Register
      </Button>
    </div>
  );
};
