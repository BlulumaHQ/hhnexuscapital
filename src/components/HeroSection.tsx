const HeroSection = () => (
  <section className="relative bg-primary min-h-[85vh] flex items-center pt-20">
    <div className="section-container w-full">
      <div className="max-w-3xl">
        <div className="gold-line mb-8" />
        <p className="label-uppercase mb-6">Strategic Holdings &amp; Advisory</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-[1.1] tracking-tight mb-8">
          Building Institutional
          <br />
          Value Across
          <br />
          <span className="text-secondary">British Columbia</span>
        </h1>
        <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          HH Nexus Holdings is a strategic holding group focused on long-term value creation through diversified platforms, disciplined capital deployment, and institutional partnerships.
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
            Contact Us
          </a>
        </div>
      </div>
    </div>
    {/* Subtle gradient overlay */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
