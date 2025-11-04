import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, BookOpen, Volume2 } from "lucide-react";
import { stories } from "@/data/stories";
import creationImg from "@/assets/creation.jpg";
import noahsArkImg from "@/assets/noahs-ark.jpg";
import davidGoliathImg from "@/assets/david-goliath.jpg";
import jesusImg from "@/assets/jesus-feeds.jpg";
import samaritanImg from "@/assets/good-samaritan.jpg";
import prodigalImg from "@/assets/prodigal-son.jpg";

const imageMap: Record<string, string> = {
  creation: creationImg,
  'noahs-ark': noahsArkImg,
  'david-goliath': davidGoliathImg,
  'jesus-feeds-5000': jesusImg,
  'good-samaritan': samaritanImg,
  'prodigal-son': prodigalImg,
};

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = stories.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">História não encontrada</h1>
          <Button onClick={() => navigate("/")}>Voltar para início</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2" />
          Voltar
        </Button>

        <Card className="overflow-hidden">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img
              src={imageMap[story.id] || story.imageUrl}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {story.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{story.readTime} minutos de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>
                  {story.ageGroup === "all"
                    ? "Todas as idades"
                    : `${story.ageGroup} anos`}
                </span>
              </div>
            </div>

            <Button variant="secondary" className="mb-8">
              <Volume2 className="mr-2" />
              Ouvir História (em breve)
            </Button>

            <div className="prose prose-lg max-w-none">
              {story.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed mb-4 text-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-4">
                Gostou desta história?
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore mais histórias incríveis da Bíblia!
              </p>
              <Button size="lg" onClick={() => navigate("/")}>
                Ver Mais Histórias
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StoryDetail;
