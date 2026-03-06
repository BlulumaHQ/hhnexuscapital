import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const partnershipTypesEn = [
  "Strategic Investment",
  "Joint Venture",
  "Advisory Partnership",
  "Technology Partnership",
  "Government / Public Sector",
  "Other",
];

const partnershipTypesZh = [
  "策略投資",
  "合資企業",
  "顧問合作",
  "技術合作",
  "政府 / 公共部門",
  "其他",
];

const Contact = () => {
  const { toast } = useToast();
  const { lang, t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const partnershipTypes = lang === "en" ? partnershipTypesEn : partnershipTypesZh;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: t("Inquiry Submitted", "已提交洽詢"),
        description: t(
          "Thank you. Our team will review your inquiry and respond within 48 hours.",
          "感謝您。我們的團隊將在 48 小時內審閱並回覆您的洽詢。"
        ),
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Contact", "聯絡我們")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Partnership <span className="text-secondary">Inquiries</span></>
              ) : (
                <>合作<span className="text-secondary">洽詢</span></>
              )}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {lang === "en"
                ? "For partnership, investment, or advisory inquiries, please complete the form below. Our team will respond within 48 hours."
                : "如有合作、投資或顧問諮詢需求，請填寫以下表單。我們的團隊將在 48 小時內回覆。"}
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <p className="label-uppercase mb-6">{t("Personal Information", "個人資訊")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-body text-foreground">{t("Name *", "姓名 *")}</Label>
                    <Input id="name" name="name" required placeholder={t("Full name", "全名")} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-sm font-body text-foreground">{t("Organization *", "機構 *")}</Label>
                    <Input id="organization" name="organization" required placeholder={t("Company or institution", "公司或機構")} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-body text-foreground">{t("Role", "職稱")}</Label>
                    <Input id="role" name="role" placeholder={t("Title or position", "職稱或職位")} className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-body text-foreground">{t("Email *", "電子信箱 *")}</Label>
                    <Input id="email" name="email" type="email" required placeholder="name@organization.com" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-body text-foreground">{t("Phone", "電話")}</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-body text-foreground">{t("City / Region", "城市 / 地區")}</Label>
                    <Input id="city" name="city" placeholder={t("City, Province", "城市、省份")} className="bg-card border-border" />
                  </div>
                </div>
              </div>

              {/* Partnership Details */}
              <div>
                <p className="label-uppercase mb-6">{t("Partnership Details", "合作細節")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="partnershipType" className="text-sm font-body text-foreground">{t("Partnership Type *", "合作類型 *")}</Label>
                    <Select name="partnershipType" required>
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder={t("Select type", "選擇類型")} />
                      </SelectTrigger>
                      <SelectContent>
                        {partnershipTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-sm font-body text-foreground">{t("Timeline", "時程")}</Label>
                    <Select name="timeline">
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder={t("Select timeline", "選擇時程")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">{t("Immediate (0–3 months)", "立即（0–3 個月）")}</SelectItem>
                        <SelectItem value="short">{t("Short-term (3–6 months)", "短期（3–6 個月）")}</SelectItem>
                        <SelectItem value="medium">{t("Medium-term (6–12 months)", "中期（6–12 個月）")}</SelectItem>
                        <SelectItem value="long">{t("Long-term (12+ months)", "長期（12 個月以上）")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="budget" className="text-sm font-body text-foreground">{t("Budget Range", "預算範圍")}</Label>
                    <Select name="budget">
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder={t("Select range", "選擇範圍")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100k">Under $100K</SelectItem>
                        <SelectItem value="100k-500k">$100K – $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K – $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M – $5M</SelectItem>
                        <SelectItem value="over-5m">$5M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-body text-foreground">{t("Project Description *", "項目說明 *")}</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  placeholder={t(
                    "Describe the nature of your inquiry, project scope, and objectives.",
                    "請描述您的洽詢性質、項目範圍與目標。"
                  )}
                  className="bg-card border-border resize-none"
                />
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <Label htmlFor="attachments" className="text-sm font-body text-foreground">{t("Attachments", "附件")}</Label>
                <Input
                  id="attachments"
                  name="attachments"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpg"
                  className="bg-card border-border file:text-secondary file:font-body"
                />
                <p className="text-xs text-muted-foreground font-body">PDF, DOC, XLS, PPT, PNG, JPG — Max 10MB each</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center px-10 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors font-body disabled:opacity-50"
              >
                {submitting ? t("Submitting...", "提交中...") : t("Submit Inquiry", "提交洽詢")}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
