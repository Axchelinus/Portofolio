// assets
import ReBakoPersonal from "../assets/ReBako-Personal.png";

// ReBako-Personal Wireframe
import WireHome from "../Rebako-Personal/wireframe/Page Menu Home.png";
import WirePricelist from "../Rebako-Personal/wireframe/Page Menu Pricelist.png";
import WireBudget from "../Rebako-Personal/wireframe/Page Menu Budget.png";
import WireRecipe from "../Rebako-Personal/wireframe/Page Menu Recipe.png";

// ReBako-Personal Final Design
import FinalHome from "../Rebako-Personal/finalDesign/Page Menu Home.png";
import FinalPricelist from "../Rebako-Personal/finalDesign/Page Menu Pricelist.png";
import FinalBudget from "../Rebako-Personal/finalDesign/Page Menu Budget.png";
import FinalRecipe from "../Rebako-Personal/finalDesign/Page Menu Recipe.png";

// ReBako Personal Case Study Project
function ReBakoPersonalCase({
  // Case Study Value Type
  title = "ReBako V2 — Platform Database Harga & Solusi Belanja Harian",
  overview = "ReBako adalah platform yang membantu masyarakat dalam mengatur pengeluaran bahan pokok dan menemukan resep masakan yang sesuai dengan budget harian. Pada V2, saya melakukan pengembangan fitur inti seperti database harga pasar, perhitungan budget, dan rekomendasi resep berbasis anggaran untuk meningkatkan efisiensi belanja dan memasak.",

  role = "Product Designer · Full Stack Web Developer",
  tools = "Trello · Figma · React · Tailwind · ExpressJs · MySQL",
  status = "On Progress",

  firstProblemHeader = "Harga Bahan Fluktuatif : ",
  firstProblem = "Kenaikan harga sering tidak sejalan dengan pendapatan, membuat pengeluaran rumah tangga sulit diprediksi.",

  secondProblemHeader = "Kesulitan Mengatur Keuangan : ",
  secondProblem = "Banyak pengguna dapat berbelanja, tetapi tidak memiliki panduan sederhana untuk menghitung kebutuhan masak berdasarkan budget harian.",

  thirdProblemHeader = "Kebingungan Ketika Memasak : ",
  thirdProblem = "Pengguna sering bingung memilih masakan yang tidak repetitif namun tetap sesuai budget, terutama saat harus berbelanja di pasar tradisional.",

  firstGoal = " — Menyediakan database harga bahan pokok dari pasar tradisional agar pengguna memiliki referensi estimasi harga yang ter-update.",
  secondGoal = " — Memberikan perhitungan kebutuhan bahan sesuai budget agar pengguna dapat mengontrol pengeluaran harian dan bulanan.",
  thirdGoal = " — Menyajikan rekomendasi resep berdasarkan anggaran agar pengguna dapat memasak variasi menu tanpa melewati batas budget.",

  hargaBahanPokok = "Saya mengumpulkan data harga dari berbagai pasar tradisional di wilayah Jakarta karena setiap pasar memiliki variasi harga sendiri. Pengumpulan data harga akan dilakukan dengan menggunakan data resmi dari pemerintah dan melalui berita untuk menciptakan suatu range atau estimasi harga secara keseluruhan wilayah Jakarta. Harga tengah atau median akan dibutuhkan sebagai tampilan harga dalam database dan dihitung berdasarkan estimasi harga yang telah terbentuk pada setiap bahan pokok.",

  risetResepMasakan = "Saya menganalisis resep masakan dari beberapa sumber baik Youtube ataupun sumber lain untuk memastikan setiap resep memiliki langkah yang jelas, daftar bahan yang standar, dan estimasi harga yang dapat dihitung otomatis berdasarkan database ReBako",

  analisisKompetitor = "Saya membandingkan tiga kompetitor utama yaitu Yummy, Cookpad, dan DapurBunda. Fokus riset ini adalah untuk menemukan gap yang tidak mereka sediakan, yaitu fitur budgeting berdasarkan harga pasar tradisional dan fitur resep masakan yang dihitung total pengeluarannya berdasarkan bahan yang terintegrasi langsung oleh database harga bahan.",

  insight = "Pengguna kemungkinan membutuhkan platform yang menyatukan estimasi harga bahan, perhitungan budget, dan resep hemat dalam satu tempat.",

  userFlow = "Alur utama ReBako dimulai saat pengguna berada pada landing page atau menu Home. Pada halaman ini, pengguna dapat mengetahui konteks masalah yang ingin diselesaikan oleh platform ReBako beserta fitur penyelesaiannya dan mengetahui pasar terdekat dari posisi pengguna.",

  pricelist = "Pengguna dapat melihat database harga bahan pokok dari pasar tradisional wilayah Jakarta serta estimasi biaya setiap dan keseluruhan wilayah Jakarta pada masing-masing bahan yang tersedia dalam database.",

  budget = "Pengguna dapat menambahkan bahan yang dapat di-inginkan dan melihat estimasi biaya yang dikeluarkan sesuai dari total keseluruhan bahan yang dipilih serta akan mendapatkan rekomendasi resep mulai dari yang hemat sesuai dengan bahan yang dipilih pengguna.",

  recipe = "Pengguna dapat melihat resep yang dapat di-ikuti serta estimasi biaya yang diperlukan yang dihitung berdasarkan bahan yang digunakan dalam resep tersebut.",

  designIterartion = "ReBako V2 merupakan pengembangan dari versi sebelumnya yang belum menyelesaikan masalah pengguna secara efektif. Pada iterasi ini, saya melakukan :",

  implementationHandoff = "Saat ini, project berada ditahapan melakukan riset harga untuk database dan karena ini solo project maka handoff dilakukan sendiri untuk tahap implementasi sesuai dengan desain figma yang sudah dibuat sesuai dengan tools yang digunakan.",

  finalDesign = "Desain final untuk tampilan awal setiap menu terdiri dari empat halaman utama yaitu Home, Pricelist, Budget, dan Recipe dengan fokus pada keterbacaan, kesederhanaan visual, dan alur penggunaan yang mudah. Setiap komponen UI dirancang untuk memudahkan pengguna memahami harga bahan, menghitung kebutuhan belanja, dan menemukan resep sesuai budget.",

  resultLearning = "Karena project masih dalam tahap riset data dan desain, evaluasi belum dapat dilakukan. Rencana pengujian sudah disusun dan melalui proses ini, saya mempelajari pentingnya komunikasi antar-fitur, penyesuaian alur berdasarkan konteks pasar tradisional, serta menyusun solusi yang benar-benar relevan dan berguna.",

  metric = "Task completion rate, clarity score & perceived usefulness",

  userTesting = "5 sesi interview",

  nextSteps = "Iterasi berdasarkan hasil testing dan implementasi fitur"
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
              <p className="mt-4 text-gray-600 text-sm">{overview}</p>

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
                <p className="ml-2 text-sm text-white px-2 py-1 rounded-md bg-blue-600">{status}</p>
              </div>
            </div>

            {/* Overview Screen Image */}
            <div className="w-full lg:w-auto">
              <img src={ReBakoPersonal} alt="Project Image" className="w-full rounded-xl shadow-md object-cover h-48 lg:h-40" />
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
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
              {/* Header */}
              <h3 className="text-lg font-semibold mb-3">My Role <span className="text-blue-600 font-medium text-sm">(Role sesuai progress saat ini)</span></h3>

              {/* Subtext */}
              <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
                {/* Product Designer Role */}
                <h5><b className="text-gray-800 text-sm font-semibold">Product Designer</b></h5>
                <li>Melakukan riset ulang terhadap latar masalah untuk menemukan kekurangan versi sebelumnya.</li>
                <li>Menyusun product backlog dan perencanaan fitur menggunakan metode Kanban.</li>
                <li>Membuat wireframe awal berdasarkan kebutuhan pengguna dan alur penggunaan.</li>
                <li>Melakukan analisis dan perbandingan desain dengan website kompetitor.</li>
                <li>Mendesain ulang wireframe menjadi UI design berdasarkan hasil riset dan evaluasi kompetitor.</li>
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
                  <div className="text-gray-600 text-sm mt-2">
                    <p>Riset dilakukan pada tiga aspek utama yaitu harga bahan pokok, struktur resep masakan, dan analisis kompetitor.</p>
                    <br></br>
                    <ul className="text-gray-600 list-decimal list-inside space-y-2">
                      <li><b>Harga Bahan Pokok</b><br></br>{hargaBahanPokok}</li>
                      <li><b>Riset Resep Masakan</b><br></br>{risetResepMasakan}</li>
                      <li><b>Analisis Kompetitor</b><br></br>{analisisKompetitor}</li>
                    </ul>
                    <br></br>
                    <p><b>Insight utama : </b>{insight}</p>
                  </div>
                </div>

                {/* Point 2 */}
                <div>
                  {/* Header 2 */}
                  <h4 className="font-semibold">User Flow & Wireframes</h4>
                  
                  {/* Subtext 2 */}
                  <div className="text-gray-600 text-sm">
                    <p className="mt-2">
                      {userFlow}
                    </p>
                    <br></br>
                    <ul className="list-decimal list-inside space-y-2">
                      <li><b>Pricelist</b><br></br>{pricelist}</li>
                      <li><b>Budget</b><br></br>{budget}</li>
                      <li><b>Recipe</b><br></br>{recipe}</li>
                    </ul>
                  </div>
                  
                  {/* Wireframe Screen Image */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src={WireHome} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WirePricelist} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireBudget} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireRecipe} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                  </div>
                </div>

                {/* Point 3 */}
                <div className="text-gray-600">
                  {/* Header 3 */}
                  <h4 className="text-black font-semibold">Design Iteration</h4>
                  
                  {/* Subtext 3 */}
                  <p className="text-sm mt-2">{designIterartion}</p>
                  <br></br>
                  <ul className="text-sm list-decimal list-inside space-y-2">
                    <li>Meng-evaluasi fitur versi sebelumnya.</li>
                    <li>Membuat desain baru berdasarkan riset kompetitor dan versi sebelumnya.</li>
                    <li>Melakukan riset data untuk database harga bahan pokok</li>
                  </ul>
                </div>

                {/* Point 4 */}
                <div>
                  {/* Header 4 */}
                  <h4 className="font-semibold">Implementation & Handoff</h4>

                  {/* Subtext 4 */}
                  <p className="text-gray-600 text-sm mt-2">{implementationHandoff}</p>
                </div>
              </article>
            </div>

            {/* Final Design */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Final Design</h2>

              {/* Subtext */}
              <p className="text-gray-600 text-sm mb-4">{finalDesign}</p>

              {/* Final Design Screen Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={FinalHome} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalPricelist} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalBudget} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalRecipe} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
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
                <a href="https://www.figma.com/proto/aIjBFOgK2f49pfl5sbVA1m/ReBako-Version-2?node-id=111-123&p=f&t=gBZQbi4DMB4zAi2g-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=111%3A123" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">View Figma</a>
                <a href="" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Source Code</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ReBakoPersonalCase;