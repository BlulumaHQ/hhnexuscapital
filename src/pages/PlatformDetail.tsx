import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const platformData: Record<string, {
  name: string;
  nameCn: string;
  category: string;
  categoryCn: string;
  sections: { title: string; titleCn: string; content: string; contentCn: string }[];
}> = {
  "urban-strategic-forum": {
    name: "Urban Strategic Forum Platform",
    nameCn: "城市戰略論壇平台",
    category: "City-Level Strategy",
    categoryCn: "城市級策略",
    sections: [
      { title: "Definition", titleCn: "定義", content: "A convening platform that brings together government officials, capital partners, and community leaders to collaboratively shape long-term urban development agendas at the city level.", contentCn: "一個匯聚政府官員、資本合作夥伴與社區領袖的平台，共同塑造城市層級的長期發展議程。" },
      { title: "Services", titleCn: "服務", content: "Strategic forum design and facilitation, stakeholder engagement and coordination, policy roundtable programming, and leadership summit production.", contentCn: "策略論壇設計與主持、利害關係人參與與協調、政策圓桌策劃，以及領袖峰會製作。" },
      { title: "Deliverables", titleCn: "交付成果", content: "Annual city-level strategy forums, policy briefing documents, stakeholder engagement reports, and post-forum action frameworks.", contentCn: "年度城市策略論壇、政策簡報文件、利害關係人參與報告，以及論壇後行動框架。" },
      { title: "Who It Is For", titleCn: "適用對象", content: "Municipal governments, urban planners, institutional investors, and community development organizations.", contentCn: "市政府、城市規劃師、機構投資者與社區發展組織。" },
      { title: "Revenue Model", titleCn: "營收模式", content: "Sponsorship partnerships, institutional membership programs, forum licensing fees, and strategic advisory retainers.", contentCn: "贊助合作、機構會員計畫、論壇授權費用，以及策略顧問服務費。" },
    ],
  },
  "public-private-advisory": {
    name: "Public-Private Strategy & Advisory",
    nameCn: "公私合作策略顧問",
    category: "Governance & Policy",
    categoryCn: "治理與政策",
    sections: [
      { title: "Definition", titleCn: "定義", content: "A structured advisory platform that bridges institutional governance and private sector execution, enabling collaborative strategy development between public and private entities.", contentCn: "一個結構化的顧問平台，串聯制度治理與民間執行力，促進公私部門之間的策略協作。" },
      { title: "Services", titleCn: "服務", content: "Government relations advisory, public-private partnership structuring, policy alignment consulting, and institutional positioning strategy.", contentCn: "政府關係顧問、公私合作架構設計、政策對齊諮詢，以及機構定位策略。" },
      { title: "Deliverables", titleCn: "交付成果", content: "Strategic advisory reports, partnership framework documents, government engagement roadmaps, and policy alignment assessments.", contentCn: "策略顧問報告、合作框架文件、政府參與路線圖，以及政策對齊評估。" },
      { title: "Who It Is For", titleCn: "適用對象", content: "Government agencies, Crown corporations, private enterprises seeking public-sector alignment, and policy advisory organizations.", contentCn: "政府機構、國營企業、尋求公部門合作的民營企業，以及政策顧問組織。" },
      { title: "Revenue Model", titleCn: "營收模式", content: "Retainer-based advisory engagements, project-based consulting fees, and institutional partnership development programs.", contentCn: "顧問服務費、項目制諮詢費用，以及機構合作開發計畫。" },
    ],
  },
  "cultural-ip": {
    name: "International Cultural IP Platform",
    nameCn: "國際文化 IP 平台",
    category: "Cultural Development",
    categoryCn: "文化發展",
    sections: [
      { title: "Definition", titleCn: "定義", content: "A platform dedicated to developing, curating, and licensing cultural intellectual property across international markets and urban centres.", contentCn: "一個專注於在國際市場與都市中心開發、策劃與授權文化智慧財產的平台。" },
      { title: "Services", titleCn: "服務", content: "Cultural IP development and curation, international licensing program design, festival and exhibition production, and cross-cultural exchange facilitation.", contentCn: "文化 IP 開發與策劃、國際授權計畫設計、節慶與展覽製作，以及跨文化交流促進。" },
      { title: "Deliverables", titleCn: "交付成果", content: "Scalable cultural programming frameworks, licensing agreements, international exhibition concepts, and cultural exchange program blueprints.", contentCn: "可擴展的文化活動框架、授權協議、國際展覽概念，以及文化交流計畫藍圖。" },
      { title: "Who It Is For", titleCn: "適用對象", content: "Cultural institutions, international brands, urban developers integrating cultural programming, and heritage organizations.", contentCn: "文化機構、國際品牌、整合文化項目的城市開發商，以及遺產組織。" },
      { title: "Revenue Model", titleCn: "營收模式", content: "IP licensing fees, cultural programming production commissions, sponsorship integration, and international partnership revenue sharing.", contentCn: "IP 授權費、文化活動製作委託費、贊助整合，以及國際合作收益分潤。" },
    ],
  },
  "nexus-global-forum": {
    name: "Nexus Global Forum",
    nameCn: "Nexus 全球論壇",
    category: "International Convening",
    categoryCn: "國際會議",
    sections: [
      { title: "Definition", titleCn: "定義", content: "A premier international convening platform connecting global leaders across capital, policy, and cultural sectors to drive cross-border collaboration and strategic alignment.", contentCn: "一個頂級國際會議平台，連結全球資本、政策與文化領域的領袖，推動跨境合作與策略對齊。" },
      { title: "Services", titleCn: "服務", content: "Global forum brand development, multi-city expansion planning, institutional dialogue programming, and strategic partnership facilitation.", contentCn: "全球論壇品牌開發、多城市擴展規劃、制度化對話策劃，以及策略合作促進。" },
      { title: "Deliverables", titleCn: "交付成果", content: "Annual flagship forum events, city-specific forum editions, partnership development pipelines, and institutional collaboration frameworks.", contentCn: "年度旗艦論壇活動、城市特定論壇版本、合作開發管道，以及機構協作框架。" },
      { title: "Who It Is For", titleCn: "適用對象", content: "Global institutional leaders, sovereign wealth funds, multinational advisory firms, and international cultural organizations.", contentCn: "全球機構領袖、主權基金、跨國顧問公司與國際文化組織。" },
      { title: "Revenue Model", titleCn: "營收模式", content: "Forum licensing and franchise fees, institutional sponsorship packages, premium membership tiers, and strategic advisory services.", contentCn: "論壇授權與加盟費、機構贊助方案、高級會員層級，以及策略顧問服務。" },
    ],
  },
  "industry-capital": {
    name: "Industry & Capital Connection Platform",
    nameCn: "產業與資本連結平台",
    category: "Capital Integration",
    categoryCn: "資本整合",
    sections: [
      { title: "Definition", titleCn: "定義", content: "A strategic platform facilitating connections between industry operators and institutional capital partners, enabling structured deal flow and long-term investment partnerships.", contentCn: "一個促進產業營運者與機構資本合作夥伴連結的策略平台，實現結構化交易流與長期投資合作。" },
      { title: "Services", titleCn: "服務", content: "Strategic matchmaking between industries and investors, alliance building facilitation, capital connection events, and investment partnership structuring.", contentCn: "產業與投資者策略配對、聯盟建設促進、資本對接活動，以及投資合作架構設計。" },
      { title: "Deliverables", titleCn: "交付成果", content: "Curated investor-industry forums, partnership matching reports, investment pipeline development, and strategic alliance frameworks.", contentCn: "精選投資者-產業論壇、合作配對報告、投資管道開發，以及策略聯盟框架。" },
      { title: "Who It Is For", titleCn: "適用對象", content: "Industry operators seeking capital, institutional investors, family offices, and private equity groups focused on urban and cultural sectors.", contentCn: "尋求資本的產業營運者、機構投資者、家族辦公室，以及專注於城市與文化領域的私募股權集團。" },
      { title: "Revenue Model", titleCn: "營收模式", content: "Success-based advisory fees, capital connection event sponsorships, institutional membership programs, and strategic partnership facilitation retainers.", contentCn: "成功費制顧問費、資本對接活動贊助、機構會員計畫，以及策略合作促進服務費。" },
    ],
  },
};

const PlatformDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const platform = slug ? platformData[slug] : null;

  if (!platform) {
    return (
      <>
        <Header />
        <main className="bg-background pt-28 pb-20">
          <div className="section-container text-center">
            <h1 className="heading-section mb-4">{t("Platform Not Found", "未找到平台")}</h1>
            <Link to="/platforms" className="text-secondary text-sm font-body">
              {t("← Back to Platforms", "← 返回平台架構")}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="section-container relative z-10">
            <Link to="/platforms" className="text-primary-foreground/40 hover:text-secondary text-xs font-body tracking-wide mb-6 inline-block transition-colors">
              {t("← All Platforms", "← 所有平台")}
            </Link>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">
              {lang === "en" ? platform.category : platform.categoryCn}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1]">
              {lang === "en" ? platform.name : platform.nameCn}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="space-y-16">
              {platform.sections.map((section, i) => (
                <div key={i} className="border-b border-border pb-12 last:border-0">
                  <div className="flex items-start gap-6">
                    <span className="text-secondary text-xs font-body tracking-[0.15em] uppercase mt-1 min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
                        {lang === "en" ? section.title : section.titleCn}
                      </h2>
                      <p className="body-large">
                        {lang === "en" ? section.content : section.contentCn}
                      </p>
                    </div>
                  </div>
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

export default PlatformDetail;
