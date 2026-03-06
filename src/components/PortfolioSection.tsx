import { Link } from "react-router-dom";

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="section-container">
      <div className="max-w-2xl mb-16">
        <div className="gold-line mb-6" />
        <p className="label-uppercase mb-4">Portfolio Highlight</p>
        <h2 className="heading-section mb-6">
          Strategic Investments &amp; Holdings
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Link
          to="/portfolio/hsin-hsin-holdings"
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 bg-card border border-border hover:border-secondary/30 transition-colors group"
        >
          <div>
            <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-3 font-body">
              Founded in Vancouver, 1995
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary group-hover:text-secondary transition-colors mb-3">
              HSIN HSIN HOLDINGS LTD.
            </h3>
            <p className="body-large max-w-2xl">
              A diversified group spanning art craftsmanship, education, retail lifestyle, branding & design, and coffee and tea experiences.
            </p>
          </div>
          <span className="mt-4 md:mt-0 text-secondary text-sm font-body tracking-wide whitespace-nowrap">
            View Details →
          </span>
        </Link>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
