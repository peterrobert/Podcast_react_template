const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Have a story to share? Want to be a guest? We'd love to hear from
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-slate-400">hello@echowave.podcast</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-twitter text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Follow Us</h4>
                    <p className="text-slate-400">@echowavepod</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-microphone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Be a Guest</h4>
                    <p className="text-slate-400">
                      Share your story with our community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent">
                    <option>General Inquiry</option>
                    <option>Guest Appearance</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
