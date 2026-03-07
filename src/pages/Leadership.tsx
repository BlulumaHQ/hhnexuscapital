import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const Leadership = () => {
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
            <p className="label-uppercase mb-4">{t("Leadership", "領導團隊")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Our <span className="text-secondary">Team</span></>
              ) : (
                <>我們的<span className="text-secondary">團隊</span></>
              )}
            </h1>
          </div>
        </section>

        {/* Founder */}
        <section className="section-padding bg-background">
          <div className="section-container max-w-4xl">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Founder", "創辦人")}</p>
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="w-full aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center">
                  <span className="text-6xl font-display text-secondary/30 font-bold">EL</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="font-display text-3xl font-semibold text-primary mb-2">Emily Lin</h2>
                <p className="text-secondary text-sm font-body tracking-wide mb-6">
                  {t("Founder & Managing Partner", "創辦人兼執行合夥人")}
                </p>
                <div className="space-y-4">
                  <p className="body-large">
                    {t(
                      "Emily Lin is an entrepreneur, investor, and strategic platform builder with experience across brand strategy, cultural platforms, and global partnerships.",
                      "Emily Lin 是一位企業家、投資者和策略平台建設者，在品牌策略、文化平台和全球合作方面擁有豐富經驗。"
                    )}
                  </p>
                  <p className="body-large">
                    {t(
                      "She founded HH Nexus Capital to connect capital with visionary founders and emerging industries across technology, culture, and global consumer ecosystems.",
                      "她創立衡寰資本，將資本與有遠見的創業者以及科技、文化和全球消費生態系統中的新興產業聯繫起來。"
                    )}
                  </p>
                  <p className="body-large">
                    {t(
                      "Her work focuses on building platforms that bridge creativity, innovation, and long-term capital.",
                      "她的工作專注於建立連結創造力、創新和長期資本的平台。"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Team */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Investment Team", "投資團隊")}</p>
            <h2 className="heading-section mb-12">{t("Partners & Directors", "合夥人與總監")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-10 bg-background border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 flex-shrink-0 bg-primary/5 border border-border flex items-center justify-center">
                    <span className="text-2xl font-display text-secondary/30 font-bold">DC</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-1">Daniel Chen</h3>
                    <p className="text-secondary text-sm font-body tracking-wide mb-4">
                      {t("Partner – Technology Investments", "合夥人 – 科技投資")}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">
                      {t(
                        "Daniel focuses on AI infrastructure, software platforms, and data-driven innovation. He brings deep expertise in evaluating technology companies at growth stage and has led investments across enterprise SaaS, machine learning infrastructure, and developer tools.",
                        "Daniel 專注於 AI 基礎設施、軟體平台和數據驅動創新。他在評估成長階段科技公司方面擁有深厚的專業知識，並主導了企業 SaaS、機器學習基礎設施和開發者工具的投資。"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 bg-background border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 flex-shrink-0 bg-primary/5 border border-border flex items-center justify-center">
                    <span className="text-2xl font-display text-secondary/30 font-bold">SZ</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-1">Sophia Zhang</h3>
                    <p className="text-secondary text-sm font-body tracking-wide mb-4">
                      {t("Investment Director – Consumer & Culture", "投資總監 – 消費與文化")}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">
                      {t(
                        "Sophia specializes in consumer brands, cultural economy platforms, and global creative ventures. She identifies opportunities at the intersection of lifestyle, community, and digital commerce, with a focus on brands that build deep consumer loyalty through authentic cultural engagement.",
                        "Sophia 專注於消費品牌、文化經濟平台和全球創意企業。她在生活方式、社群和數位商務的交匯點發掘機會，重點關注透過真實文化參與建立深厚消費者忠誠度的品牌。"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="section-padding bg-background border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Advisors", "顧問")}</p>
            <h2 className="heading-section mb-12">{t("Strategic Advisors", "策略顧問")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-1">Michael Turner</h3>
                <p className="text-secondary text-sm font-body tracking-wide mb-4">
                  {t("Global Strategy Advisor", "全球策略顧問")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {t(
                    "Former executive advisor for international investment platforms. Michael brings decades of experience in cross-border investment strategy, institutional fund structuring, and global market entry. He has advised sovereign wealth funds, family offices, and institutional investors across North America, Europe, and Asia.",
                    "前國際投資平台高管顧問。Michael 在跨境投資策略、機構基金架構和全球市場進入方面擁有數十年經驗。他曾為主權財富基金、家族辦公室和遍布北美、歐洲和亞洲的機構投資者提供諮詢。"
                  )}
                </p>
              </div>
              <div className="p-8 bg-card border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-1">Kenji Tanaka</h3>
                <p className="text-secondary text-sm font-body tracking-wide mb-4">
                  {t("Asia Market Advisor", "亞洲市場顧問")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {t(
                    "Expert in cross-border partnerships between North America and Asia. Kenji specializes in bridging Western innovation ecosystems with Asian capital markets and consumer landscapes. His network spans technology ventures in Tokyo, Singapore, and Seoul, with deep expertise in cultural adaptation strategies for market entry.",
                    "北美與亞洲跨境合作專家。Kenji 專注於將西方創新生態系統與亞洲資本市場和消費景觀連結起來。他的網絡遍及東京、新加坡和首爾的科技企業，在市場進入的文化適應策略方面擁有深厚的專業知識。"
                  )}
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

export default Leadership;
