const NewsLetterSection = () => {
  return (
    <>
      <section id="newsletter" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border">
              <div className="gradient-border-inner p-8 lg:p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
                  Never Miss an{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    Episode
                  </span>
                </h2>

                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  Get episode notifications, exclusive behind-the-scenes
                  content, and curated insights delivered to your inbox every
                  Tuesday.
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
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    <span>3,500+ subscribers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- TOPICS --- */}
      <section id="topics" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                Explore by{" "}
                <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                  Topic
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Find episodes that match your interests
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-briefcase text-white"></i>
                </div>
                <h3 className="font-bold mb-2">Career</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Growth strategies, leadership, and professional development
                </p>
                <div className="text-xs text-violet-300 font-medium">
                  12 episodes
                </div>
              </div>

              <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-palette text-white"></i>
                </div>
                <h3 className="font-bold mb-2">Design</h3>
                <p className="text-slate-400 text-sm mb-4">
                  UX/UI trends, design systems, and creative processes
                </p>
                <div className="text-xs text-violet-300 font-medium">
                  8 episodes
                </div>
              </div>

              <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-rocket text-white"></i>
                </div>
                <h3 className="font-bold mb-2">Startups</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Founding stories, scaling challenges, and entrepreneurship
                </p>
                <div className="text-xs text-violet-300 font-medium">
                  15 episodes
                </div>
              </div>

              <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-heart text-white"></i>
                </div>
                <h3 className="font-bold mb-2">Wellness</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Mental health, work-life balance, and sustainable practices
                </p>
                <div className="text-xs text-violet-300 font-medium">
                  7 episodes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetterSection;
