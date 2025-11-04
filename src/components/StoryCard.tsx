import { Card } from "@/components/ui/card";
import { Clock, BookOpen } from "lucide-react";
import { Story } from "@/data/stories";

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

const categoryColors: Record<Story['category'], string> = {
  creation: 'bg-primary',
  heroes: 'bg-secondary',
  miracles: 'bg-accent',
  teachings: 'bg-coral',
  parables: 'bg-primary',
};

const categoryLabels: Record<Story['category'], string> = {
  creation: 'Criação',
  heroes: 'Heróis',
  miracles: 'Milagres',
  teachings: 'Ensinamentos',
  parables: 'Parábolas',
};

export const StoryCard = ({ story, onClick }: StoryCardProps) => {
  return (
    <Card 
      variant="interactive" 
      onClick={onClick}
      className="overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${categoryColors[story.category]}`}>
          {categoryLabels[story.category]}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {story.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {story.summary}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{story.readTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>
              {story.ageGroup === 'all' ? 'Todas idades' : `${story.ageGroup} anos`}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
