const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in <span className="text-amberGold">Touch</span>
          </h2>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Have questions or want to collaborate? We’d love to hear from you.
          </p>
        </div>

        {/* Glass Card */}
        <div className="group relative p-px rounded-2xl">

          {/* Card */}
          <div className="relative z-10 bg-deepNavy border border-white/10 rounded-2xl p-10 overflow-hidden">

            {/* Reflection */}

            <form className="space-y-6 relative z-10">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-amberGold focus:outline-none transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-amberGold focus:outline-none transition"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-amberGold focus:outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-amberGold text-deepNavy font-semibold py-3 rounded-lg hover:scale-105 cursor-pointer transition duration-300"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;