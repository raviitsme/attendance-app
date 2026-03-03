const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-deepNavy">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12 text-white/70">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AttendX
            </h3>
            <p className="leading-relaxed">
              Modern attendance management built for institutions that value
              automation, clarity, and performance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-amberGold transition">Features</a></li>
              <li><a href="#about" className="hover:text-amberGold transition">About</a></li>
              <li><a href="#contact" className="hover:text-amberGold transition">Contact</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="mb-4">
              Subscribe to get product updates and improvements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent border border-white/20 rounded-l-lg px-4 py-2 text-white focus:outline-none"
              />
              <button className="bg-amberGold text-deepNavy px-4 rounded-r-lg font-semibold">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} AttendX. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;