const AppNavigation = () => {
  return (
    <nav
      id="navigation"
      className="sticky top-0 z-50 bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <!-- Logo --> */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full flex items-center justify-center">
              <i className="fas fa-wave-square text-white text-sm"></i>
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              EchoWave
            </span>
          </div>

          {/* <!-- Desktop Navigation --> */}
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-white hover:text-violet-300 transition-colors font-medium cursor-pointer">
              Home
            </span>
            <span className="text-white hover:text-violet-300 transition-colors font-medium cursor-pointer">
              Episodes
            </span>
            <span className="text-white hover:text-violet-300 transition-colors font-medium cursor-pointer">
              About
            </span>
            <span className="text-white hover:text-violet-300 transition-colors font-medium cursor-pointer">
              Contact
            </span>
          </div>

          {/* <!-- Actions --> */}
          <div className="flex items-center space-x-4">
            <button
              id="search-toggle"
              className="p-2 rounded-full glass-surface hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40"
            >
              <i className="fas fa-search text-sm"></i>
            </button>

            <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-4 py-2 rounded-full text-sm font-medium hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavigation;
