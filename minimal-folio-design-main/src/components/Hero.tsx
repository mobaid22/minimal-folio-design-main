
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projeler');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('iletisim');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Merhaba, Ben [Adınız]
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Web Geliştirici & Tasarımcı
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Modern web teknolojileri kullanarak kullanıcı dostu ve etkili çözümler geliştiriyorum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToProjects}>
              Projelerime Göz At
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={scrollToContact}>
              İletişime Geç
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
