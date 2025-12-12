// Library
import { Mail, Linkedin, Phone } from "lucide-react";

function Contact() {
  return (
    <main
      id="contact"
      className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Let’s <span className="text-blue-600">Connect</span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 max-w-md mb-10">
        You can contact me through the platforms below. I am open to discussing potential roles, collaborations, and new opportunities.
      </p>

      {/* Social Media Links */}
      <section className="flex gap-8 mb-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/axchelinus"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-all duration-300"
        >
          <Linkedin size={28} />
          <span className="font-medium hidden sm:inline">LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=axchelinus@gmail.com" target="_blank"
          className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-all duration-300"
        >
          <Mail size={28} />
          <span className="font-medium hidden sm:inline">Email</span>
        </a>

        {/* Phone */}
        <a
          href="https://wa.me/6288973309098"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 text-green-600 hover:text-green-700 transition-all duration-300 group"
        >
          <Phone size={28} />
          <span className="font-medium hidden sm:inline">WhatsApp</span>
        </a>
      </section>

      {/* Footer */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Axchelinus — All Rights Reserved.
      </p>
    </main>
  );
}

export default Contact;
