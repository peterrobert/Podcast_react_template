import { Fragment } from "react/jsx-runtime";
import EpisodeCard from "../../components/episodeCard";
import type { Episode } from "../../types";

const LatestEpisode = ({ data = [] }: { data: Episode[] }) => {
  const displayEpisodes = () => {
    const results = data.map((value) => {
      return (
        <Fragment key={value.id}>
          <EpisodeCard {...value} />
        </Fragment>
      );
    });

    return results;
  };

  return (
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
  );
};

export default LatestEpisode;
