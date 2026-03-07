import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const About = () => {
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
            <p className="label-uppercase mb-4">{t("About Us", "關於我們")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Global Investment & <span className="text-secondary">Strategic Platform</span></>
              ) : (
                <>全球投資與<span className="text-secondary">戰略平台</span></>
              )}
            </h1>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <div className="gold-line mb-6" />
                <p className="label-uppercase mb-4">{t("Who We Are", "我們是誰")}</p>
                <h2 className="heading-section mb-6">
                  {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
                </h2>
              </div>
              <div>
                <p className="body-large mb-6">
                  {t(
                    "HH Nexus Capital is a global investment and strategic platform headquartered in Vancouver, Canada. We invest in companies and platforms shaping the future of technology, culture, and global consumer ecosystems.",
                    "衡寰資本是一家總部位於加拿大溫哥華的全球投資與戰略平台。我們投資於塑造科技、文化與全球消費生態系統未來的公司和平台。"
                  )}
                </p>
                <p className="body-large">
                  {t(
                    "Our strategy focuses on identifying visionary founders and supporting them through long-term capital, strategic partnerships, and global network access across North America and Asia.",
                    "我們的策略專注於發掘有遠見的創業者，並透過長期資本、策略合作與遍布北美和亞洲的全球網絡支持他們。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">{t("Vision", "願景")}</h2>
                <p className="body-large">
                  {t(
                    "To become a leading global investment platform connecting capital with the most transformative companies in technology, culture, and consumer innovation.",
                    "成為連結資本與科技、文化和消費創新領域最具變革性公司的領先全球投資平台。"
                  )}
                </p>
              </div>
              <div>
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">{t("Mission", "使命")}</h2>
                <p className="body-large">
                  {t(
                    "To identify and support visionary founders building companies that shape global industries, powered by long-term capital, strategic partnerships, and cross-border network access.",
                    "發掘和支持正在建設塑造全球行業的公司的有遠見創業者，以長期資本、策略合作和跨境網絡為動力。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-12">{t("Our Values", "我們的價值觀")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: t("Long-Term Thinking", "長期思維"), desc: t("Patient capital aligned with founder vision and company-building timelines.", "耐心資本與創業者願景和公司建設時間線一致。") },
                { title: t("Global Perspective", "全球視野"), desc: t("Cross-border investment strategy connecting North American innovation with Asian markets.", "連接北美創新與亞洲市場的跨境投資策略。") },
                { title: t("Founder-First", "創業者優先"), desc: t("Deep respect for founder autonomy and entrepreneurial vision.", "深度尊重創業者的自主權和創業願景。") },
                { title: t("Strategic Value", "策略價值"), desc: t("Active support beyond capital through partnerships, networks, and operational expertise.", "透過合作、網絡和營運專業知識提供超越資本的積極支持。") },
                { title: t("Integrity", "誠信正直"), desc: t("Principled conduct and transparency in every engagement and decision.", "在每一次合作與決策中堅守原則和透明度。") },
              ].map((value) => (
                <div key={value.title}>
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{value.desc}</p>
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

export default About;
