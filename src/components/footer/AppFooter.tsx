const AppFooter = () => {
  return (
    <footer
      id="footer"
      className="py-16 bg-slate-900/50 border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* <!-- Brand --> */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-wave-square text-white text-sm"></i>
                </div>
                <span className="text-xl font-display font-bold tracking-tight">
                  EchoWave
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Deep conversations with tech leaders, creatives, and innovators
                shaping tomorrow. Join our community of forward-thinking
                professionals.
              </p>
              <div className="flex items-center space-x-4">
                <span className="p-2 rounded-full glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="p-2 rounded-full glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="p-2 rounded-full glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </span>
                <span className="p-2 rounded-full glass-surface border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    All Episodes
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    Be a Guest
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    Newsletter
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                    Contact
                  </span>
                </li>
              </ul>
            </div>

            {/* <!-- Listen On --> */}
            <div>
              <h4 className="font-bold mb-4">Listen On</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors flex items-center cursor-pointer">
                    <i className="fab fa-spotify mr-2"></i>Spotify
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors flex items-center cursor-pointer">
                    <i className="fab fa-apple mr-2"></i>Apple Podcasts
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors flex items-center cursor-pointer">
                    <i className="fab fa-google mr-2"></i>Google Podcasts
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 hover:text-white transition-colors flex items-center cursor-pointer">
                    <i className="fas fa-rss mr-2"></i>RSS Feed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 EchoWave Podcast. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
