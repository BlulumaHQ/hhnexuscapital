import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanPlatforms = [
  { name: "TBD", sector: "TBD", slug: "urban-1" },
  { name: "TBD", sector: "TBD", slug: "urban-2" },
];

const operatingAssets = [
  { name: "TBD", sector: "TBD", slug: "asset-1" },
  { name: "TBD", sector: "TBD", slug: "asset-2" },
];

const PortfolioGroup = ({ title, items }: { title: string; items: typeof urbanPlatforms }) => (
  <div className="mb-16 last:mb-0">
    <div className="gold-line mb-4" />
    <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item) => (
        <Link
          key={item.slug}
          to={`/portfolio/${item.slug}`}
          className="block p-8 bg-card border border-border hover:border-secondary/30 transition-colors group"
        >
          <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-3 font-body">{item.sector}</p>
          <h3 className="font-display text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
            {item.name}
          </h3>
          <span className="inline-block mt-4 text-secondary text-sm font-body tracking-wide">View Details →</span>
        </Link>
      ))}
    </div>
  </div>
);

const Portfolio = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="section-container">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Portfolio / Subsidiaries</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
            Strategic Investments & <span className="text-secondary">Holdings</span>
          </h1>
          <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Our portfolio reflects a disciplined approach to long-term value creation across sectors critical to British Columbia's economic development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <PortfolioGroup title="Urban Platforms" items={urbanPlatforms} />
          <PortfolioGroup title="Operating Assets" items={operatingAssets} />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Portfolio;
