import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const platforms = [
  {
    slug: "real-estate",
    name: "TBD",
    category: "Real Estate & Development",
    description: "TBD",
  },
  {
    slug: "technology",
    name: "TBD",
    category: "Technology & Innovation",
    description: "TBD",
  },
  {
    slug: "advisory",
    name: "TBD",
    category: "Advisory & Consulting",
    description: "TBD",
  },
];

const Platforms = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="section-container">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Our Platforms</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
            Diversified Operating <span className="text-secondary">Platforms</span>
          </h1>
          <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Each platform operates with independent governance while benefiting from shared institutional resources, strategic oversight, and cross-platform synergies.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8">
            {platforms.map((p) => (
              <Link
                key={p.slug}
                to={`/platforms/${p.slug}`}
                className="block border border-border p-8 md:p-12 hover:border-secondary/40 transition-colors group bg-card"
              >
                <p className="label-uppercase mb-4">{p.category}</p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {p.name}
                </h2>
                <p className="body-large max-w-2xl">{p.description}</p>
                <span className="inline-block mt-6 text-secondary text-sm font-body tracking-wide">
                  View Platform →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Platforms;
