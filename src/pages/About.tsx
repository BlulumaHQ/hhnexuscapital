import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("About Us", "關於我們")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Urban Strategic<br /><span className="text-secondary">Platform Group</span></>
              ) : (
                <>城市級戰略<br /><span className="text-secondary">平台型資本平台集團</span></>
              )}
            </h1>
          </div>
        </section>

        <AboutSection />

        {/* Mission & Vision */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">{t("Vision", "願景")}</h2>
                <p className="body-large">
                  {lang === "en"
                    ? "To become North America's leading urban strategic platform group."
                    : "成為北美領先的城市級戰略平台集團。"}
                </p>
              </div>
              <div>
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">{t("Mission", "使命")}</h2>
                <p className="body-large">
                  {lang === "en"
                    ? "Integrate capital, governance channels, and international cultural networks into sustainable city-scale platforms."
                    : "整合資本、政策通道與國際文化網絡，打造可持續的城市規模平台。"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
