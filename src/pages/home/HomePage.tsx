import { FeaturedEpisode } from ".";
// --- Dummy Data ----
import { featuredEpisode } from "../../../dummyData.ts";

const HomePage = () => {
  return (
    <>
      {/* <!-- Header Section --> */}
      <section id="hero" className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-orange-500/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-surface border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Now Live • Episode 42</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
                Insights That
              </span>
              <br />
              <span className="text-white">Echo Forward</span>
            </h1>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Deep conversations with tech leaders, creatives, and innovators
              shaping tomorrow. Join thousands discovering fresh perspectives
              weekly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                <i className="fas fa-play mr-3"></i>
                Listen Now
              </button>
              <button className="glass-surface border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                <i className="fas fa-rss mr-3"></i>
                Subscribe Free
              </button>
            </div>

            {/* <!-- Platform Icons --> */}
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <span className="text-sm font-medium">Listen on:</span>
              <div className="flex items-center space-x-4">
                <i className="fab fa-spotify text-xl hover:text-green-400 transition-colors cursor-pointer"></i>
                <i className="fab fa-apple text-xl hover:text-white transition-colors cursor-pointer"></i>
                <i className="fab fa-google text-xl hover:text-blue-400 transition-colors cursor-pointer"></i>
                <i className="fas fa-podcast text-xl hover:text-violet-400 transition-colors cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Floating Elements --> */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-violet-600/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "-2s" }}
        ></div>
      </section>

      {/* <!-- Featured Episode --> */}
      <FeaturedEpisode {...featuredEpisode} />
    </>
  );
};

export default HomePage;
