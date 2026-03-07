import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const InvestmentThesisSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Investment Thesis", "投資理念")}</p>
            <h2 className="heading-section mb-6">
              {lang === "en" ? (
                <>Investing at the Intersection of <span className="text-secondary">Innovation & Culture</span></>
              ) : (
                <>投資於<span className="text-secondary">創新與文化</span>的交匯點</>
              )}
            </h2>
          </div>
          <div>
            <p className="body-large mb-6">
              {t(
                "HH Nexus Capital invests in companies and platforms shaping the future of technology, culture, and global consumer ecosystems.",
                "衡寰資本投資於塑造科技、文化與全球消費生態系統未來的公司和平台。"
              )}
            </p>
            <p className="body-large mb-6">
              {t(
                "We believe the next generation of opportunity lies at the intersection of innovation, creativity, and global connectivity.",
                "我們相信下一代機遇在於創新、創造力與全球連結的交匯點。"
              )}
            </p>
            <p className="body-large">
              {t(
                "Our strategy focuses on identifying visionary founders and supporting them through long-term capital, strategic partnerships, and global network access.",
                "我們的策略專注於發掘有遠見的創業者，並透過長期資本、策略合作與全球網絡支持他們。"
              )}
            </p>
          </div>
        </div>

        {/* Investment Focus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-24 pt-16 border-t border-border">
          {[
            {
              title: t("AI & Emerging Technology", "AI 與新興科技"),
              desc: t(
                "Artificial intelligence, automation, data platforms, and next-generation infrastructure.",
                "人工智能、自動化、數據平台與下一代基礎設施。"
              ),
            },
            {
              title: t("Consumer Innovation", "消費創新"),
              desc: t(
                "Community-driven brands, lifestyle platforms, and digital consumer ecosystems.",
                "社群驅動品牌、生活方式平台與數位消費生態系統。"
              ),
            },
            {
              title: t("Culture & Creative Economy", "文化與創意經濟"),
              desc: t(
                "Media, arts, cultural platforms, and the global experience economy.",
                "媒體、藝術、文化平台與全球體驗經濟。"
              ),
            },
            {
              title: t("Strategic Platforms", "戰略平台"),
              desc: t(
                "Platforms that connect industries and create scalable network effects.",
                "連結產業並創造可擴展網絡效應的平台。"
              ),
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/investment"
            className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
          >
            {t("Learn More About Our Strategy →", "了解更多投資策略 →")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesisSection;
