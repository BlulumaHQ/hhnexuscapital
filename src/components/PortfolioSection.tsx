const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="section-container">
      <div className="max-w-2xl mb-16">
        <div className="gold-line mb-6" />
        <p className="label-uppercase mb-4">Portfolio</p>
        <h2 className="heading-section mb-6">
          Strategic Investments &amp; Holdings
        </h2>
        <p className="body-large">
          Our portfolio reflects a disciplined approach to long-term value creation across sectors critical to British Columbia's economic development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { sector: "Real Estate & Infrastructure", status: "Active" },
          { sector: "Technology & Digital Services", status: "Active" },
          { sector: "Natural Resources", status: "TBD" },
          { sector: "Professional Services", status: "TBD" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-6 md:p-8 bg-card border border-border hover:border-secondary/30 transition-colors"
          >
            <div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-primary">
                {item.sector}
              </h3>
            </div>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground font-body">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
