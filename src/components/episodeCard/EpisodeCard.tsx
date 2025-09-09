const EpisodeCard = () => {
  return (
    <>
      <div className="glass-surface p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all group">
        <div className="flex items-center justify-between mb-4">
          <span className="glass-surface px-3 py-1 rounded-full text-xs font-medium border border-white/20">
            EP41
          </span>
          <span className="text-xs text-slate-400">42 min</span>
        </div>

        <img
          className="w-full aspect-video rounded-xl mb-4 object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7d594c33f0-2e9edb4a58588f18e11c.png"
          alt="creative workspace with design tools and sketches, warm lighting"
        />

        <h3 className="text-lg font-bold mb-2 group-hover:text-violet-300 transition-colors">
          Design Systems That Scale
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          Building consistent experiences across teams with Emma Rodriguez from
          Figma.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="glass-surface px-2 py-1 rounded-full text-xs border border-white/20">
            Design
          </span>
          <span className="glass-surface px-2 py-1 rounded-full text-xs border border-white/20">
            Systems
          </span>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-gradient-to-r from-violet-600 to-orange-500 p-2 rounded-full hover:opacity-95 transition-all">
            <i className="fas fa-play text-sm"></i>
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="fas fa-share text-xs"></i>
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="fas fa-bookmark text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodeCard;
