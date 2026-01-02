import Box from "../../Components/UI/Box";
import Container from "../../Components/UI/Container";
export default function Home() {
    return ( 
      //May include a photo later
            //also may change the coding architecture to include these text as a components for reusablilty
            //another thing to note: don't put anything in the box, it will appear
        <Box>
            <h1 className="text-2xl text-center text-brand-text p-4">Hi, I'm Yeremi Navarrete</h1>
            <h2 className="text-4xl text-center text-brand-bt p-4"> Creative Developer & Designer</h2>
            <p className="text-center text-brand-text p-8"> I specialized in crafting engaging digitial experiences through innovative web development and design. Welcome to my portfolio!</p>
            <Container>
                {/* Future buttons for portfolio navigation */}
                <p className="text-brand-text">[Portfolio Buttons Coming Soon]</p>
                <p className="text-brand-text">[Contact Buttons Coming Soon]</p>
            </Container>

            <Container>
                {/* Future social media links */}
                <p className="text-brand-text">[Social Media Links Coming Soon]</p>
                <p className="text-brand-text">[GitHub Link Coming Soon]</p>
                <p className="text-brand-text">[LinkedIn Link Coming Soon]</p>
                <p className="text-brand-text">[Twitter Link Coming Soon]</p> 
            </Container>
        </Box>
    );
}

