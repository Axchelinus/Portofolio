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
  title = "ReBako Version 1 — Metode Scrum",
  overview = "Masalah kenaikan bahan pokok, masyarakat khususnya menengah ke bawah yang kesulitan dalam mengatur budget dan sering bingung ingin menentukan masakan yang hemat dan tidak itu-itu saja terutama ketika harus menyesuaikan kebutuhan harian.",

  role = "Conceptual Designer · UI/UX Designer · Media Production Lead",
  tools = "Trello · Notion · Figma · Capcut",
  status = "Completed",

  firstProblemHeader = "Kenaikan Harga : ",
  firstProblem = "Masyarakat menengah di perkotaan sering menghadapi kondisi di mana kenaikan harga bahan pokok lebih cepat daripada kenaikan pendapatan.",

  secondProblemHeader = "Kesulitan Mengatur Keuangan : ",
  secondProblem = "Walaupun pendapatan cukup, perencanaan belanja sering tidak terarah, terutama saat harga pangan fluktuatif. Akibatnya, pengeluaran tidak stabil dan biaya masak sulit dikendalikan.",

  thirdProblemHeader = "Kebingungan Ketika Memasak : ",
  thirdProblem = "Masyarakat menengah mampu berbelanja, tetapi sering bingung menentukan masakan yang hemat dan tidak itu-itu saja, terutama ketika harus menyesuaikan kebutuhan harian.",

  firstGoal = "Goal 1 — Database Harga Bahan",
  secondGoal = "Goal 2 — Menghitung Pemakaian Budget",
  thirdGoal = "Goal 3 — Budget Resep Masakan",

  Insight = "Proses riset difokuskan pada pengumpulan informasi harga bahan pokok dari platform database pangan yang menyediakan API. Selain itu, melakukan riset pada website yummy sebagai referensi untuk membuat website ReBako ini. Scope dari ReBako ini masih belum begitu jelas.",

  userFlow = "Flow utama dalam website ini adalah user akan berada pada menu database harga bahan pokok yang menyajikan harga dari informasi yang telah dikumpulkan dari platform yang menyediakan API. Setelah itu, user dapat menghitung budget yang diperlukan untuk membeli bahan pokok tersebut pada menu pengeluaran, menu database akan mempunyai checkbox yang dapat user centang untuk menggunakan fitur pada menu pengeluaran tersebut hanya jika user sudah melakukan register atau login. User juga dapat melihat resep masakan yang tersedia dan memiliki perkiraan harga untuk resep tersebut.",

  designIterartion = "Ide ini adalah sebuah solusi yang berguna untuk menyelesaikan masalah yang sudah ditemukan dari berbagai sumber pada berita. Meskipun masih belum cukup menyelesaikan masalah, namun ReBako masih dapat dikembangkan ke-depannya.",

  implementationHandoff = "Saya ikut berperan dalam membuat wireframe pada desain figma sehingga dapat secara cepat untuk progress implementasi front-end dan back-end. Bagian front-end dan back-end dikerjakan oleh tim dan saya menyerahkan wireframe yang sudah jadi serta dapat di-ikuti untuk layout desainnya meskipun desain belum jadi sepenuhnya dan masih wireframe saja. Keterbatasan waktu saat melakukan desain sehingga dalam sprint yang telah ditentukan, hanya cukup untuk membuat wireframe saja.",

  finalDesign = "Hasil desain final dari wireframe ReBako dan desain ini merupakan front-end website yang sudah selesai, mengikuti layout wireframe dengan adanya beberapa perubahan.",

  resultLearning = "Project ini selesai karena sprint telah berakhir. Meskipun terdapat sedikit fitur untuk admin yang belum terimplementasikan, fitur untuk selain admin sudah selesai semua dan berfungsi dengan baik. Kami melakukan tiga sprint yaitu sprint awal yang sangat singkat sehingga banyak yang tidak terselesaikan sesuai backlog yang telah ditentukan pada sprint tersebut, sprint kedua cukup singkat sehingga masih ada beberapa yang tidak terselesaikan dan sprint ketiga atau terakhir cukup singkat namun, hampir semua fitur yang direncanakan telah terpenuhi sesuai backlog yang tersisa fitur update bahan untuk admin.",

  metric = "75% mengikuti wireframe",

  userTesting = "Kualitatif, fokus pada pemahaman user terhadap ide",

  nextSteps = "Tahap pengembangan"
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
              <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
                {/* Conceptual Designer Role */}
                <h5><b className="text-gray-800 text-sm font-semibold">Conceptual Designer</b></h5>
                <li>Melakukan riset terkait masalah sekitar untuk menemukan ide penyelesaiannya.</li>
                <li>Melakukan riset ide terkait fitur dan hubungannya dengan masalah.</li>

                {/* UI/UX Designer Role */}
                <h5><b className="text-gray-800 text-sm font-semibold">UI/UX Designer</b></h5>
                <li>Membuat flow sederhana sebagai wireframe untuk user ketika berinteraksi dengan fitur.</li>
                <li>Membuat wireframe desain dalam bentuk website beserta prototypenya.</li>

                {/* Media Production Lead Role */}
                <h5><b className="text-gray-800 text-sm font-semibold">Media Production Lead</b></h5>
                <p>Membuat video trailer editing bagian latar masalah dan penutup video.</p>
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