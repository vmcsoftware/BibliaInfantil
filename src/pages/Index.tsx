import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { StoriesGrid } from "@/components/StoriesGrid";
import { stories } from "@/data/stories";
import { Story } from "@/data/stories";

const Index = () => {
  const navigate = useNavigate();

  const handleStoryClick = (story: Story) => {
    navigate(`/story/${story.id}`);
  };

  const handleExplore = () => {
    const storiesSection = document.getElementById("stories");
    storiesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onExplore={handleExplore} />
      <div id="stories">
        <StoriesGrid stories={stories} onStoryClick={handleStoryClick} />
      </div>
    </div>
  );
};

export default Index;
