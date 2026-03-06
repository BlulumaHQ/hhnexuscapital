import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          {/* Operating Assets */}
          <div className="mb-16">
            <div className="gold-line mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">Operating Assets</h2>
            <div className="grid grid-cols-1 gap-6">
              <Link
                to="/portfolio/hsin-hsin-holdings"
                className="block p-8 md:p-12 bg-card border border-border hover:border-secondary/30 transition-colors group"
              >
                <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-3 font-body">Founded in Vancouver, 1995</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary group-hover:text-secondary transition-colors mb-3">
                  HSIN HSIN HOLDINGS LTD.
                </h3>
                <p className="body-large max-w-2xl">
                  A diversified group spanning art craftsmanship, education, retail lifestyle, branding & design, and coffee and tea experiences.
                </p>
                <span className="inline-block mt-6 text-secondary text-sm font-body tracking-wide">View Details →</span>
              </Link>
            </div>
          </div>

          {/* Urban Platforms */}
          <div>
            <div className="gold-line mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">Urban Platforms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Urban Strategic Forum Platform", slug: "urban-strategic-forum" },
                { name: "Public-Private Strategy & Advisory", slug: "public-private-advisory" },
                { name: "International Cultural IP Platform", slug: "cultural-ip" },
                { name: "Nexus Global Forum", slug: "nexus-global-forum" },
                { name: "Industry & Capital Connection Platform", slug: "industry-capital" },
              ].map((item) => (
                <Link
                  key={item.slug}
                  to={`/platforms/${item.slug}`}
                  className="block p-8 bg-card border border-border hover:border-secondary/30 transition-colors group"
                >
                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <span className="inline-block mt-4 text-secondary text-sm font-body tracking-wide">View Platform →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Portfolio;
