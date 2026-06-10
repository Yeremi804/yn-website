import {
  Box,
  ButtonInteration,
  Container,
  ProjectCard,
} from "../../Components";
import { useNavigate } from "react-router-dom";
import profileImg from "../../assets/Yeremi Navarrete.jpg";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box centered={true} className="flex-1 py-12">
      <section className="flex flex-col items-center max-w-3xl mx-auto mb-12">
        <h1 className="text-2xl text-center text-brand-text p-2">
          Hi, I'm Yeremi Navarrete
        </h1>
        <div className="w-30 h-48 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-brand-text ring-opacity-30 hover:scale-[1.03] transition-transform duration-300 mb-6">
          <img
            src={profileImg}
            alt="Yeremi Navarrete is standing tall and proper"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl text-center text-brand-bt font-bold">
          {" "}
          Creative Developer & Designer
        </h2>
        <p className="text-center text-brand-text py-6 px-4">
          I specialize in crafting engaging digital experiences through
          innovative web development and design. Welcome to my portfolio!
        </p>
        <div className="flex gap-4 justify-center mt-4">
          <ButtonInteration onClick={() => handleNavigate("/project")}>
            View My Work <span>→</span>
          </ButtonInteration>
          <ButtonInteration onClick={() => handleNavigate("/contact")}>
            Get In Touch <span>→</span>
          </ButtonInteration>
        </div>
      </section>

      <Container
        cols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        className="max-w-5xl mx-auto w-full gap-6"
      >
        {/* Future social media links */}
        <ProjectCard
          title="Projects"
          subtitle="See my latest work"
          onClick={() => navigate("/project")}
        />
        <ProjectCard
          title="About"
          subtitle="Learn about my journey"
          onClick={() => navigate("/about")}
        />
        <ProjectCard
          title="Contact"
          subtitle={"Get in touch"}
          onClick={() => navigate("/contact")}
        />
      </Container>
    </Box>
  );
}
