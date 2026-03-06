import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const PortfolioSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">{t("Portfolio", "旗下事業")}</p>
          <h2 className="heading-section mb-6">
            {t("Strategic Investments & Holdings", "策略性投資與控股事業")}
          </h2>
          <p className="body-large mb-6">
            {lang === "en"
              ? "Our holding structure connects strategic platforms with operating assets. Key operating portfolio includes HSIN HSIN HOLDINGS LTD., a diversified Vancouver-based business group with strong multi-industry execution capability."
              : "我們以控股架構串聯平台型業務與營運型資產群。核心營運資產包含欣欣控股有限公司（HSIN HSIN HOLDINGS LTD.），一個深耕溫哥華並具跨產業執行能力的多元企業群。"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Link
            to="/portfolio/hsin-hsin-holdings"
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 bg-card border border-border hover:border-secondary/30 transition-colors group"
          >
            <div>
              <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-3 font-body">
                {t("Founded in Vancouver, 1995", "創立於溫哥華，1995年")}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary group-hover:text-secondary transition-colors mb-3">
                HSIN HSIN HOLDINGS LTD.
              </h3>
              <p className="body-large max-w-2xl">
                {lang === "en"
                  ? "A diversified group spanning art craftsmanship, education, retail lifestyle, branding & design, and coffee and tea experiences."
                  : "一個涵蓋工藝美學、教育、生活零售、品牌設計與咖啡茶體驗的多元企業群。"}
              </p>
            </div>
            <span className="mt-4 md:mt-0 text-secondary text-sm font-body tracking-wide whitespace-nowrap">
              {t("View Details →", "查看詳情 →")}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
