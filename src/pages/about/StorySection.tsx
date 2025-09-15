const StorySection = () => {
  return (
    <section id="story" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  EchoWave began in a cramped Nairobi apartment in 2021, born
                  from late-night conversations about the disconnect between
                  what we see in tech media and what's really happening on the
                  ground. As a product designer who'd worked across three
                  continents, I kept meeting incredible people with stories that
                  deserved to be heard.
                </p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  The pandemic gave me the push I needed. With everyone suddenly
                  remote, geography became irrelevant. I could finally have
                  those deep conversations I'd been craving—with founders in
                  Lagos, designers in London, and developers right here in
                  Nairobi.
                </p>
              </div>

              <div className="glass-surface p-8 rounded-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-quote-left text-white text-xl"></i>
                  </div>
                  <blockquote className="text-lg italic text-slate-300">
                    "Every entrepreneur has a moment when everything clicks. I
                    wanted to capture those moments."
                  </blockquote>
                  <cite className="text-sm text-slate-400 mt-4 block">
                    — Sarah Kimani, Host & Founder
                  </cite>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-slate-300 leading-relaxed">
                Three years later, EchoWave has become the trusted voice for
                tech professionals seeking authentic insights. We've featured
                everyone from Y Combinator alumni to bootstrapped SaaS founders,
                always focusing on the human story behind the success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
