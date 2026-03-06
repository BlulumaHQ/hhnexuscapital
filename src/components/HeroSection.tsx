import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/45" />

      <div className="section-container w-full relative z-10">
        <div className="max-w-3xl">
          <div className="gold-line mb-8" />
          <p className="font-display text-xl md:text-2xl text-primary-foreground font-semibold tracking-wide mb-2">
            {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
          </p>
          <p className="label-uppercase mb-6">
            {t("Urban Strategic Platform Group", "城市級戰略平台型資本平台集團")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-[1.1] tracking-tight mb-8">
            {lang === "en" ? (
              <>
                Where Capital Meets
                <br />
                Governance and
                <br />
                <span className="text-secondary">Culture</span>
              </>
            ) : (
              <>
                資本 × 政策 × 文化的
                <br />
                <span className="text-secondary">城市樞紐</span>
              </>
            )}
          </h1>
          <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl leading-relaxed mb-3">
            {t(
              "Structuring Long-Term Urban Influence Platforms.",
              "以制度化平台，構建長期城市影響力"
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
            >
              {t("Become a Partner", "合作洽談")}
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium tracking-wide hover:border-secondary hover:text-secondary transition-colors"
            >
              {t("Download Company Profile", "下載公司簡介")}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;