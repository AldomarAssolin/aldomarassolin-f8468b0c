import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Palette } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão Laravel",
      description: "Sistema completo de gestão empresarial desenvolvido com Laravel e Livewire. Inclui autenticação, CRUD completo, relatórios e dashboard administrativo.",
      technologies: ["PHP", "Laravel", "Livewire", "MySQL", "TailwindCSS"],
      category: "Full Stack",
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Dashboard AdminLTE",
      description: "Painel administrativo responsivo utilizando AdminLTE com integração Laravel. Interface moderna para gerenciamento de usuários e relatórios.",
      technologies: ["Laravel", "AdminLTE", "Bootstrap", "MySQL", "Chart.js"],
      category: "Backend",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Landing Page Responsiva",
      description: "Página de apresentação moderna e responsiva utilizando as melhores práticas de desenvolvimento frontend com TailwindCSS.",
      technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      category: "Frontend",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meus Projetos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projetos desenvolvidos durante minha jornada de aprendizado em desenvolvimento web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/20">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${project.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" variant="default" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Interessado em colaborar?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia 
              ou precisa de ajuda com desenvolvimento web, vamos conversar!
            </p>
            <Button variant="hero" size="lg">
              Vamos Trabalhar Juntos
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;