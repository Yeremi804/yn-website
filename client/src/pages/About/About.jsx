import { Box, Container, ProjectCard } from "../../Components";
export default function About() {
    return (
        <Box>
            <h1>About Me</h1>
            <p> I'm passionate developer and designer with a love for creating exceptional digital experiences.</p>
            <p> With a strong foundation in both frontend and backend technologies, I strive to build scalable and user-friendly applications.</p>
            <p>what I bring to the table</p>
            <Container cols="grid-cols-3 md:grid-cols-3" >
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