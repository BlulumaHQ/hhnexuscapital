const HeroSection = () => (
  <section className="relative bg-primary min-h-[85vh] flex items-center pt-20">
    <div className="section-container w-full">
      <div className="max-w-3xl">
        <div className="gold-line mb-8" />
        <p className="label-uppercase mb-6">Urban Strategic Platform Group</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-[1.1] tracking-tight mb-8">
          Where Capital Meets
          <br />
          Governance and
          <br />
          <span className="text-secondary">Culture</span>
        </h1>
        <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl leading-relaxed mb-3">
          Structuring Long-Term Urban Influence Platforms.
        </p>

        <div className="mt-8 mb-10">
          <p className="font-display text-lg md:text-xl text-secondary/90 mb-1">
            衡寰國際控股有限公司
          </p>
          <p className="text-primary-foreground/50 text-sm md:text-base font-body mb-1">
            城市級戰略平台型控股集團
          </p>
          <p className="text-secondary/80 text-base md:text-lg max-w-xl leading-relaxed font-display">
            資本 × 政策 × 文化的城市樞紐
          </p>
          <p className="text-primary-foreground/50 text-sm md:text-base max-w-xl leading-relaxed font-body">
            以制度化平台，構建長期城市影響力
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
          >
            Become a Partner
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium tracking-wide hover:border-secondary hover:text-secondary transition-colors"
          >
            Download Company Profile
          </a>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
