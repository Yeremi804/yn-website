import { useState } from "react";
import { Box, TransformButton } from "../../Components";
import ContactForm from "../../Components/UI/ContanctForm.jsx";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm(true);
  };

  return (
    <Box centered={true}>
      {!showForm && (
        <TransformButton onClick={handleContactClick}>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <p className="text-sm text-brand-text">
              Tap to open the contact form or send a message.
            </p>
          </div>
        </TransformButton>
      )}

      {showForm && (
        <div className="mt-6">
          <ContactForm />
        </div>
      )}
    </Box>
  );
}
