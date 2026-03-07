import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const portfolioCompanies = [
  {
    name: "Aurora AI Systems",
    sector: "AI Infrastructure",
    sectorCn: "AI 基礎設施",
    stage: "Series B",
    year: "2024",
    description: "Aurora AI Systems is building the foundational infrastructure for enterprise artificial intelligence. Their platform enables organizations to deploy, manage, and scale AI models across complex operational environments. With proprietary technology for model optimization and real-time inference, Aurora serves Fortune 500 companies across healthcare, finance, and manufacturing.",
    descriptionCn: "Aurora AI Systems 正在構建企業人工智能的基礎設施。他們的平台使組織能夠在複雜的營運環境中部署、管理和擴展 AI 模型。憑藉模型優化和即時推理的專有技術，Aurora 為醫療保健、金融和製造業的財富500強公司提供服務。",
  },
  {
    name: "Nova Consumer Labs",
    sector: "Consumer Innovation",
    sectorCn: "消費創新",
    stage: "Series A",
    year: "2023",
    description: "Nova Consumer Labs develops next-generation lifestyle brands built on community engagement and digital-first distribution. Their portfolio of brands spans wellness, sustainable fashion, and premium home goods, each leveraging proprietary community platforms to drive organic growth and deep consumer loyalty.",
    descriptionCn: "Nova Consumer Labs 開發建立在社群參與和數位優先分銷基礎上的新世代生活方式品牌。他們的品牌組合涵蓋健康、永續時尚和高端家居用品，每個品牌都利用專有社群平台推動有機增長和深度消費者忠誠。",
  },
  {
    name: "Atlas Media Network",
    sector: "Digital Media",
    sectorCn: "數位媒體",
    stage: "Series B",
    year: "2024",
    description: "Atlas Media Network operates a global digital media platform connecting independent content creators with premium distribution channels. Their technology stack enables creators to produce, distribute, and monetize content across 40+ markets while maintaining creative independence and audience ownership.",
    descriptionCn: "Atlas Media Network 運營全球數位媒體平台，將獨立內容創作者與優質分銷渠道連接起來。他們的技術平台使創作者能夠在40多個市場中製作、分發和變現內容，同時保持創意獨立性和受眾所有權。",
  },
  {
    name: "Cultura Studios",
    sector: "Creative Economy",
    sectorCn: "創意經濟",
    stage: "Seed",
    year: "2025",
    description: "Cultura Studios is a creative economy platform enabling artists, designers, and cultural institutions to build sustainable digital businesses. Their marketplace connects cultural producers with global audiences through curated experiences, digital exhibitions, and collaborative creation tools.",
    descriptionCn: "Cultura Studios 是一個創意經濟平台，幫助藝術家、設計師和文化機構建立可持續的數位業務。他們的市場通過策展體驗、數位展覽和協作創作工具將文化生產者與全球受眾連接起來。",
  },
  {
    name: "Pacific Robotics",
    sector: "Automation Technology",
    sectorCn: "自動化科技",
    stage: "Series A",
    year: "2023",
    description: "Pacific Robotics develops intelligent automation systems for logistics, warehousing, and manufacturing environments. Their adaptive robotics platform combines computer vision, reinforcement learning, and modular hardware to deliver flexible automation solutions that reduce operational costs by up to 60%.",
    descriptionCn: "Pacific Robotics 為物流、倉儲和製造環境開發智能自動化系統。他們的自適應機器人平台結合電腦視覺、強化學習和模組化硬體，提供靈活的自動化解決方案，可將營運成本降低高達60%。",
  },
  {
    name: "Urban Nexus Platform",
    sector: "Strategic Platforms",
    sectorCn: "戰略平台",
    stage: "Pre-Seed",
    year: "2025",
    description: "Urban Nexus Platform is building a smart city collaboration network that connects municipal governments, infrastructure developers, and technology providers. Their platform enables data-driven urban planning, public-private partnership facilitation, and cross-city knowledge sharing for sustainable urban development.",
    descriptionCn: "Urban Nexus Platform 正在構建智慧城市協作網絡，連接市政府、基礎設施開發商和技術提供商。他們的平台實現數據驅動的城市規劃、公私合作促進以及可持續城市發展的跨城市知識共享。",
  },
];

const Portfolio = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Portfolio", "投資組合")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Our <span className="text-secondary">Companies</span></>
              ) : (
                <>我們的<span className="text-secondary">投資企業</span></>
              )}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {t(
                "We invest in visionary founders building transformative companies across AI, consumer innovation, creative economy, and strategic platforms.",
                "我們投資於在 AI、消費創新、創意經濟和策略平台領域建立變革性公司的有遠見創業者。"
              )}
            </p>
          </div>
        </section>

        {/* Logo Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {portfolioCompanies.map((c) => (
                <div key={c.name} className="p-8 bg-card border border-border hover:border-secondary/20 transition-colors text-center">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <span className="text-secondary text-3xl font-display font-bold">
                      {c.name.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-1">{c.name}</h3>
                  <p className="text-xs text-secondary font-body tracking-wide mb-1">
                    {lang === "en" ? c.sector : c.sectorCn}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">{c.stage} · {c.year}</p>
                </div>
              ))}
            </div>

            {/* Detailed Cards */}
            <div className="space-y-8">
              {portfolioCompanies.map((c) => (
                <div key={c.name} className="p-8 md:p-10 bg-card border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">{c.name}</h3>
                      <p className="text-secondary text-sm font-body tracking-wide">
                        {lang === "en" ? c.sector : c.sectorCn}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs text-muted-foreground font-body border border-border px-3 py-1">{c.stage}</span>
                      <span className="text-xs text-muted-foreground font-body border border-border px-3 py-1">{c.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {lang === "en" ? c.description : c.descriptionCn}
                  </p>
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

export default Portfolio;
