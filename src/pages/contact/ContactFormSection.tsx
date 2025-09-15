const ContactFormSection = () => {
  return (
    <section id="contact-form" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border">
            <div className="gradient-border-inner p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Tell us about your inquiry and we'll get back to you soon
                </p>
              </div>

              <form id="contact-form-element" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-6 py-4 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full px-6 py-4 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="guest">Guest Application</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="sponsorship">Sponsorship Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-6 py-4 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                      placeholder="Your company or organization"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-6 py-4 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                    placeholder="Tell us more about your inquiry, including any relevant details, links, or questions you'd like to discuss..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-5 h-5 text-violet-600 rounded focus:ring-violet-400 focus:ring-2"
                  />
                  <label className="text-sm text-slate-400">
                    I agree to the{" "}
                    <span className="text-violet-300 hover:underline cursor-pointer">
                      Privacy Policy
                    </span>{" "}
                    and consent to having EchoWave store my submitted
                    information for the purpose of responding to my inquiry.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center justify-center"
                  >
                    <i className="fas fa-paper-plane mr-3"></i>
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="glass-surface border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40"
                  >
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
