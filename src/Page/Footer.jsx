// Libary
import { Mail, Linkedin, Send } from "lucide-react";

// Contact Me
function Contact() {
  return (
    <main id="contact" className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Let’s <span className="text-blue-600">Connect</span>
      </h2>

      {/* Subtext 1 */}
      <p className="text-gray-600 max-w-md mb-10">
        Jangan ragu untuk menghubungi saya melalui platform berikut, saya selalu terbuka untuk peluang dan kolaborasi baru.
      </p>

      {/* Social Media Links */}
      <section className="flex gap-8 mb-6">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/axchelinus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-all duration-300">
          <Linkedin size={28} />
          <span className="font-medium hidden sm:inline">LinkedIn</span>
        </a>

        {/* Link To Email */}
        <a href="mailto:axchelinus@gmail.com" className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-all duration-300">
          <Mail size={28} />
          <span className="font-medium hidden sm:inline">Gmail</span>
        </a>

        {/* Link To Outlook */}
        <a href="mailto:axchelinus@outlook.com" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-all duration-300">
          <Send size={28} />
          <span className="font-medium hidden sm:inline">Outlook</span>
        </a>
      </section>

      {/* Subtext 2 */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Axchelinus — All Rights Reserved.
      </p>
    </main>
  );
}

export default Contact;