
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="hakkimda" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Hakkımda
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop"
                    alt="Profil Fotoğrafı"
                    className="w-full h-96 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Merhaba! Ben bir web geliştirici ve tasarımcıyım. Modern web teknolojileri 
                kullanarak kullanıcı dostu, responsive ve performanslı web siteleri geliştiriyorum.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                5 yılı aşkın deneyimimle React, TypeScript, Node.js ve modern CSS framework'leri 
                konularında uzmanlaştım. Her projede kullanıcı deneyimini ön planda tutarak, 
                işlevsel ve estetik çözümler üretmeye odaklanıyorum.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  React
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
