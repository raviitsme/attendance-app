import {
  FaUserCheck,
  FaChartLine,
  FaBell,
  FaLayerGroup,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaUserCheck size={22} />,
      title: "Smart Attendance Tracking",
      desc: "Automated and accurate tracking system with real-time updates.",
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Detailed Analytics",
      desc: "Visual reports and performance insights for better decision making.",
    },
    {
      icon: <FaBell size={22} />,
      title: "Instant Notifications",
      desc: "Real-time alerts for attendance, updates and announcements.",
    },
    {
      icon: <FaLayerGroup size={22} />,
      title: "Activity Management",
      desc: "Organize events, tasks and student activities efficiently.",
    },
    {
      icon: <FaShieldAlt size={22} />,
      title: "Secure & Reliable",
      desc: "Enterprise-grade data security and protected access control.",
    },
    {
      icon: <FaCloud size={22} />,
      title: "Cloud Based Access",
      desc: "Access your data anytime, anywhere from any device.",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features Built for{" "}
            <span className="text-amberGold">Modern Institutions</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to manage attendance and activities with
            precision and simplicity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-px rounded-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Glow Border Layer */}
              <div className="absolute inset-0 rounded-2xl bg-amberGold opacity-0 blur-md transition-all duration-300 group-hover:opacity-60"></div>

              {/* Actual Card */}
              <div className="relative bg-deepNavy border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:border-amberGold z-10">
                <div className="text-amberGold mb-4">{feature.icon}</div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
