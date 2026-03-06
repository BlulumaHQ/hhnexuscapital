import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const platformData: Record<string, { name: string; category: string; sections: { title: string; content: string }[] }> = {
  "urban-strategic-forum": {
    name: "Urban Strategic Forum Platform",
    category: "City-Level Strategy",
    sections: [
      { title: "Definition", content: "A convening platform that brings together government officials, capital partners, and community leaders to collaboratively shape long-term urban development agendas at the city level." },
      { title: "Services", content: "TBD" },
      { title: "Deliverables", content: "TBD" },
      { title: "Who It Is For", content: "Municipal governments, urban planners, institutional investors, and community development organizations." },
      { title: "Revenue Model", content: "TBD" },
      { title: "Case Studies", content: "TBD" },
    ],
  },
  "public-private-advisory": {
    name: "Public-Private Strategy & Advisory",
    category: "Governance & Policy",
    sections: [
      { title: "Definition", content: "A structured advisory platform that bridges institutional governance and private sector execution, enabling collaborative strategy development between public and private entities." },
      { title: "Services", content: "TBD" },
      { title: "Deliverables", content: "TBD" },
      { title: "Who It Is For", content: "Government agencies, Crown corporations, private enterprises seeking public-sector alignment, and policy advisory organizations." },
      { title: "Revenue Model", content: "TBD" },
      { title: "Case Studies", content: "TBD" },
    ],
  },
  "cultural-ip": {
    name: "International Cultural IP Platform",
    category: "Cultural Development",
    sections: [
      { title: "Definition", content: "A platform dedicated to developing, curating, and licensing cultural intellectual property across international markets and urban centres." },
      { title: "Services", content: "TBD" },
      { title: "Deliverables", content: "TBD" },
      { title: "Who It Is For", content: "Cultural institutions, international brands, urban developers integrating cultural programming, and heritage organizations." },
      { title: "Revenue Model", content: "TBD" },
      { title: "Case Studies", content: "TBD" },
    ],
  },
  "nexus-global-forum": {
    name: "Nexus Global Forum",
    category: "International Convening",
    sections: [
      { title: "Definition", content: "A premier international convening platform connecting global leaders across capital, policy, and cultural sectors to drive cross-border collaboration and strategic alignment." },
      { title: "Services", content: "TBD" },
      { title: "Deliverables", content: "TBD" },
      { title: "Who It Is For", content: "Global institutional leaders, sovereign wealth funds, multinational advisory firms, and international cultural organizations." },
      { title: "Revenue Model", content: "TBD" },
      { title: "Case Studies", content: "TBD" },
    ],
  },
  "industry-capital": {
    name: "Industry & Capital Connection Platform",
    category: "Capital Integration",
    sections: [
      { title: "Definition", content: "A strategic platform facilitating connections between industry operators and institutional capital partners, enabling structured deal flow and long-term investment partnerships." },
      { title: "Services", content: "TBD" },
      { title: "Deliverables", content: "TBD" },
      { title: "Who It Is For", content: "Industry operators seeking capital, institutional investors, family offices, and private equity groups focused on urban and cultural sectors." },
      { title: "Revenue Model", content: "TBD" },
      { title: "Case Studies", content: "TBD" },
    ],
  },
};

const PlatformDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const platform = slug ? platformData[slug] : null;

  if (!platform) {
    return (
      <>
        <Header />
        <main className="bg-background pt-28 pb-20">
          <div className="section-container text-center">
            <h1 className="heading-section mb-4">Platform Not Found</h1>
            <Link to="/platforms" className="text-secondary text-sm font-body">← Back to Platforms</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <Link to="/platforms" className="text-primary-foreground/40 hover:text-secondary text-xs font-body tracking-wide mb-6 inline-block transition-colors">
              ← All Platforms
            </Link>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{platform.category}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1]">
              {platform.name}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="space-y-16">
              {platform.sections.map((section, i) => (
                <div key={i} className="border-b border-border pb-12 last:border-0">
                  <div className="flex items-start gap-6">
                    <span className="text-secondary text-xs font-body tracking-[0.15em] uppercase mt-1 min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
                        {section.title}
                      </h2>
                      <p className="body-large">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PlatformDetail;
