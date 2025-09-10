import { Fragment } from "react/jsx-runtime";
import EpisodeCard from "../../components/episodeCard";
import type { Episode } from "../../types";

const EpisodesSection = ({ data = [] }: { data: Episode[] }) => {
  const displayEpisodes = () => {
    if (data.length === 0)
      return (
        <section id="empty-state" className="py-20 hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-violet-600/20 to-orange-500/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-search text-4xl text-slate-400"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">No Episodes Found</h3>
                <p className="text-slate-400 mb-8">
                  We couldn't find any episodes matching your search criteria.
                  Try adjusting your filters or search terms.
                </p>
                <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-6 py-3 rounded-full font-semibold hover:opacity-95 transition-all">
                  Reset All Filters
                </button>
              </div>
            </div>
          </div>
        </section>
      );

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
    <>
      <section
        id="toolbar"
        className="py-8 sticky top-16 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* <!-- Main Search --> */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-search text-slate-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search episodes, topics, guests..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl glass-surface border border-white/20 focus:outline-none focus:ring-4 focus:ring-violet-400/40 focus:border-violet-400/50 placeholder-slate-400 text-lg"
                  id="episode-search"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <div className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                    ⌘K
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* <!-- Sort Dropdown --> */}
                <div className="relative">
                  <select className="glass-surface border border-white/20 px-4 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-400/40 appearance-none pr-10 cursor-pointer">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Longest Duration</option>
                    <option>Shortest Duration</option>
                    <option>Most Popular</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fas fa-chevron-down text-slate-400"></i>
                  </div>
                </div>

                {/* <!-- View Toggle --> */}
                <div className="flex items-center glass-surface border border-white/20 rounded-xl p-1">
                  <button className="p-3 rounded-lg bg-violet-600 text-white transition-all">
                    <i className="fas fa-th text-sm"></i>
                  </button>
                  <button className="p-3 rounded-lg hover:bg-white/10 transition-all">
                    <i className="fas fa-list text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="episodes-grid" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* --- Display Episodes --- */}
              {displayEpisodes()}
            </div>
          </div>
        </div>
      </section>

      <section id="pagination" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-400">
                Showing <span className="text-white font-medium">1-12</span> of{" "}
                <span className="text-white font-medium">42</span> episodes
              </div>

              <div className="flex items-center space-x-2">
                <button
                  className="glass-surface border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  <i className="fas fa-chevron-left mr-2"></i>
                  Previous
                </button>

                <div className="flex items-center space-x-2">
                  <button className="bg-gradient-to-r from-violet-600 to-orange-500 w-10 h-10 rounded-xl font-medium">
                    1
                  </button>
                  <button className="glass-surface border border-white/20 w-10 h-10 rounded-xl hover:bg-white/10 transition-all">
                    2
                  </button>
                  <button className="glass-surface border border-white/20 w-10 h-10 rounded-xl hover:bg-white/10 transition-all">
                    3
                  </button>
                  <span className="text-slate-400 px-2">...</span>
                  <button className="glass-surface border border-white/20 w-10 h-10 rounded-xl hover:bg-white/10 transition-all">
                    4
                  </button>
                </div>
                <button className="glass-surface border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
                  Next
                  <i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EpisodesSection;
