import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

interface HeroProps {
  onExplore: () => void;
}

export const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 248, 255, 0.9), rgba(240, 248, 255, 0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Histórias Bíblicas para Crianças
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Descubra a Bíblia de Forma{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Divertida
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Histórias sagradas interativas, ilustrações coloridas e muito aprendizado para crianças de 5 a 12 anos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button 
              size="xl" 
              variant="default"
              onClick={onExplore}
              className="group"
            >
              <BookOpen className="w-6 h-6 transition-transform group-hover:rotate-12" />
              Explorar Histórias
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
            >
              Para Pais e Educadores
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
