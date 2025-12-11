// Libary
import { Link } from "react-router-dom";

// assets
import ReBakoPersonal from "../assets/ReBako-Personal.png";
import ReBakoTeam from "../assets/ReBako-Team.png";
import Nutricycle from "../assets/Nutricycle.png";
import Research from "../assets/Research.png";

// My Projects
function Project() {
    return (
        <main id="project" className="px-6 md:px-10 lg:px-16 py-20 bg-white">
            <article className="max-w-6xl mx-auto">
                {/* Title */}
                <header className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
                    <p className="text-gray-600 mt-2">Selected case studies and design works.</p>
                </header>

                {/* Big Card For STAR */}
                <article className="flex flex-col gap-12">
                    {/* STAR Project Card 1 */}
                    <section className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* STAR Project Card 1 Screen Image */}
                        <img src={ReBakoPersonal} alt="STAR Project 1" className="w-full h-64 object-cover" />

                        {/* STAR Project 1 Title */}
                        <section className="p-6">
                            {/* Header */}
                            <h3 className="text-2xl font-semibold mb-2">ReBako V2 <span className="text-blue-600 font-medium text-base">(Solo Project)</span>
                            </h3>

                            {/* Subtext */}
                            <p className="text-gray-600 mb-4">ReBako adalah platform yang membantu masyarakat dalam mengatur pengeluaran bahan pokok dan menemukan resep masakan yang sesuai dengan budget harian. Pada V2, saya melakukan pengembangan fitur inti seperti database harga pasar, perhitungan budget, dan rekomendasi resep berbasis anggaran untuk meningkatkan efisiensi belanja dan memasak.
                            </p>

                            {/* Link To Route */}
                            <Link to="/projects/rebako-personal" className="text-blue-600 font-medium hover:underline">
                                View Case Study →
                            </Link>
                        </section>
                    </section>

                    {/* STAR Project Card 2 */}
                    <section className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* STAR Project Card 2 Screen Image */}
                        <img src={Research} alt="STAR Project 2" className="w-full h-64 object-cover" />

                        {/* STAR Project Card 2 Title */}
                        <section className="p-6">
                            {/* Header */}
                            <h3 className="text-2xl font-semibold mb-2">Deteksi Komentar Sarkasme Teks & Emoji dengan indoBERTweet & Bi-LSTM <span className="text-blue-600 font-medium text-base">(Team Project)</span>
                            </h3>

                            {/* Subtext */}
                            <p className="text-gray-600 mb-4">Penelitian deteksi komentar sarkasme berbasis kombinasi teks & emoji pada platform TikTok menggunakan model deep learning indoBERTweet dan Bi-LSTM yang membahas kinerja kedua model.
                            </p>

                            {/* Link To Route */}
                            <Link to="/projects/research" className="text-blue-600 font-medium hover:underline">
                                View Case Study →
                            </Link>
                        </section>
                    </section>
                </article>

                {/* Small Card For Supportive */}
                <article className="grid md:grid-cols-2 gap-8 mt-16">
                    {/* Supportive Project Card 1 */}
                    <section className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Supportive Project Card 1 Screen Image */}
                        <img src={Nutricycle} alt="Supportive Project 1" className="w-full h-52 object-cover" />

                        {/* Supportive Project Card 1 Title */}
                        <section className="p-5">
                            {/* Header */}
                            <h4 className="text-xl font-semibold mb-2">Nutricycle <span className="text-blue-600 font-medium text-base">(Team Project)</span>
                            </h4>

                            {/* Subtext */}
                            <p className="text-gray-600 mb-3">Nutricycle menjadi platform katering sehat yang membantu pekerja, mmahasiswa ataupun keluarga yang kesulitan dalam menjaga dan mengatur pola makan yang sehat.
                            </p>

                            {/* Link To Route */}
                            <Link to="/projects/nutricycle" className="text-blue-600 font-medium hover:underline">
                                View Case Study →
                            </Link>
                        </section>
                    </section>

                    {/* Supportive Project Card 2 */}
                    <section className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Supportive Project Card 2 Screen Image */}
                        <img src={ReBakoTeam} alt="Supportive Project 2" className="w-full h-52 object-cover" />

                        {/* Supportive Project Card 2 Title */}
                        <section className="p-5">
                            {/* Header */}
                            <h4 className="text-xl font-semibold mb-2">ReBako Version 1 <span className="text-blue-600 font-medium text-base">(Team Project)</span>
                            </h4>

                            {/* Subtext */}
                            <p className="text-gray-600 mb-3">
                                ReBako adalah platform yang membantu masyarakat dalam mengatur pengeluaran bahan pokok dan menemukan resep masakan yang sesuai dengan budget harian.
                            </p>

                            {/* Link To Route */}
                            <Link to="/projects/rebako-team" className="text-blue-600 font-medium hover:underline">
                                View Case Study →
                            </Link>
                        </section>
                    </section>
                </article>
            </article>
        </main>
    );
}

export default Project;