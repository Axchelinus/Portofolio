function Hero() {
    return(
        <section id="hero" className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white px-6 text-center">
      
            {/* FOTO PROFIL */}
            <img src="./src/assets/react.svg" alt="Axchelinus" className="w-40 h-40 rounded-full mb-6 shadow-lg"/>

            {/* NAMA */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Axchelinus</h1>

            {/* DESKRIPSI-SINGKAT */}
            <p className="max-w-xl text-gray-300 mb-6">
                Sedang mengeksplorasi dunia Frontend & UI/UX sambil belajar proyek nyata.
                Tujuan saya adalah membangun antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan.
            </p>

            {/* LINK-CV */}
            <div className="flex gap-4">
                <a href="#cv"
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Lihat Project</a>

                <a href="https://github.com/Axchelinus"
                    target="_blank"
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Github</a>
            </div>
        </section>
    );
}

export default Hero;