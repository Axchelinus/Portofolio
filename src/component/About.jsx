function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-700 text-white px-6 py-16">
  
            {/* ILUSTRASI */}
            <img 
                src="https://storyset.com/illustration/developer-activity/amico" 
                alt="Belajar Frontend Development"
                className="w-80 h-auto hidden md:block"
            />

            {/* TEKS ABOUT */}
            <div className="max-w-lg text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                Halo! Saya <span className="text-blue-400 font-semibold">Axchelinus</span>, 
                mahasiswa <span className="font-semibold">Computer Science</span> yang 
                sedang mendalami bidang <span className="font-semibold">Frontend Development</span> 
                dan <span className="font-semibold">UI/UX Design</span>.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                Saya tertarik dengan cara teknologi dan desain bisa bekerja bersama 
                untuk menciptakan pengalaman pengguna yang menarik dan intuitif. 
                Saat ini saya aktif membangun proyek pribadi untuk mengasah kemampuan 
                saya dalam coding dan desain antarmuka.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                Walau belum memiliki pengalaman profesional, saya berkomitmen untuk terus 
                belajar, bereksperimen, dan berkembang agar bisa menciptakan karya 
                yang bermanfaat dan berpengaruh di dunia digital.
                </p>
            </div>

        </section>

    );
}

export default About;