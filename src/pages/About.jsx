const About = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Section Container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-amberGold">AttendX</span>
          </h2>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            AttendX is a modern attendance management platform built to simplify
            tracking, automate reporting, and empower institutions with
            real-time insights.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description Card */}
          <div className="group relative p-px rounded-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-amberGold opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"></div>

            {/* Card */}
            <div className="relative overflow-hidden z-10 bg-deepNavy border border-white/10 rounded-2xl p-10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/60 leading-relaxed">
                We aim to eliminate manual attendance systems by providing
                secure, scalable, and intelligent solutions. Our platform
                focuses on efficiency, transparency, and automation.
              </p>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "500+", label: "Institutions" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group overflow-hidden relative p-px rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-rosePink opacity-30 md:opacity-0 blur-xl transition-all duration-500 md:group-hover:opacity-60"></div>

                {/* Card */}
                <div className="relative z-10 bg-deepNavy border border-white/10 rounded-xl p-6 text-center">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-amberGold mb-2">
                    {stat.number}
                  </h4>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
