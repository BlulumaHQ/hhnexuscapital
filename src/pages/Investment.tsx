import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const Investment = () => {
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
            <p className="label-uppercase mb-4">{t("Investment", "投資策略")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Investment <span className="text-secondary">Thesis</span></>
              ) : (
                <>投資<span className="text-secondary">理念</span></>
              )}
            </h1>
          </div>
        </section>

        {/* Thesis */}
        <section className="section-padding bg-background">
          <div className="section-container max-w-4xl">
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-8">{t("Our Philosophy", "我們的理念")}</h2>
            <div className="space-y-6">
              <p className="body-large">
                {t(
                  "HH Nexus Capital invests in companies and platforms shaping the future of technology, culture, and global consumer ecosystems.",
                  "衡寰資本投資於塑造科技、文化與全球消費生態系統未來的公司和平台。"
                )}
              </p>
              <p className="body-large">
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
        </section>

        {/* Investment Focus */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-12">{t("Investment Focus", "投資重點")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: t("AI & Emerging Technology", "AI 與新興科技"),
                  desc: t(
                    "Artificial intelligence, automation, data platforms, and next-generation infrastructure. We invest in foundational AI companies building the tools and systems that will power the next decade of innovation. Our focus spans machine learning platforms, enterprise AI solutions, and advanced data infrastructure that enables scalable intelligence across industries.",
                    "人工智能、自動化、數據平台與下一代基礎設施。我們投資於建立工具和系統的基礎 AI 公司，為下一個十年的創新提供動力。我們的重點涵蓋機器學習平台、企業 AI 解決方案和先進的數據基礎設施。"
                  ),
                },
                {
                  title: t("Consumer Innovation", "消費創新"),
                  desc: t(
                    "Community-driven brands, lifestyle platforms, and digital consumer ecosystems. We back founders who are reimagining how consumers discover, engage with, and build loyalty to brands. From direct-to-consumer platforms to social commerce and subscription ecosystems, we invest in the next wave of consumer behaviour.",
                    "社群驅動品牌、生活方式平台與數位消費生態系統。我們支持正在重新定義消費者如何發現、參與和建立品牌忠誠度的創業者。從直接面向消費者的平台到社交商務和訂閱生態系統。"
                  ),
                },
                {
                  title: t("Culture & Creative Economy", "文化與創意經濟"),
                  desc: t(
                    "Media, arts, cultural platforms, and the global experience economy. The creative economy represents one of the fastest-growing sectors globally. We invest in platforms that enable creators, artists, and cultural institutions to build sustainable businesses while preserving artistic integrity and cultural significance.",
                    "媒體、藝術、文化平台與全球體驗經濟。創意經濟代表著全球增長最快的行業之一。我們投資於幫助創作者、藝術家和文化機構建立可持續業務的平台，同時保持藝術完整性和文化重要性。"
                  ),
                },
                {
                  title: t("Strategic Platforms", "戰略平台"),
                  desc: t(
                    "Platforms that connect industries and create scalable network effects. We invest in marketplace and network businesses that sit at critical intersections of commerce, information, and community. These platforms grow stronger with scale and create compounding value for all participants in their ecosystem.",
                    "連結產業並創造可擴展網絡效應的平台。我們投資於位於商業、資訊和社群關鍵交匯點的市場和網絡業務。這些平台隨著規模的增長而變得更強大，為生態系統中的所有參與者創造複合價值。"
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="p-8 md:p-10 bg-background border border-border">
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h3 className="font-display text-xl font-semibold text-primary mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding bg-primary">
          <div className="section-container max-w-4xl">
            <div className="gold-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-8">
              {t("Our Approach", "我們的方法")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("Long-Term Capital", "長期資本"),
                  desc: t("Patient investment horizons aligned with founder vision and company-building timelines.", "耐心的投資期限與創業者願景和公司建設時間線一致。"),
                },
                {
                  title: t("Strategic Partnerships", "策略合作"),
                  desc: t("Active support connecting portfolio companies to industry leaders, distribution channels, and global markets.", "積極支持，將投資組合公司連結到行業領導者、分銷渠道和全球市場。"),
                },
                {
                  title: t("Global Network", "全球網絡"),
                  desc: t("Access to institutional partners, advisors, and operational expertise across North America and Asia.", "接觸遍布北美和亞洲的機構合作夥伴、顧問和營運專業知識。"),
                },
              ].map((item) => (
                <div key={item.title} className="border border-primary-foreground/10 p-8">
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">{item.desc}</p>
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

export default Investment;
