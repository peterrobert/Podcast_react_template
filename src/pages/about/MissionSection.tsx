const MissionSection = () => {
  return (
    <section
      id="mission"
      className="py-20 bg-gradient-to-r from-violet-600/5 via-fuchsia-500/5 to-orange-500/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              To bridge the gap between inspiration and action by sharing
              authentic stories from the people building tomorrow's technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* <!-- Authenticity --> */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Authenticity</h3>
              <p className="text-slate-400 leading-relaxed">
                Real conversations, real challenges, real solutions. We skip the
                PR speak and dive into what actually matters.
              </p>
            </div>

            {/* <!-- Diversity --> */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-globe-africa text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
              <p className="text-slate-400 leading-relaxed">
                Innovation happens everywhere. We amplify voices from emerging
                markets alongside Silicon Valley veterans.
              </p>
            </div>

            {/* <!-- Impact --> */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Actionable Impact</h3>
              <p className="text-slate-400 leading-relaxed">
                Every episode should leave you with something you can apply.
                Knowledge without action is just entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
