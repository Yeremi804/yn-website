import { Box, TransformButton } from "../../Components";

export default function Contact() {
  const handleContactClick = () => {
    console.log("Contact button clicked");
    // add form open, navigation, or other action here
  };

  return (
    <Box centered={true}>
      <TransformButton onClick={handleContactClick}>
        <div className="text-left">
          <h3 className="text-lg font-semibold">Contact Me</h3>
          <p className="text-sm text-brand-text">Tap to open the contact form or send a message.</p>
        </div>
      </TransformButton>
    </Box>
  );
}
