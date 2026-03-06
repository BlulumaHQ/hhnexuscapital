const platforms = [
  {
    name: "TBD",
    category: "Real Estate & Development",
    description: "TBD",
  },
  {
    name: "TBD",
    category: "Technology & Innovation",
    description: "TBD",
  },
  {
    name: "TBD",
    category: "Advisory & Consulting",
    description: "TBD",
  },
];

const PlatformsSection = () => (
  <section id="platforms" className="section-padding bg-primary">
    <div className="section-container">
      <div className="max-w-2xl mb-16">
        <div className="gold-line mb-6" />
        <p className="label-uppercase mb-4">Our Platforms</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-6">
          Diversified Operating Platforms
        </h2>
        <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed">
          Each platform operates with independent governance while benefiting from shared institutional resources, strategic oversight, and cross-platform synergies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map((p, i) => (
          <div
            key={i}
            className="border border-primary-foreground/10 p-8 md:p-10 hover:border-secondary/40 transition-colors group"
          >
            <p className="text-secondary text-xs font-medium tracking-[0.2em] uppercase mb-4 font-body">
              {p.category}
            </p>
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4">
              {p.name}
            </h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformsSection;
