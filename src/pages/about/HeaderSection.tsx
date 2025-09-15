const HeaderSection = () => {
  return (
    <section
      id="hero-about"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-orange-500/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* <!-- Content --> */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-surface border border-white/20 mb-8">
                <span className="w-2 h-2 bg-violet-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">Meet Your Host</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
                <span className="text-white">The Voice Behind</span>
                <br />
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
                  EchoWave
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Authentic conversations that matter. Real insights from real
                people. Discover the stories behind the success, one episode at
                a time.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                  <i className="fas fa-play mr-3"></i>
                  Listen to Latest
                </button>
                <button className="glass-surface border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                  <i className="fas fa-download mr-3"></i>
                  Press Kit
                </button>
              </div>

              {/* <!-- Quick Stats --> */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="text-sm text-slate-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    42
                  </div>
                  <div className="text-sm text-slate-400">Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-sm text-slate-400">Listeners</div>
                </div>
              </div>
            </div>

            {/* <!-- Host Portrait with Blob Shape --> */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative max-w-md mx-auto">
                {/* <!-- Main Portrait --> */}
                <div className="blob-shape relative overflow-hidden bg-gradient-to-br from-violet-600/20 to-orange-500/20 p-1">
                  <div className="blob-shape bg-slate-950">
                    <img
                      className="w-full h-full object-cover blob-shape"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                      alt="EchoWave podcast host portrait"
                    />
                  </div>
                </div>

                {/* <!-- Floating Elements --> */}
                <div className="absolute -top-4 -right-4 glass-surface p-4 rounded-xl border border-white/20 float-animation">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live</span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 glass-surface p-4 rounded-xl border border-white/20 float-animation"
                  style={{ animationDelay: "-2s" }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-violet-300">
                      4.9★
                    </div>
                    <div className="text-xs text-slate-400">Rating</div>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-8 glass-surface p-3 rounded-full border border-white/20 float-animation"
                  style={{ animationDelay: "-1s" }}
                >
                  <i className="fas fa-microphone text-violet-400"></i>
                </div>
              </div>

              {/* <!-- Background Decorations --> */}
              <div className="absolute -top-20 -left-10 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
