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
  title = "Nutricycle — Metode Scrum",
  overview = "Pekerja, mahasiswa, dan keluarga sering kesulitan menjaga pola makan sehat karena keterbatasan waktu, sulitnya melacak nutrisi makanan pesan antar, biaya yang tinggi, serta minimnya pilihan katering sehat yang benar-benar terkurasi.",

  role = "UI Designer",
  tools = "Notion · Figma",
  status = "Completed",

  firstProblemHeader = "Pola Makan Bermasalah : ",
  firstProblem = "Pekerja, mahasiswa dan keluarga yang menghadapi beberapa masalah terkait pola makan sehat serta kesibukan yang membuat mereka tidak punya waktu untuk memasak makanan sehat.",

  secondProblemHeader = "Sulit Tracking Gizi : ",
  secondProblem = "Makanan yang dipesan dari luar, sulit untuk dilacak kandungan nutrisinya dan menghambat keinginan untuk hidup sehat",

  thirdProblemHeader = "Boros Biaya : ",
  thirdProblem = "Memesan makanan setiap harinya bisa menjadi mahal dan menghasilkan tumpukan sampah kemasan sekali pakai yang tidak ramah lingkungan.",

  firstGoal = "Goal 1 — Katalog Katering Sehat Terkurasi",
  secondGoal = "Goal 2 — Pelacakan Nutrisi Otomatis",
  thirdGoal = "Goal 3 — Budget Resep Masakan",

  Insight = "Proses riset dilakukan dengan melakukan wawancara terkait kendala yang dialami dan aplikasi Nutricycle sebagai penyelesaiannya. Scope awal atau sementara dari Nutricycle ini adalah mahasiswa Bina Nusantara. Selain melalui proses wawancara, kami menampilkan prototype dalam sebuah tenant yang telah disediakan dan user testing dilakukan dengan menjelaskan Nutricycle dan mengisi form.",

  userFlow = "Flow utama dalam aplikasi ini adalah user dapat memilih kategori katering yang tersedia, selanjutnya akan diarahkan ke halaman berisi paket yang tersedia sesuai kategori yang user pilih. Setelah itu, user akan diberi pilihan yaitu menggunakan kotak makan ramah lingkungan atau kertas minyak dan user akan ditampilkan untuk paketnya serta dapat memilih jenis pembayarannya.",

  designIterartion = "Ide ini masih memerlukan pengembangan lebih lanjut karena Nutricycle saat ini baru berada pada tahap Minimum Viable Product (MVP). Namun, konsep bisnisnya tetap dapat dijalankan meskipun aplikasi belum sepenuhnya siap.",

  implementationHandoff = "Saya ikut berperan dalam membuat desain UI/UX untuk bagian halaman utama, halaman keranjang dan halaman history belanja. Desain figma sudah lengkap secara fiturnya sesuai dengan perencanaan awal dan selesai tepat waktu sesuai sprint. Setelah menyelesaikan desain, saya menyerahkan desain sebagai potokan untuk rekan yang ditugaskan dalam implementasi front-end dan back-end.",

  finalDesign = "Hasil desain final yang berbeda dengan desain figma dan implementasi dilakukan dengan vibe coding karena keterbatasan waktu dalam pembuatan aplikasinya untuk pameran tenant yang telah dijadwalkan.",

  resultLearning = "Project ini belum selesai karena hasil desain final yang masih berbeda dan perlu riset tambahan untuk menentukan nutrisi gizi pada sebuah makanan. Hasil dari riset pameran juga memberikan beberapa saran sebagai tambahan yang akan disusun terlebih dahulu kedepannya.",

  metric = "60% mengikuti desain figma",

  userTesting = "Kualitatif, fokus pada pemahaman user terhadap ide",

  nextSteps = "Pengembangan Lanjutan"
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
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{title}</h1>
              <p className="mt-4 text-gray-600">{overview}</p>

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
                <li>{firstGoal}</li>
                <li>{secondGoal}</li>
                <li>{thirdGoal}</li>
              </ul>
            </div>

            {/* Role */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
              {/* Header */}
              <h3 className="text-lg font-semibold mb-3">My Role</h3>

              {/* Subtext */}
              {/* UI Designer Role */}
              <h5><b className="text-gray-800 text-sm font-semibold">UI Designer</b></h5>
              <p>Melakukan desain tampilan dan flow interaksi untuk halaman utama, memilih paket, halaman keranjang, halaman histori belanja dan halaman pembayaran.</p>
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
                  <p className="text-gray-600 mt-2">{Insight}</p>
                </div>

                {/* Point 2 */}
                <div>
                  {/* Header 2 */}
                  <h4 className="font-semibold">User Flow & Wireframes</h4>
                  
                  {/* Subtext 2 */}
                  <p className="text-gray-600 mt-2">{userFlow}</p>
                  
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
                  <p className="text-gray-600 mt-2">{designIterartion}</p>
                </div>

                {/* Point 4 */}
                <div>
                  {/* Header 4 */}
                  <h4 className="font-semibold">Implementation & Handoff</h4>

                  {/* Subtext 4 */}
                  <p className="text-gray-600 mt-2">{implementationHandoff}</p>
                </div>
              </article>
            </div>

            {/* Final Design */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Final Design</h2>

              {/* Subtext */}
              <p className="text-gray-600 mb-4">{finalDesign}</p>

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
              <p className="text-gray-600">{resultLearning}</p>

              {/* Next Approach */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Metric */}
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-sm text-gray-500">Metric</p>
                  <p className="text-lg font-semibold mt-2">{metric}</p>
                </div>
                
                {/* User Testing */}
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-sm text-gray-500">User Testing</p>
                  <p className="text-lg font-semibold mt-2">{userTesting}</p>
                </div>
                
                {/* Next Steps */}
                <div className="bg-gray-50 p-4 rounded-md text-center">
                  <p className="text-sm text-gray-500">Next Steps</p>
                  <p className="text-lg font-semibold mt-2">{nextSteps}</p>
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