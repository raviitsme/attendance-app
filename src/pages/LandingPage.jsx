import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Modal from "../components/Modal";
import { LoginForm, SignupForm } from "../components/AuthForms";
import { useState } from "react";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0A0E1A] via-[#111827] to-[#050810]" />

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
            setIsLogin(true);
            setIsModalOpen(true);
          }}
          openSignupModal={() => {
            setIsLogin(false);
            setIsModalOpen(true);
          }}
        />
        <Hero />
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
      <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}}>
        {isLogin ? (<LoginForm switchToSignup={() => setIsLogin(false)}/>
        ) : (
          <SignupForm switchToLogin={() => setIsLogin(true)}/>
        )}
      </Modal>
    </div>
  );
};

export default LandingPage;
