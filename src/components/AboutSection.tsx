import { useLanguage } from "@/context/LanguageContext";

const valuesEn = [
  { title: "Integrity", desc: "Principled conduct in every engagement and decision." },
  { title: "Institutional Collaboration", desc: "Structured partnerships with public and private institutions." },
  { title: "Long-termism", desc: "Patient capital and strategy built for enduring impact." },
  { title: "Cultural Respect", desc: "Honouring diverse traditions and international heritage." },
  { title: "Execution Excellence", desc: "Disciplined delivery across every platform and initiative." },
];

const valuesZh = [
  { title: "誠信正直", desc: "在每一次合作與決策中堅守原則。" },
  { title: "制度協作", desc: "與公私機構建立結構化合作關係。" },
  { title: "長期主義", desc: "以耐心資本與策略追求持久影響力。" },
  { title: "文化尊重", desc: "尊重多元傳統與國際文化遺產。" },
  { title: "執行卓越", desc: "在每個平台與項目中展現紀律性交付能力。" },
];

const AboutSection = () => {
  const { lang, t } = useLanguage();
  const values = lang === "en" ? valuesEn : valuesZh;

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("What We Are", "我們是誰")}</p>
            <h2 className="heading-section mb-6">
              {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
            </h2>
          </div>
          <div>
            {lang === "en" ? (
              <>
                <p className="body-large mb-6">
                  We are not an event company, not a traditional PR firm, and not merely an investment vehicle.
                </p>
                <p className="body-large">
                  HH Nexus builds institutional, repeatable city platforms—linking government collaboration, private-sector coalitions, and cultural IP into long-term influence systems.
                </p>
              </>
            ) : (
              <>
                <p className="body-large mb-6">
                  我們不是活動公司、不是傳統公關、也不只是投資公司。
                </p>
                <p className="body-large">
                  衡寰打造的是制度化、可複製的城市平台：把政府協作、企業聯盟與文化 IP 結構化整合，形成長期可運作的城市影響力系統。
                </p>
              </>
            )}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 mt-16 md:mt-24 pt-16 border-t border-border">
          {values.map((value) => (
            <div key={value.title}>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
