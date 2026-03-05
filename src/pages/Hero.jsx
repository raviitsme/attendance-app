import { useState } from "react";
import Button from "../components/Button";

const Hero = ({ openSignupModal }) => {
  const [trailParticles] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      delay: Math.random() * 5 + "s",
      color: ["#FFB84D", "#FF6B9D", "#4ECDC4"][Math.floor(Math.random() * 3)],
    })),
  );


  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Soft Color Depth Layers (No Blur) */}

      {/* Subtle Top Light */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-white/10 to-transparent pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-white/60 uppercase tracking-widest mb-2">
          Your All-in-One Attendance Platform
        </p>

        <h1 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-4">
          Welcome to <span className="text-rosePink">AttendX</span>
        </h1>

        <p className="text-xl md:text-2xl text-white max-w-xl mx-auto mb-8">
          Simplify attendance tracking and activity management in one platform.
        </p>

        <div className="flex gap-8 justify-center mb-8">
          <div className="text-white">
            <span className="font-bold text-2xl md:text-3xl">1,200+</span>
            <p className="text-sm md:text-base text-white/70">
              Students tracked
            </p>
          </div>
          <div className="text-white">
            <span className="font-bold text-2xl md:text-3xl">50+</span>
            <p className="text-sm md:text-base text-white/70">
              Schools onboarded
            </p>
          </div>
          <div className="text-white">
            <span className="font-bold text-2xl md:text-3xl">99%</span>
            <p className="text-sm md:text-base text-white/70">
              Attendance accuracy
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant="primary"
            className="border border-white active:bg-amberGold hover:scale-110 active:scale-95 hover:bg-amberGold hover:text-deepNavy transition-all duration-300"
            onClick={openSignupModal}
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            className="hover:text-amberGold hover:scale-110 active:text-amberGold active:scale-95 transition-all duration-300"
          >
            <a href="#features">Learn more</a>
          </Button>
        </div>
      </div>

      {/* Particle Trail */}
      {trailParticles.map((p, idx) => (
        <div
          key={idx}
          className="absolute rounded-full animate-trail pointer-events-none z-0"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
          }}
        ></div>
      ))}

      <style>
        {`
          @keyframes trail {
            0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            50% { transform: translate(-10px, -30px) scale(1.2); opacity: 1; }
            100% { transform: translate(-20px, -60px) scale(1); opacity: 0; }
          }
          .animate-trail {
            animation: trail 6s ease-in-out infinite;
          }
          
        `}
      </style>
    </section>
  );
};

export default Hero;
