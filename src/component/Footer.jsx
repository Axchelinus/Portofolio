function Footer() {
    return (
        <section id="contact" className="bg-gray-900 text-white py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-8">
                Tertarik untuk bekerja sama atau sekadar berdiskusi?  
                Silakan hubungi saya melalui platform berikut.
            </p>

            <div className="flex justify-center gap-6 mb-8">
                <a href="mailto:axchelinus@email.com" className="hover:text-blue-400 transition">Email</a>
                <a href="https://github.com/Axchelinus" target="_blank" className="hover:text-blue-400 transition">GitHub</a>
                <a href="https://linkedin.com/in/axchelinus" target="_blank" className="hover:text-blue-400 transition">LinkedIn</a>
            </div>

            <footer className="border-t border-gray-700 pt-6 text-gray-500 text-sm">
                © 2025 Axchelinus. All rights reserved.
            </footer>
        </section>
    );
}

export default Footer;