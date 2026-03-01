import { useState } from "react";
import Button from "../components/Button";

const Hero = () => {
  // Generate particle trail positions once
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
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-deepNavy overflow-hidden">
      {/* Subtle Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-rosePink rounded-full opacity-30 animate-blob blob"></div>
      <div className="absolute top-20 -right-25 w-80 h-80 bg-turquoise rounded-full opacity-25 animate-blob blob animation-delay-2000"></div>
      <div className="absolute -bottom-15 left-20 w-64 h-64 bg-amberGold rounded-full opacity-20 animate-blob blob animation-delay-4000"></div>

      {/* Radial Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-150 h-150 bg-gradient-radial from-amberGold/30 via-rosePink/20 to-turquoise/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Particle Trail / Sparkles */}
      {trailParticles.map((p, idx) => (
        <div
          key={idx}
          className="absolute rounded-full animate-trail pointer-events-none"
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

      {/* Hero Content */}
      <h1 className="text-5xl md:text-6xl font-bold text-white z-10 mb-4">
        Welcome to AttendX
      </h1>
      <p className="text-xl md:text-2xl text-white z-10 max-w-xl mb-8">
        Simplify attendance tracking and activity management in one platform.
      </p>

      <div className="flex gap-4 z-10">
        <Button
          variant="primary"
          className="border-double border border-white hover:bg-amberGold hover:text-deepNavy transition-all duration-200 ease-in-out"
        >
          Get Started
        </Button>
        <Button variant="outline" className="border-none hover:text-amberGold">
          Learn More
        </Button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(20px, -30px) scale(1.05); }
            66% { transform: translate(-15px, 15px) scale(0.95); }
          }
          .animate-blob { animation: blob 12s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }

          @keyframes trail {
            0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            50% { transform: translate(-10px, -30px) scale(1.2); opacity: 1; }
            100% { transform: translate(-20px, -60px) scale(1); opacity: 0; }
          }
          .animate-trail { animation: trail 6s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default Hero;
