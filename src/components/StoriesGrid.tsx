import { StoryCard } from "@/components/StoryCard";
import { Story } from "@/data/stories";

interface StoriesGridProps {
  stories: Story[];
  onStoryClick: (story: Story) => void;
}

export const StoriesGrid = ({ stories, onStoryClick }: StoriesGridProps) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Nossas Histórias
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Escolha uma história para começar sua aventura bíblica!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onClick={() => onStoryClick(story)}
          />
        ))}
      </div>
    </section>
  );
};
