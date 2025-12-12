// assets
import Nutricycle from "../assets/Nutricycle.png";

// Nutricycle Wireframe
import WireHome from "../Nutricycle/wireframe/home.png";
import WirePaket from "../Nutricycle/wireframe/paket.png";
import WireKeranjang from "../Nutricycle/wireframe/keranjang.png";
import WirePembayaran from "../Nutricycle/wireframe/pembayaran.png";

// Nutricycle Final Design
import FinalHome from "../Nutricycle/finalDesign/home.jpg";
import FinalPaket from "../Nutricycle/finalDesign/paket.jpg";
import FinalKeranjang from "../Nutricycle/finalDesign/keranjang.jpg";
import FinalPembayaran from "../Nutricycle/finalDesign/pembayaran.jpg";

// Nutricycle Case Study Project
function NutricycleCase({
  // Case Study Value Type
  title = "Nutricycle — Katering Sehat dengan Pelacakan Gizi",
  overview = "Pekerja, mahasiswa, dan keluarga sering kesulitan menjaga pola makan sehat karena keterbatasan waktu dan biaya serta sulit melacak kandungan gizi. Nutricycle hadir sebagai platform katering sehat yang menyediakan paket makanan dengan informasi nutrisi yang jelas.",

  role = "UI Designer",
  tools = "Notion · Figma",
  status = "Completed",

  firstProblemHeader = "Pola Makan Tidak Teratur : ",
  firstProblem = "Banyak mahasiswa dan pekerja tidak punya waktu memasak sehingga bergantung pada makanan pesan luar yang nutrisi-nya tidak terukur.",

  secondProblemHeader = "Tidak Ada Transparansi Gizi : ",
  secondProblem = "Makanan yang dipesan dari luar, sulit untuk dilacak kandungan nutrisinya dan menghambat keinginan untuk hidup sehat.",

  thirdProblemHeader = "Biaya Makan Membengkak : ",
  thirdProblem = "Membeli makanan setiap hari membuat pengeluaran tidak stabil dan kemasan sekali pakai menciptakan masalah lingkungan.",

  firstGoal = " — Menyediakan katalog katering sehat dengan paket yang telah dikurasi.",
  secondGoal = " — Membuat sistem pelacakan nutrisi setiap kali user memesan paket.",
  thirdGoal = " — Membantu user mengatur budget makan melalui visualisasi harga per paket.",

  Insight = "Riset dilakukan melalui wawancara untuk memahami kendala pengguna terkait pengelolaan katering ramah lingkungan dan bagaimana Nutricycle dapat menjadi solusi. Target awal aplikasi ini adalah mahasiswa Bina Nusantara. Selain wawancara, kami melakukan user testing dengan menampilkan prototipe pada tenant pameran dan mengumpulkan feedback melalui formulir evaluasi.",

  userFlow = "Alur utama aplikasi dimulai dari pemilihan kategori katering, dilanjutkan dengan pemilihan paket yang tersedia. Pengguna kemudian memilih jenis kemasan (kotak makan ramah lingkungan atau kertas minyak) sebelum melanjutkan ke detail paket dan proses pembayaran. Wireframe dan user flow dirancang untuk memastikan navigasi tetap jelas dan mudah digunakan.",

  designIterartion = "Nutricycle masih berada pada tahap Minimum Viable Product (MVP). Beberapa aspek, seperti pengelolaan data nutrisi, masih memerlukan riset lanjutan. Iterasi desain dilakukan berdasarkan temuan awal dan masukan dari hasil user testing selama pameran.",

  implementationHandoff = "Saya berkontribusi dalam desain UI/UX untuk halaman utama, keranjang, dan histori belanja. Seluruh desain diselesaikan sesuai target sprint. Setelah finalisasi, desain diserahkan kepada tim front-end dan back-end sebagai acuan implementasi.",

  finalDesign = "Desain final menunjukkan perbedaan cukup banyak dari mockup Figma karena penyesuaian waktu implementasi. Namun, fungsionalitas utama tetap selaras dengan konsep awal.",

  resultLearning = "Proyek ini belum sepenuhnya selesai karena diperlukan penyesuaian lebih lanjut pada fitur nutrisi serta validasi tambahan dari hasil user testing. Riset selama pameran juga memberikan saran pengembangan yang akan menjadi acuan untuk iterasi berikutnya.",

  metric = "±60% mengikuti desain figma",

  userTesting = "Kualitatif, fokus pada pemahaman user terhadap ide",

  nextSteps = "Pengembangan lanjutan berdasarkan hasil testing"
}) {
  return (
    // Case Study Project Page
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Case Study Project Layout */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Overview Explanation */}
        <header className="mb-12">
          {/* Overview Explanation Layout */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              {/* Overview Header */}
              <h1 className="text-xl lg:text-2xl font-bold leading-tight">{title}</h1>
              <p className="text-sm mt-4 text-gray-600">{overview}</p>

              {/* Overview Preparation */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                {/* Role Preparation */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow text-sm">
                  <strong className="mr-2">Role :</strong> {role}
                </span>

                {/* Tools Preparation */}
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow text-sm">
                  <strong className="mr-2">Tools :</strong> {tools}
                </span>

                {/* Status Preparation */}
                <p className="ml-2 text-sm text-white px-2 py-1 rounded-md bg-green-600">{status}</p>
              </div>
            </div>

            {/* Overview Screen Image */}
            <div className="w-full lg:w-auto">
              <img src={Nutricycle} alt="Project Image" className="w-full rounded-xl shadow-md object-cover h-48 lg:h-40" />
            </div>
          </div>
        </header>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left column : Problem - Goals - Role */}
          <aside className="lg:col-span-1">

            {/* Problem */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              {/* Header */}
              <h3 className="text-lg font-semibold mb-3">Problem</h3>

              {/* Subtext */}
              <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
                <li><b className="text-gray-800 font-semibold">{firstProblemHeader}</b>{firstProblem}</li>
                <li><b className="text-gray-800 font-semibold">{secondProblemHeader}</b>{secondProblem}</li>
                <li><b className="text-gray-800 font-semibold">{thirdProblemHeader}</b>{thirdProblem}</li>
              </ul>
            </div>

            {/* Goals */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
              {/* Header */}
              <h3 className="text-lg font-semibold mb-3">Project Goals</h3>

              {/* Subtext */}
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li><b className="text-gray-800 font-semibold">Goal 1</b>{firstGoal}</li>
                <li><b className="text-gray-800 font-semibold">Goal 2</b>{secondGoal}</li>
                <li><b className="text-gray-800 font-semibold">Goal 3</b>{thirdGoal}</li>
              </ul>
            </div>

            {/* Role */}
            <div className="text-sm mt-6 bg-white p-6 rounded-xl shadow-sm">
              {/* Header */}
              <h3 className="text-lg font-semibold mb-3">My Role</h3>

              {/* Subtext */}
              {/* UI Designer Role */}
              <h5><b className="text-gray-800 font-semibold">UI Designer</b></h5>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li>Mendesain halaman utama, katalog paket, detail paket, cart, history, dan pembayaran.</li>
                <li>Membangun flow interaksi user dari pemilihan paket hingga checkout.</li>
              </ul>
            </div>
          </aside>

          {/* Right column : Process - Design - Results - Link To Project */}
          <section className="lg:col-span-2 space-y-8">

            {/* Process */}
            <div id="process" className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Process</h2>

              {/* Subheader */}
              <article className="space-y-6">
                {/* Point 1 */}
                <div>
                  {/* Header 1 */}
                  <h4 className="font-semibold">Research & Insights</h4>

                  {/* Subtext 1 */}
                  <p className="text-gray-600 mt-2 text-sm">{Insight}</p>
                </div>

                {/* Point 2 */}
                <div>
                  {/* Header 2 */}
                  <h4 className="font-semibold">User Flow & Wireframes</h4>
                  
                  {/* Subtext 2 */}
                  <p className="text-gray-600 mt-2 text-sm">{userFlow}</p>
                  
                  {/* Wireframe Screen Image */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src={WireHome} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WirePaket} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireKeranjang} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WirePembayaran} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                  </div>
                </div>

                {/* Point 3 */}
                <div>
                  {/* Header 3 */}
                  <h4 className="font-semibold">Design Iteration</h4>
                  
                  {/* Subtext 3 */}
                  <p className="text-gray-600 mt-2 text-sm">{designIterartion}</p>
                </div>

                {/* Point 4 */}
                <div>
                  {/* Header 4 */}
                  <h4 className="font-semibold">Implementation & Handoff</h4>

                  {/* Subtext 4 */}
                  <p className="text-gray-600 mt-2 text-sm">{implementationHandoff}</p>
                </div>
              </article>
            </div>

            {/* Final Design */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Final Design</h2>

              {/* Subtext */}
              <p className="text-gray-600 mb-4 text-sm">{finalDesign}</p>

              {/* Final Design Screen Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={FinalHome} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalPaket} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalKeranjang} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalPembayaran} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
              </div>
            </div>

            {/* Results & Learnings */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Results & Learnings</h2>

              {/* Subtext */}
              <p className="text-gray-600 text-sm">{resultLearning}</p>

              {/* Next Approach */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Metric */}
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-sm text-gray-500">Metric</p>
                  <p className="text-sm font-semibold mt-2">{metric}</p>
                </div>
                
                {/* User Testing */}
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-sm text-gray-500">User Testing</p>
                  <p className="text-sm font-semibold mt-2">{userTesting}</p>
                </div>
                
                {/* Next Steps */}
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-sm text-gray-500">Next Steps</p>
                  <p className="text-sm font-semibold mt-2">{nextSteps}</p>
                </div>
              </div>
            </div>

            {/* Link To Project */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
              {/* Title */}
              <div>
                <p className="text-gray-700">Want to see the prototype or repository?</p>
                <p className="text-sm text-gray-500">Link the Figma file & source code</p>
              </div>

              {/* Link To Button */}
              <div className="flex gap-3">
                <a href="https://www.figma.com/proto/zeEzZPJfO6ruZAvmnzfqF2/NutriCycle?node-id=4-11&p=f&t=JHaV08L2JNvxLuKB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">View Figma</a>
                <a href="https://github.com/Candraww/NutriCycle" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Source Code</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default NutricycleCase;