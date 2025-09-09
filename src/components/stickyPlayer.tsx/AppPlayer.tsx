const AppPlayer = () => {
  return (
    <div
      id="mini-player"
      className="fixed bottom-0 left-0 right-0 z-40 glass-surface border-t border-white/20 p-4 transform translate-y-full transition-transform duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-lg object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4867b0625f-678453729d75459b9577.png"
              alt="podcast episode artwork with purple and orange theme"
            />
            <div>
              <div className="font-semibold text-sm">
                The Portfolio That Hired You
              </div>
              <div className="text-xs text-slate-400">EP42 • EchoWave</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
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

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-xs text-slate-400">12:34 / 38:45</div>
            <div className="w-32 bg-white/20 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-violet-400 to-orange-400 h-1 rounded-full"
                style={{ width: " 33%" }}
              ></div>
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="fas fa-volume-high text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPlayer;
