const ContactmethodSection = () => {
  return (
    <section id="contact-methods" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Multiple Ways
              </span>{" "}
              to Connect
            </h2>
            <p className="text-slate-400 text-lg">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Email --> */}
            <div className="glass-surface p-8 rounded-2xl border border-white/20 hover:bg-white/10 transition-all group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-slate-400 mb-6">
                Send us a detailed message and we'll get back to you within 24
                hours.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-violet-300 font-medium">
                  hello@echowave.podcast
                </div>
                <div className="text-slate-500">General inquiries</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-sm">
                <div className="text-violet-300 font-medium">
                  guests@echowave.podcast
                </div>
                <div className="text-slate-500">Guest applications</div>
              </div>
            </div>

            {/* <!-- Social Media --> */}
            <div className="glass-surface p-8 rounded-2xl border border-white/20 hover:bg-white/10 transition-all group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="fab fa-twitter text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media</h3>
              <p className="text-slate-400 mb-6">
                Follow us for real-time updates and behind-the-scenes content.
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <div className="p-3 rounded-xl glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-twitter text-blue-400"></i>
                </div>
                <div className="p-3 rounded-xl glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-linkedin text-blue-500"></i>
                </div>
                <div className="p-3 rounded-xl glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-instagram text-pink-400"></i>
                </div>
              </div>
              <div className="text-sm text-slate-400">@echowavepod</div>
            </div>

            {/* <!-- Phone --> */}
            <div className="glass-surface p-8 rounded-2xl border border-white/20 hover:bg-white/10 transition-all group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-phone text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Schedule a Call</h3>
              <p className="text-slate-400 mb-6">
                Book a 15-minute call to discuss potential collaborations or
                guest opportunities.
              </p>
              <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-6 py-3 rounded-full font-semibold hover:opacity-95 transition-all">
                Book a Call
              </button>
              <div className="mt-4 text-sm text-slate-400">
                Available Mon-Fri, 9AM-5PM EAT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactmethodSection;
