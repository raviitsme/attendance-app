import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Modal from "../components/Modal";
import { LoginForm, SignupForm, ForgotPasswordForm, UniversityForm } from "../components/AuthForms";
import { useState } from "react";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const [trailParticles] = useState(() =>
    Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      delay: Math.random() * 5 + "s",
      color: ["#FFB84D", "#FF6B9D", "#4ECDC4"][Math.floor(Math.random() * 3)],
    })),
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0A0E1A] via-[#111827] to-[#050810]" />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {trailParticles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-trail animate-pulse"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
      {/* Gradient Background */}

      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-125 h-125 bg-rosePink opacity-20 rounded-full animate-move-one" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-amberGold opacity-20 rounded-full animate-move-two" />
        <div className="absolute top-1/3 left-1/2 w-100 h-100 bg-turquoise opacity-15 rounded-full animate-move-three" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar
          openLoginModal={() => {
            setAuthMode('login');
            setIsModalOpen(true);
          }}
          openSignupModal={() => {
            setAuthMode('signup');
            setIsModalOpen(true);
          }}
          openUniversityModal={() => {
            setAuthMode('university');
            setIsModalOpen(true);
          }}
        />
        <Hero
          openSignupModal={() => {
            setAuthMode('signup');
            setIsModalOpen(true);
          }}
        />
        <section id="features">
          <Features />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {authMode === "login" && (
          <LoginForm
            switchToSignup={() => setAuthMode("signup")}
            switchToForgotPassword={() => setAuthMode("forgot")}
          />
        )}

        {authMode === "signup" && (
          <SignupForm switchToLogin={() => setAuthMode("login")} />
        )}

        {authMode === "forgot" && (
          <ForgotPasswordForm switchToLogin={() => setAuthMode("login")} />
        )}

        {authMode === 'university' && (
          <UniversityForm switchToLogin={() => setAuthMode("login")} />
        )}
      </Modal>
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
    </div>
  );
};

export default LandingPage;
