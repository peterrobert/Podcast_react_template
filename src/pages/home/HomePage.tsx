import { FeaturedEpisode } from ".";
import EpisodeCard from "../../components/episodeCard/EpisodeCard.tsx";
// --- Dummy Data ----
import { featuredEpisode, episodes } from "../../../dummyData.ts";
import { Fragment } from "react/jsx-runtime";

const HomePage = () => {
  // ---- DISPLAY EPISODE CARD
  const displayEpisodes = () => {
    const results = episodes.map((value) => {
      return (
        <Fragment key={value.id}>
          <EpisodeCard {...value} />
        </Fragment>
      );
    });

    return results;
  };

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

      {/* <!-- Latest Episodes --> */}
      <section id="episodes" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                  Latest{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    Episodes
                  </span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Fresh insights delivered weekly
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 glass-surface px-4 py-2 rounded-full border border-white/20">
                  <i className="fas fa-filter text-sm"></i>
                  <select className="bg-transparent text-sm focus:outline-none">
                    <option value="all">All Topics</option>
                    <option value="career">Career</option>
                    <option value="design">Design</option>
                    <option value="startups">Startups</option>
                  </select>
                </div>
                <button className="glass-surface border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-all">
                  View All
                </button>
              </div>
            </div>
          </div>
          {/* -- Episode Cards Display -- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayEpisodes()}
          </div>
          <div className="text-center mt-12">
            <button className="glass-surface border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Statistics Section --> */}
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

      {/* <!-- About Section --> */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
                  Behind the{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    Microphone
                  </span>
                </h2>

                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  EchoWave started as a simple idea: what if we could capture
                  the unfiltered thoughts of the people shaping our digital
                  future? Three years and 42 episodes later, we've become the
                  go-to podcast for tech professionals seeking authentic
                  insights.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-microphone text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Deep Conversations</h3>
                      <p className="text-slate-400">
                        We skip the surface-level talk and dive into what really
                        matters.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-users text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Diverse Voices</h3>
                      <p className="text-slate-400">
                        From startup founders to seasoned executives, we feature
                        stories from every corner of tech.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-globe-africa text-white"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Global Perspective</h3>
                      <p className="text-slate-400">
                        Special focus on emerging markets, with insights from
                        Kenya's thriving tech ecosystem.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40">
                  Learn More About Us
                </button>
              </div>

              <div className="relative">
                <img
                  className="w-full aspect-square rounded-2xl object-cover shadow-xl shadow-violet-600/20"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a08b67957a-bb9510fe9cd750d50164.png"
                  alt="podcast host in professional studio setup with purple and orange lighting, african tech entrepreneur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>

                {/* <!-- Floating Stats --> */}
                <div className="absolute -top-4 -right-4 glass-surface p-4 rounded-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-300">
                      3.2M
                    </div>
                    <div className="text-xs text-slate-400">
                      Total Downloads
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-surface p-4 rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Recording Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
