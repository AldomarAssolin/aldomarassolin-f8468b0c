import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    tipo_contato: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.tipo_contato) {
      toast({
        title: "Selecione o tipo de contato",
        description: "Escolha uma opção antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    try {

      const response = await fetch('https://teste-n8n.ennj8e.easypanel.host/webhook/portfolio-contato',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Retornarei em breve!",
        });
        setFormData({ name: '', email: '', telefone: '', tipo_contato: '', message: '' });
      } else {
        toast({
          title: "Erro ao Enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Falha na conexão",
        description: "Não foi possível conectar ao servidor.",
        variant: "destructive",
      })
    };

    // toast({
    //   title: "Mensagem enviada!",
    //   description: "Obrigado pelo contato. Retornarei em breve!",
    // });
    // setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "assolinaldomar@gmail.com",
      href: "mailto:assolinaldomar@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(55) 99618-6446",
      href: "tel:+5555996186446",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Brasil",
      href: "#",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/aldomarassolin",
      href: "https://www.linkedin.com/in/aldomarassolin",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vamos Conversar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-card to-muted/20 border-0">
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className={`w-12 h-12 rounded-full ${info.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary-glow/5 border border-primary/20">
              <h4 className="text-xl font-semibold mb-3">Pronto para começar?</h4>
              <p className="text-muted-foreground mb-4">
                Se você está procurando por um desenvolvedor dedicado e em constante
                evolução, com uma perspectiva única vinda da experiência industrial,
                eu adoraria fazer parte do seu próximo projeto.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/AldomarAssolin" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/aldomarassolin" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="text"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="99999999999"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipo_contato">Assunto</Label>
                <Select value={formData.tipo_contato} onValueChange={(v) => setFormData((prev) => ({ ...prev, tipo_contato: v }))}>
                  <SelectTrigger id="tipo_contato"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oportunidade">Oportunidade de trabalho</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="colaboracao">Colaboração</SelectItem>
                    <SelectItem value="outros">outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;