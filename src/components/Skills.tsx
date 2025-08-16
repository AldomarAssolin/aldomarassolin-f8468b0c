import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Palette, Server, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "Livewire", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "AdminLTE", level: 75 },
        { name: "API REST", level: 70 }
      ]
    },
    {
      icon: Database,
      title: "Database",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Migrations", level: 75 },
        { name: "Eloquent ORM", level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: "Ferramentas",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Git", level: 75 },
        { name: "Composer", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "XAMPP", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino em minha jornada como desenvolvedor
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-muted/20 border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Competências Adicionais</h3>
            <p className="text-muted-foreground">Habilidades que trago da minha experiência anterior</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card border-0 shadow-md">
              <h4 className="font-semibold mb-2">Atenção aos Detalhes</h4>
              <p className="text-sm text-muted-foreground">
                Anos de soldagem me ensinaram a importância da precisão em cada trabalho
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-0 shadow-md">
              <h4 className="font-semibold mb-2">Resolução de Problemas</h4>
              <p className="text-sm text-muted-foreground">
                Experiência em diagnosticar e solucionar problemas complexos
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card border-0 shadow-md">
              <h4 className="font-semibold mb-2">Trabalho sob Pressão</h4>
              <p className="text-sm text-muted-foreground">
                Capacidade de manter qualidade mesmo em situações desafiadoras
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;