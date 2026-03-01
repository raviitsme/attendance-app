import Button from "../components/Button";

const Hero = () => {
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

      {/* Hero Content */}
      <h1 className="text-5xl md:text-6xl font-bold text-white z-10 mb-4">
        Welcome to AttendX
      </h1>
      <p className="text-xl md:text-2xl text-white z-10 max-w-xl mb-8">
        Simplify attendance tracking and activity management in one platform.
      </p>

      <div className="flex gap-4 z-10">
        <button className="bg-amberGold text-deepNavy px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Get Started
        </button>
        <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-deepNavy transition">
          Learn More
        </button>
      </div>

      {/* Blob Animation */}
      <style>
        {`
      @keyframes blob {
        0%, 100% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(20px, -30px) scale(1.05); }
        66% { transform: translate(-15px, 15px) scale(0.95); }
      }
      .animate-blob { animation: blob 8s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }

      @keyframes blob {
      0%, 100% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -40px) scale(1.1); }
      66% { transform: translate(-20px, 30px) scale(0.9); }
      }
.animate-blob { animation: blob 12s infinite; }
    `}
      </style>
    </section>
  );
};

export default Hero;
