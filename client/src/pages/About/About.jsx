import { Box, Container, ProjectCard } from "../../Components";
export default function About() {
    return (
        <Box className="py-12">
            <header className="max-w-3xl mb-12">
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <p className="text-lg text-gray-700 mb-4"> I'm a passionate developer and designer with a love for creating exceptional digital experiences.</p>
                <p className="text-lg text-gray-700 mb-4"> With a strong foundation in both frontend and backend technologies, I strive to build scalable and user-friendly applications.</p>
                <p className="font-semibold text-brand-bt mt-8">What I bring to the table:</p>
            </header>

            <Container cols="grid-cols-1 md:grid-cols-3" className="gap-6">
                <ProjectCard title="Clean Code" subtitle="Writing maintainable and scalable code that stands the test of time." />
                <ProjectCard title="Beautiful Design" subtitle="Crafting visually stunning and user-friendly interfaces." />
                <ProjectCard title="Performance" subtitle="Optimizing for speed and efficiency in every project" />
                <ProjectCard title="Quality First" subtitle="Delivering High-quality solutions that exceed expectation" />
                <ProjectCard title="Collaboration" subtitle="Working closely with teams and stakeholders" />
                <ProjectCard title="Passion" subtitle="Loving what I do and constanly learning new things." />
            </Container>
        </Box>
    );
}