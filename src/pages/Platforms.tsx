import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const platforms = [
  {
    slug: "urban-strategic-forum",
    name: "Urban Strategic Forum Platform",
    category: "City-Level Strategy",
    description: "Convening government, capital, and community leaders to shape long-term urban development agendas.",
  },
  {
    slug: "public-private-advisory",
    name: "Public-Private Strategy & Advisory",
    category: "Governance & Policy",
    description: "Bridging institutional governance and private sector execution through structured advisory frameworks.",
  },
  {
    slug: "cultural-ip",
    name: "International Cultural IP Platform",
    category: "Cultural Development",
    description: "Developing and licensing cultural intellectual property across international markets and urban centres.",
  },
  {
    slug: "nexus-global-forum",
    name: "Nexus Global Forum",
    category: "International Convening",
    description: "A premier convening platform connecting global leaders across capital, policy, and cultural sectors.",
  },
  {
    slug: "industry-capital",
    name: "Industry & Capital Connection Platform",
    category: "Capital Integration",
    description: "Facilitating strategic connections between industry operators and institutional capital partners.",
  },
];

const Platforms = () => (
  <>
    <Header />
    <main>
      <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="section-container">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">Five Strategic Platforms</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
            Urban Influence <span className="text-secondary">Platforms</span>
          </h1>
          <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Each platform integrates capital, policy collaboration, and cultural IP development to structure long-term city-level influence.
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
