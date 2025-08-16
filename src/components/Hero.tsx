import { Button } from "@/components/ui/button";
import { Code, Wrench, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-screen min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted flex items-center py-5">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container px-0 md:px-8 mx-auto mb-12 lg:mb-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="flex items-center gap-3 text-primary font-medium">
              <Wrench className="w-5 h-5" />
              <span>De Soldador para Desenvolvedor</span>
              <Code className="w-5 h-5" />
            </div>
            
            <div className="w-screen space-y-6">
              <h1 className="text-3xl text-center md:text-start md:text-5xl lg:text-6xl font-bold leading-tight">
                Olá, eu sou <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Aldomar Assolin</span>
                <span className="block bg-gradient-to-r from-destructive to-primary-glow bg-clip-text text-transparent">
                  Desenvolvedor
                </span>
                <span className="block text-4xl lg:text-5xl">Full Stack</span>
              </h1>
              
              <p className="min-w-screen text-xs sm:text-xl text-muted-foreground leading-relaxed max-w-lg px-2">
                Aos 41 anos, faço minha transição de carreira de soldador para analista de sistemas. 
                Especializado em PHP, Laravel e tecnologias web modernas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-3">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group w-60 mx-auto md:w-auto"
              >
                Ver Projetos
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-60 mx-auto md:w-auto"
              >
                Entrar em Contato
              </Button>
            </div>

            {/* Tech stack indicators */}
            <div className="w-screen flex items-center gap-6 pt-8 border-t border-border/50">
              <span className="text-sm text-muted-foreground">Tecnologias:</span>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground">
                <span className="px-3 py-1 bg-muted rounded-full">PHP</span>
                <span className="px-3 py-1 bg-muted rounded-full">Laravel</span>
                <span className="px-3 py-1 bg-muted rounded-full">Livewire</span>
                <span className="px-3 py-1 bg-muted rounded-full">MySQL</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative px-2 lg:px-0">
            <div className="max-w-sm md:max-w-3xl relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Workspace mostrando transição de soldador para desenvolvedor"
                className="w-screen h-[350px] lg:h-[500px] object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-16 lg:-bottom-6 lg:-left-6 bg-card border border-border rounded-xl p-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Em Transição</p>
                  <p className="text-sm text-muted-foreground">Soldador → Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;