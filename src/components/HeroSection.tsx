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
        <p className="text-secondary/80 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-display">
          資本 × 政策 × 文化的城市樞紐
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium tracking-wide hover:border-secondary hover:text-secondary transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
