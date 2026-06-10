function ContactForm({
  initialValues = { name: "", email: "", subject: "", message: "" },
  buttonText = "Send",
}) {
  return (
    <form className="bg-white p-6 shadow-md w-full max-w-md mx-auto rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-brand-bt">
        Contact Me
      </h2>

      <label htmlFor="name" className="text-sm font-medium mb-2 block">
        Name
      </label>
      <input
        name="name"
        id="name"
        defaultValue={initialValues.name}
        type="text"
        className="w-full border border-gray-300 rounded-md mb-4 px-3 py-2"
        required
      />

      <label htmlFor="email" className="text-sm font-medium mb-2 block">
        Email
      </label>
      <input
        name="email"
        id="email"
        defaultValue={initialValues.email}
        type="email"
        className="w-full border border-gray-300 rounded-md mb-4 px-3 py-2"
        required
      />

      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
        Subject
      </label>
      <input
        name="subject"
        id="subject"
        defaultValue={initialValues.subject}
        type="text"
        className="w-full border border-gray-300 rounded-md mb-4 px-3 py-2"
        required
      />

      <label htmlFor="message" className="text-sm font-medium mb-2 block">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        defaultValue={initialValues.message}
        className="w-full border border-gray-300 rounded-md mb-4 px-3 py-2"
        required
        rows={4}
      />

      <button
        type="submit"
        className="w-full bg-brand-bt text-white py-2 rounded-md"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default ContactForm;
