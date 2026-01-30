import {Box, ButtonInteration, Container, ProjectCard} from "../../Components";

export default function Home() {
    return ( 
      //May include a photo later
            //also may change the coding architecture to include these text as a components for reusablilty
            //another thing to note: don't put anything in the box, it will appear
        <Box centered={true} >
            <h1 className="text-2xl text-center text-brand-text p-2">Hi, I'm Yeremi Navarrete</h1>
            <h2 className="text-4xl text-center text-brand-bt"> Creative Developer & Designer</h2>
            <p className="text-center text-brand-text p-8"> I specialized in crafting engaging digitial experiences through innovative web development and design. Welcome to my portfolio!</p>
            <Container>
                {/* Future buttons for portfolio navigation */}
                <ButtonInteration>View My Work<span>→</span></ButtonInteration>
                <ButtonInteration>Get In Touch<span>→</span></ButtonInteration>
            </Container>

            <Container cols="grid-cols-2 md:grid-cols-3" className="max-w-5xl mx-auto w-full">
                {/* Future social media links */}
                <ProjectCard title="GitHub" subtitle="See my projects"  onClick={() => window.open("/Project", "_blank")}/>
                <ProjectCard title="About" subtitle="Learn about my me"  onClick={() => window.open("/about", "_self")}/>
                <ProjectCard title="Contact" subtitle={"Get in touch"}  onClick={() => window.open("/contact", "_self")}/>
            </Container>
        </Box>
    );
}

