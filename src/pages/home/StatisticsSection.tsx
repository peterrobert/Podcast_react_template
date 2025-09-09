const StatisticsSection = () => {
  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/5 to-orange-500/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
            Growing{" "}
            <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-16">
            Join thousands of forward-thinking professionals
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-surface p-8 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-slate-400 font-medium">
                Monthly Listeners
              </div>
            </div>

            <div className="glass-surface p-8 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                42
              </div>
              <div className="text-slate-400 font-medium">
                Episodes Published
              </div>
            </div>

            <div className="glass-surface p-8 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-slate-400 font-medium">Average Rating</div>
            </div>

            <div className="glass-surface p-8 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                25
              </div>
              <div className="text-slate-400 font-medium">
                Countries Reached
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
