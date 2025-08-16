import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, MapPin, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-8 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de transformação profissional guiada pela paixão por tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Minha História</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aos 41 anos, decidi fazer uma mudança corajosa na minha carreira. 
                    Deixei para trás anos de experiência como soldador para mergulhar 
                    no mundo da programação. Esta transição representa não apenas uma 
                    mudança profissional, mas uma transformação pessoal.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Por que Programação?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A programação sempre foi uma paixão silenciosa. A possibilidade de 
                    criar soluções digitais, resolver problemas complexos e estar em 
                    constante aprendizado me motivou a fazer esta transição. 
                    Minha experiência anterior me ensinou disciplina e atenção aos detalhes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">41</p>
                <p className="text-sm text-muted-foreground">Anos de Idade</p>
              </Card>
              
              <Card className="p-4 text-center bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-lg font-semibold">Brasil</p>
                <p className="text-sm text-muted-foreground">Localização</p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Competências Desenvolvidas</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Experiência Anterior</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Soldagem</Badge>
                    <Badge variant="secondary">Precisão</Badge>
                    <Badge variant="secondary">Trabalho em Equipe</Badge>
                    <Badge variant="secondary">Resolução de Problemas</Badge>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Soft Skills</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Disciplina</Badge>
                    <Badge variant="outline">Adaptabilidade</Badge>
                    <Badge variant="outline">Determinação</Badge>
                    <Badge variant="outline">Aprendizado Contínuo</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;