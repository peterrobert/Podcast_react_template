const BioSection = () => {
  return (
    <section
      id="host-bio"
      className="py-20 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/5 to-orange-500/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* <!-- Bio Content --> */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                  Meet{" "}
                  <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                    Sarah
                  </span>
                </h2>
                <p className="text-xl text-slate-400">
                  Host, Founder & Chief Conversation Officer
                </p>
              </div>

              <div className="prose prose-invert prose-lg max-w-none mb-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                  Sarah Kimani is a product designer turned entrepreneur who's
                  spent the last decade building digital experiences for
                  companies from seed-stage startups to Fortune 500s. Born and
                  raised in Nairobi, she's worked across Kenya, Nigeria, the UK,
                  and Canada.
                </p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Her journey through the tech ecosystem—from junior designer to
                  founding her own design consultancy—gave her unique insights
                  into what really drives success in technology. She started
                  EchoWave to share these insights with the next generation of
                  builders and creators.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  When she's not recording episodes, you'll find her mentoring
                  designers through ADPList, writing about African tech
                  ecosystems, or exploring Nairobi's incredible coffee scene.
                </p>
              </div>

              {/* <!-- Achievements --> */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-surface p-4 rounded-xl border border-white/20">
                  <div className="text-lg font-bold text-violet-300 mb-1">
                    Forbes 30 Under 30
                  </div>
                  <div className="text-sm text-slate-400">Technology, 2023</div>
                </div>
                <div className="glass-surface p-4 rounded-xl border border-white/20">
                  <div className="text-lg font-bold text-violet-300 mb-1">
                    Design Week Awards
                  </div>
                  <div className="text-sm text-slate-400">
                    Digital Innovation, 2022
                  </div>
                </div>
                <div className="glass-surface p-4 rounded-xl border border-white/20">
                  <div className="text-lg font-bold text-violet-300 mb-1">
                    TEDx Speaker
                  </div>
                  <div className="text-sm text-slate-400">Nairobi, 2021</div>
                </div>
                <div className="glass-surface p-4 rounded-xl border border-white/20">
                  <div className="text-lg font-bold text-violet-300 mb-1">
                    Y Combinator
                  </div>
                  <div className="text-sm text-slate-400">
                    Startup School, 2020
                  </div>
                </div>
              </div>

              {/* <!-- Social Links --> */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">Connect with Sarah</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="glass-surface border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center cursor-pointer">
                    <i className="fab fa-twitter mr-2"></i>
                    @sarahkimani
                  </span>
                  <span className="glass-surface border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center cursor-pointer">
                    <i className="fab fa-linkedin mr-2"></i>
                    LinkedIn
                  </span>
                  <span className="glass-surface border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center cursor-pointer">
                    <i className="fas fa-envelope mr-2"></i>
                    Email
                  </span>
                  <span className="glass-surface border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center cursor-pointer">
                    <i className="fab fa-instagram mr-2"></i>
                    Instagram
                  </span>
                </div>
              </div>

              {/* <!-- Contact CTA --> */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                  <i className="fas fa-microphone mr-3"></i>
                  Book Sarah as Guest
                </button>
                <button className="glass-surface border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-violet-400/40 flex items-center">
                  <i className="fas fa-calendar mr-3"></i>
                  Speaking Inquiries
                </button>
              </div>
            </div>

            {/* <!-- Host Images Grid --> */}
            <div className="space-y-6">
              {/* <!-- Main Professional Photo --> */}
              <div className="relative">
                <img
                  className="w-full aspect-[4/5] rounded-2xl object-cover shadow-xl shadow-violet-600/20"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  alt="Sarah Kimani professional headshot"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
              </div>

              {/* <!-- Behind the Scenes Grid --> */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="aspect-square rounded-xl object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4867b0625f-678453729d75459b9577.png"
                  alt="Sarah in podcast studio"
                />
                <img
                  className="aspect-square rounded-xl object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a08b67957a-bb9510fe9cd750d50164.png"
                  alt="Sarah speaking at tech event"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
