import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const companies = [
  { name: "Aurora AI Systems", sector: "AI Infrastructure", sectorCn: "AI 基礎設施" },
  { name: "Nova Consumer Labs", sector: "Consumer Innovation", sectorCn: "消費創新" },
  { name: "Atlas Media Network", sector: "Digital Media", sectorCn: "數位媒體" },
  { name: "Cultura Studios", sector: "Creative Economy", sectorCn: "創意經濟" },
  { name: "Pacific Robotics", sector: "Automation", sectorCn: "自動化科技" },
  { name: "Urban Nexus Platform", sector: "Strategic Platforms", sectorCn: "戰略平台" },
];

const PortfolioSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="portfolio" className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">{t("Portfolio", "投資組合")}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-6">
            {t("Companies Shaping the Future", "塑造未來的企業")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((c) => (
            <div
              key={c.name}
              className="border border-primary-foreground/10 p-8 hover:border-secondary/40 transition-colors"
            >
              <div className="h-16 mb-6 flex items-center">
                <span className="text-secondary text-3xl font-display font-bold">
                  {c.name.split(" ").map(w => w[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {c.name}
              </h3>
              <p className="text-primary-foreground/50 text-xs tracking-[0.1em] uppercase font-body">
                {lang === "en" ? c.sector : c.sectorCn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
          >
            {t("View Full Portfolio →", "查看完整投資組合 →")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
