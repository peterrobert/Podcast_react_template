const HeaderSection = () => {
  return (
    <section
      id="page-header"
      className="py-16 bg-gradient-to-br from-violet-600/10 via-fuchsia-500/5 to-orange-500/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-surface border border-white/20 mb-6">
            <i className="fas fa-headphones mr-2 text-violet-400"></i>
            <span className="text-sm font-medium">All Episodes</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
              Browse All
            </span>
            <br />
            <span className="text-white">Episodes</span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover insights from 42 conversations with tech leaders,
            creatives, and innovators. Filter by topic, search by keyword, or
            explore chronologically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="glass-surface px-6 py-3 rounded-full border border-white/20 flex items-center">
              <span className="text-2xl font-bold text-violet-300 mr-2">
                42
              </span>
              <span className="text-sm text-slate-400">Total Episodes</span>
            </div>
            <div className="glass-surface px-6 py-3 rounded-full border border-white/20 flex items-center">
              <span className="text-2xl font-bold text-orange-300 mr-2">
                28h
              </span>
              <span className="text-sm text-slate-400">Total Runtime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
