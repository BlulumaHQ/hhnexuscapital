import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const partnershipTypes = [
  "Strategic Investment",
  "Joint Venture",
  "Advisory Partnership",
  "Technology Partnership",
  "Government / Public Sector",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Inquiry Submitted",
        description: "Thank you. Our team will review your inquiry and respond within 48 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              Partnership <span className="text-secondary">Inquiries</span>
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              For partnership, investment, or advisory inquiries, please complete the form below. Our team will respond within 48 hours.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <p className="label-uppercase mb-6">Personal Information</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-body text-foreground">Name *</Label>
                    <Input id="name" name="name" required placeholder="Full name" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-sm font-body text-foreground">Organization *</Label>
                    <Input id="organization" name="organization" required placeholder="Company or institution" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-body text-foreground">Role</Label>
                    <Input id="role" name="role" placeholder="Title or position" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-body text-foreground">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="name@organization.com" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-body text-foreground">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (000) 000-0000" className="bg-card border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-body text-foreground">City / Region</Label>
                    <Input id="city" name="city" placeholder="City, Province" className="bg-card border-border" />
                  </div>
                </div>
              </div>

              {/* Partnership Details */}
              <div>
                <p className="label-uppercase mb-6">Partnership Details</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="partnershipType" className="text-sm font-body text-foreground">Partnership Type *</Label>
                    <Select name="partnershipType" required>
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {partnershipTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-sm font-body text-foreground">Timeline</Label>
                    <Select name="timeline">
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (0–3 months)</SelectItem>
                        <SelectItem value="short">Short-term (3–6 months)</SelectItem>
                        <SelectItem value="medium">Medium-term (6–12 months)</SelectItem>
                        <SelectItem value="long">Long-term (12+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="budget" className="text-sm font-body text-foreground">Budget Range</Label>
                    <Select name="budget">
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select range" />
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
                <Label htmlFor="description" className="text-sm font-body text-foreground">Project Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  placeholder="Describe the nature of your inquiry, project scope, and objectives."
                  className="bg-card border-border resize-none"
                />
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <Label htmlFor="attachments" className="text-sm font-body text-foreground">Attachments</Label>
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
                {submitting ? "Submitting..." : "Submit Inquiry"}
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
