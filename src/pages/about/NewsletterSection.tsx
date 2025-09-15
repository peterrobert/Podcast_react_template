const NewsletterSection = () => {
  return (
    <section id="newsletter-signup" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border">
            <div className="gradient-border-inner p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
                Stay{" "}
                <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                  Connected
                </span>
              </h2>

              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Get behind-the-scenes content, episode previews, and exclusive
                insights delivered to your inbox every Tuesday.
              </p>

              <div className="max-w-md mx-auto mb-8">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-l-full glass-surface border border-white/20 border-r-0 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:ring-offset-2 focus:ring-offset-transparent placeholder-slate-400"
                  />
                  <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-r-full font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  <span>Exclusive content</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  <span>No spam ever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
