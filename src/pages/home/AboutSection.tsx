const AboutSection = () => {
  return (
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
                EchoWave started as a simple idea: what if we could capture the
                unfiltered thoughts of the people shaping our digital future?
                Three years and 42 episodes later, we've become the go-to
                podcast for tech professionals seeking authentic insights.
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
                  <div className="text-2xl font-bold text-violet-300">3.2M</div>
                  <div className="text-xs text-slate-400">Total Downloads</div>
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
  );
};

export default AboutSection;
