const TrendingSection = () => {
  return (
    <section
      id="trending-topics"
      className="py-20 bg-gradient-to-r from-violet-600/5 via-fuchsia-500/5 to-orange-500/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Trending
              </span>{" "}
              Topics
            </h2>
            <p className="text-slate-400 text-lg">
              What the community is talking about
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-slate-400 text-sm mb-3">
                Latest developments and practical applications
              </p>
              <div className="text-xs text-violet-300 font-medium">
                8 episodes
              </div>
            </div>

            <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">Startup Funding</h3>
              <p className="text-slate-400 text-sm mb-3">
                Raising capital in challenging markets
              </p>
              <div className="text-xs text-violet-300 font-medium">
                6 episodes
              </div>
            </div>

            <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <i className="fas fa-globe-africa text-white text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">African Tech</h3>
              <p className="text-slate-400 text-sm mb-3">
                Innovation across the continent
              </p>
              <div className="text-xs text-violet-300 font-medium">
                5 episodes
              </div>
            </div>

            <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all cursor-pointer group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">Privacy & Security</h3>
              <p className="text-slate-400 text-sm mb-3">
                Protecting digital rights and data
              </p>
              <div className="text-xs text-violet-300 font-medium">
                4 episodes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
