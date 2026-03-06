import { Link } from "react-router-dom";

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

const PlatformsSection = () => (
  <section id="platforms" className="section-padding bg-primary">
    <div className="section-container">
      <div className="max-w-2xl mb-16">
        <div className="gold-line mb-6" />
        <p className="label-uppercase mb-4">Five Strategic Platforms</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-6">
          Urban Influence Through Structured Platforms
        </h2>
        <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed">
          Each platform operates with independent governance while integrating capital, policy collaboration, and cultural IP development at the city level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((p) => (
          <Link
            key={p.slug}
            to={`/platforms/${p.slug}`}
            className="border border-primary-foreground/10 p-8 md:p-10 hover:border-secondary/40 transition-colors group block"
          >
            <p className="text-secondary text-xs font-medium tracking-[0.2em] uppercase mb-4 font-body">
              {p.category}
            </p>
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4 group-hover:text-secondary transition-colors">
              {p.name}
            </h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              {p.description}
            </p>
            <span className="inline-block mt-6 text-secondary text-sm font-body tracking-wide">
              View Platform →
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformsSection;
