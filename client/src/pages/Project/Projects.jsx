import { Box, Container, ProjectCard } from "../../Components";
export default function Projects() {
    return (
        <Box>
           <h1 className="text-brand-text">Featured Projects</h1>
           <p>A Selection of my recent work showcasing various skills and technologies.</p>
           <Container cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Project cards with website screenshots */}
              <ProjectCard title="RetroReplay" subtitle="Collaboration with Team member and Creation for Commercial Product using WaterFall Model" imageUrl="https://api.microlink.io/?url=https://retroreplay.vercel.app/credits&screenshot=true&meta=false&embed=screenshot.url" onClick={() => window.open("https://retroreplay.vercel.app/credits", "_blank")}/>
              <ProjectCard title="YN Portfolio" subtitle="My Personal Portfolio Website built with React and Tailwind CSS" imageUrl="https://api.microlink.io/?url=https://github.com/Yeremi804&screenshot=true&meta=false&embed=screenshot.url" onClick={() => window.open("https://github.com/Yeremi804", "_blank")}/>
            </Container>
        </Box>
    )
}
