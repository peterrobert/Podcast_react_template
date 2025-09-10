import type { Episode } from "../../types";

const FeaturedEpisode = ({
  title,
  description,
  duration,
  currentTime,
  episodeNumber,
  lengthInMinutes,
  tags,
  image,
}: Episode) => {
  return (
    <section id="featured-episode" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Featured
              </span>{" "}
              Episode
            </h2>
            <p className="text-slate-400 text-lg">
              The conversation everyone's talking about
            </p>
          </div>

          <div className="gradient-border">
            <div className="gradient-border-inner p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="glass-surface px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                      {episodeNumber}
                    </span>
                    <span className="text-slate-400 text-sm ml-4">
                      {lengthInMinutes} minutes
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 leading-tight">
                    {title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((value) => {
                      return (
                        <span
                          className="glass-surface px-3 py-1 rounded-full text-xs border border-white/20"
                          key={value}
                        >
                          {value}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-6 py-3 rounded-full font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                      <i className="fas fa-play mr-2"></i>
                      Play Episode
                    </button>
                    <button className="glass-surface border border-white/20 p-3 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40">
                      <i className="fas fa-share"></i>
                    </button>
                    <button className="glass-surface border border-white/20 p-3 rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40">
                      <i className="fas fa-bookmark"></i>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="w-full aspect-square rounded-2xl object-cover shadow-xl shadow-violet-600/20"
                    src={image}
                    alt="modern podcast studio with purple and orange lighting, professional microphone setup, tech workspace aesthetic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-surface p-4 rounded-xl border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Now Playing</span>
                        <span className="text-xs text-slate-400">
                          {currentTime} / {duration}
                        </span>
                      </div>
                      <div className="bg-white/20 rounded-full h-1 mb-3">
                        <div
                          className="bg-gradient-to-r from-violet-400 to-orange-400 h-1 rounded-full"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-white/10 transition-all">
                          <i className="fas fa-backward text-sm"></i>
                        </button>
                        <button className="bg-gradient-to-r from-violet-600 to-orange-500 p-3 rounded-full hover:opacity-95 transition-all">
                          <i className="fas fa-pause"></i>
                        </button>
                        <button className="p-2 rounded-full hover:bg-white/10 transition-all">
                          <i className="fas fa-forward text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisode;
