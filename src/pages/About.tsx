import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <>
    <Header />
    <main>
      {/* Page Hero */}
      <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="section-container">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
            Urban Strategic
            <br />
            <span className="text-secondary">Platform Group</span>
          </h1>
          <p className="font-display text-lg text-primary-foreground/50 mt-4">衡寰國際控股有限公司</p>
        </div>
      </section>

      <AboutSection />

      {/* Mission & Vision */}
      <section className="section-padding bg-card border-t border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h2 className="font-display text-2xl font-semibold text-primary mb-4">Vision</h2>
              <p className="body-large">
                To become North America's leading urban strategic platform group.
              </p>
            </div>
            <div>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h2 className="font-display text-2xl font-semibold text-primary mb-4">Mission</h2>
              <p className="body-large">
                Integrate capital, governance channels, and international cultural networks into sustainable city-scale platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
