// assets
import ReBakoTeam from "../assets/ReBako-Team.png";

// ReBako-Team Wireframe
import WireRegister from "../Rebako-Tim/wireframe/register.png";
import WireDatabase from "../Rebako-Tim/wireframe/database.png";
import WirePengeluaran from "../Rebako-Tim/wireframe/pengeluaran.png";
import WireResep from "../Rebako-Tim/wireframe/resep.png";

// ReBako-Team Final Design
import FinalRegister from "../Rebako-Tim/finalDesign/register.png";
import FinalDatabase from "../Rebako-Tim/finalDesign/database.png";
import FinalPengeluaran from "../Rebako-Tim/finalDesign/pengeluaran.png";
import FinalResep from "../Rebako-Tim/finalDesign/resep.png";

// ReBako Team Case Study Project
function ReBakoTeamCase({
  // Case Study Value Type
  title = "ReBako V1",
  overview = "ReBako adalah platform yang membantu masyarakat dalam mengatur pengeluaran bahan pokok dan menemukan resep masakan yang sesuai dengan budget harian.",

  role = "Conceptual Designer · UI/UX Designer · Media Production Lead",
  tools = "Trello · Notion · Figma · Capcut",
  status = "Completed",

  firstProblemHeader = "Harga Bahan Fluktuatif : ",
  firstProblem = "Masyarakat menengah di perkotaan sering menghadapi kondisi di mana kenaikan harga bahan pokok lebih cepat daripada kenaikan pendapatan.",

  secondProblemHeader = "Kesulitan Mengatur Keuangan : ",
  secondProblem = "Walaupun pendapatan cukup, perencanaan belanja sering tidak terarah, terutama saat harga pangan fluktuatif. Akibatnya, pengeluaran tidak stabil dan biaya masak sulit dikendalikan.",

  thirdProblemHeader = "Kebingungan Ketika Memasak : ",
  thirdProblem = "Masyarakat menengah mampu berbelanja, tetapi sering bingung menentukan masakan yang hemat dan tidak itu-itu saja, terutama ketika harus menyesuaikan kebutuhan harian.",

  firstGoal = " — Menyediakan database harga bahan pokok untuk pengguna.",
  secondGoal = " — Memberikan perhitungan budget untuk pengguna memilih bahan pokok.",
  thirdGoal = " — Menyajikan resep yang berdasarkan harga total dari resep tersebut.",

  Insight = "Riset difokuskan pada pengumpulan data harga bahan pokok menggunakan platform yang menyediakan API. Selain itu, dilakukan analisis desain dari website referensi seperti Yummy untuk memahami struktur konten dan alur penggunaan. Lingkup awal proyek masih berupa eksplorasi konsep sehingga fokus riset lebih pada validasi kebutuhan dasar pengguna.",

  userFlow = "Flow utama dirancang agar pengguna dapat melihat database harga bahan pokok, kemudian menghitung estimasi pengeluaran melalui fitur kalkulasi. Akses fitur kalkulasi dapat dilakukan setelah pengguna melakukan registrasi atau login. Selain itu, pengguna dapat melihat rekomendasi resep dengan estimasi harga. Seluruh flow divisualisasikan melalui wireframe sebagai dasar awal pengembangan.",

  designIterartion = "Konsep ReBako disusun sebagai solusi awal untuk membantu masyarakat memahami perubahan harga bahan pokok. Iterasi desain dilakukan terbatas pada tahap eksplorasi awal. Proyek masih terbuka untuk pengembangan lebih lanjut karena scope kebutuhan pengguna dan data belum sepenuhnya diselesaikan pada versi ini.",

  implementationHandoff = "Saya berkontribusi pada pembuatan wireframe di Figma untuk mempercepat proses implementasi front-end dan back-end. Wireframe disusun sebagai referensi tata letak dan struktur halaman. Tim pengembang menggunakan wireframe ini sebagai dasar pengembangan meskipun desain UI final belum tersedia karena keterbatasan waktu sprint.",

  finalDesign = "Desain final merupakan hasil implementasi front-end berdasarkan wireframe yang telah dibuat. Layout mengikuti struktur wireframe dengan beberapa penyesuaian minor pada tampilan.",

  resultLearning = "Proyek diselesaikan sesuai batas waktu tiga sprint. Beberapa fitur admin belum sepenuhnya terimplementasi, tetapi fitur utama pengguna telah berfungsi dengan baik. Setiap sprint memberikan pembelajaran mengenai manajemen backlog, estimasi waktu, dan penyusunan prioritas fitur.",

  metric = "±75% mengikuti wireframe",

  userTesting = "Kualitatif — fokus pada pemahaman pengguna terhadap konsep dan alur fitur",

  nextSteps = "Melakukan riset mendalam dan pengembangan lanjutan"
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
              <img src={ReBakoTeam} alt="Project Image" className="w-full rounded-xl shadow-md object-cover h-48 lg:h-40" />
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
              <h3 className="text-lg font-semibold mb-3">My Role</h3>

              {/* Subtext */}
              <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
                {/* Conceptual Designer Role */}
                <h5><b className="text-gray-800 font-semibold">Conceptual Designer</b></h5>
                <li>Melakukan riset terkait masalah sekitar untuk menemukan ide penyelesaiannya.</li>
                <li>Melakukan riset ide terkait fitur dan hubungannya dengan masalah.</li>

                {/* UI/UX Designer Role */}
                <h5><b className="text-gray-800 font-semibold">UI/UX Designer</b></h5>
                <li>Membuat flow sederhana sebagai wireframe untuk user ketika berinteraksi dengan fitur.</li>
                <li>Membuat wireframe desain dalam bentuk website beserta prototypenya.</li>

                {/* Media Production Lead Role */}
                <h5><b className="text-gray-800 font-semibold">Media Production Lead</b></h5>
                <li>Membuat video trailer editing bagian latar masalah dan penutup video.</li>
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
                    <img src={WireRegister} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireDatabase} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WirePengeluaran} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireResep} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
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
                <img src={FinalRegister} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalDatabase} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalPengeluaran} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={FinalResep} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
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
                <a href="https://www.figma.com/proto/xZieyLLNMu5JYrzGOCIQnR/Software-Engineering?node-id=246-347&p=f&t=kH8vfA8RWoLaClvZ-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A2" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">View Figma</a>
                <a href="https://github.com/KevinPangsawira/SoftwareEngineeringLJ01" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Source Code</a>
              </div>
            </div>

            {/* Link To Drive */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
              {/* Title */}
              <div>
                <p className="text-gray-700">Want to see the trailer or demo?</p>
                <p className="text-sm text-gray-500">Link the trailer & demo video</p>
              </div>

              {/* Link To Button */}
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1MdwHugRwUW4v3w4ELJAakqDC1DTpgUYI/view?usp=drive_link" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">Watch Trailer</a>
                <a href="https://drive.google.com/file/d/1TUROIb0Fc3f8yT9mCmiGW_oldxuhAMg7/view?usp=drive_link" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Watch Demo</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ReBakoTeamCase;