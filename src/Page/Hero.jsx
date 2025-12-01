// Libary
import { Github } from "lucide-react";

// assets
import profile from "../assets/profile.png";

// Hero Section
function Hero() {
    // Handle Github Button
    const GithubClicked = () => {
        window.open("https://github.com/axchelinus", "_blank");
    };

    return (
        <main className="">
            <article id="home" className="flex flex-col-reverse lg:flex-row justify-around items-center px-8 lg:px-16 py-20 bg-gradient-to-r from-white to-blue-50">
                {/* Introduction */}
                <section className="max-w-xl text-center lg:text-left">
                    {/* Introduction Header */}
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-5xl mb-4 max-w-xl text-gray-800">
                        Hi, I'm <span className="text-blue-600">Axchelinus</span>
                    </h1>

                    {/* Introduction Subtext */}
                    <p className="text-sm md:text-base lg:text-lg opacity-80 mb-6">
                        <b>UI/UX Designer</b> UI/UX Designer dengan latar belakang Computer Science, berfokus pada pembuatan pengalaman digital yang jelas dan mudah dipahami pengguna. Saya menggabungkan design thinking dan pemahaman dasar front-end untuk menciptakan antarmuka yang tidak hanya menarik secara visual, tetapi juga efektif untuk digunakan dalam produk nyata. Saat ini, saya terbuka pada posisi UI/UX Design Intern untuk memperluas pengalaman dan berkontribusi pada solusi digital yang lebih baik.
                    </p>

                    {/* Introduction Github Button */}
                    <button onClick={GithubClicked} className="flex item-center mx-auto lg:mx-0 gap-2 bg-blue-700 px-5 py-2 rounded-lg font-medium text-sm text-white hover:bg-blue-800 transition-all">
                        <Github size={18} />
                        My Github
                    </button>
                </section>

                {/* Profile Picture */}
                <section className="mb-10 lg:mb-0">
                    <img src={profile} alt="profile picture" className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-blue-200 object-cover shadow-md" />
                </section>
            </article>
        </main>
    );
}

export default Hero;