import { Box, Container, ProjectCard } from "../../Components";
export default function Projects() {
  return (
    <Box className="py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-brand-text mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-600">
          A selection of my recent work showcasing various skills and
          technologies.
        </p>
      </header>

      <Container
        cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        className="gap-8"
      >
        {/* Project cards with website screenshots */}
        <ProjectCard
          title="RetroReplay"
          subtitle="Collaboration with Team member and Creation for Commercial Product using WaterFall Model"
          imageUrl="https://api.microlink.io/?url=https://retroreplay.vercel.app/credits&screenshot=true&meta=false&embed=screenshot.url"
          onClick={() =>
            window.open("https://retroreplay.vercel.app/credits", "_blank")
          }
        />
        <ProjectCard
          title="YN Portfolio"
          subtitle="My Personal Portfolio Website built with React and Tailwind CSS"
          imageUrl="https://api.microlink.io/?url=https://github.com/Yeremi804&screenshot=true&meta=false&embed=screenshot.url"
          onClick={() => window.open("https://github.com/Yeremi804", "_blank")}
        />
        <ProjectCard
          title="Project 3"
          subtitle="Description of project 3"
          imageUrl="https://via.placeholder.com/400x300"
          onClick={() =>
            window.open("https://dans-computer-repair.vercel.app/", "_blank")
          }
        />
      </Container>
    </Box>
  );
}
