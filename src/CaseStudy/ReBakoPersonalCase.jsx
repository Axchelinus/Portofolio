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
  title = "ReBako Version 2 — Pengembangan Versi Sebelumnya — Metode Kanban",
  overview = "Masalah kenaikan bahan pokok, masyarakat khususnya menengah ke bawah yang kesulitan dalam mengatur budget dan sering bingung ingin menentukan masakan yang hemat dan tidak itu-itu saja terutama ketika harus menyesuaikan kebutuhan harian.",

  role = "Product Designer · Full Stack Web Developer",
  tools = "Trello · Figma · React · Tailwind · ExpressJs · MySQL",
  status = "On Progress",

  firstProblemHeader = "Kenaikan Harga : ",
  firstProblem = "Masyarakat menengah di perkotaan sering menghadapi kondisi di mana kenaikan harga bahan pokok lebih cepat daripada kenaikan pendapatan.",

  secondProblemHeader = "Kesulitan Mengatur Keuangan : ",
  secondProblem = "Walaupun pendapatan cukup, perencanaan belanja sering tidak terarah, terutama saat harga pangan fluktuatif. Akibatnya, pengeluaran tidak stabil dan biaya masak sulit dikendalikan.",

  thirdProblemHeader = "Kebingungan Ketika Memasak : ",
  thirdProblem = "Masyarakat menengah mampu berbelanja, tetapi sering bingung menentukan masakan yang hemat dan tidak itu-itu saja, terutama ketika harus menyesuaikan kebutuhan harian.",

  firstGoal = "Goal 1 — Database Harga Bahan",
  secondGoal = "Goal 2 — Menghitung Pemakaian Budget",
  thirdGoal = "Goal 3 — Budget Resep Masakan",

  firstInsight = "Riset dilakukan pada database harga bahan dan resep masakan. Setiap harga bahan yang ada dalam database merupakan harga tengah dari range harga yang ditemukan dari berbagai pasar tradisional di wilayah Jakarta. Resep masakan membutuhkan riset untuk mengisi detail dari sebuah resep masakan yang diambil dari platform Youtube sebagai referensi, serta perhitungan budget untuk resep akan mengikuti harga tengah dari database dan sesuai dengan jumlah yang dipakai. Riset juga dilakukan pada kompetitor yaitu website yummy, cookpad, dan dapurbunda dengan mencari celah yang unik untuk ReBako ini, serta sebagai referensi desain juga.",

  secondInsight = "Kenapa scope-nya luas? Karena berpatokan pada 1 wilayah yang spesifik dapat menghasilkan data range harga tiap bahan yang hanya mencakup wilayah itu saja sehingga ketika 1 wilayah spesifik lainnya bisa berbeda range harganya. Oleh karena itu, range harga ditetapkan pada wilayah Jakarta daripada wilayah Jakarta yang spesifik supaya dapat menghasilkan range harga yang stabil untuk tiap wilayah yang termasuk dalam wilaya Jakarta. ReBako terbentuk dengan tujuan supaya user dapat memperkirakan dan menyisihkan sebagian penghasilan mereka untuk belanja di pasar tradisional.",

  userFlow = "Flow utama dalam website ini adalah user akan berada pada menu home dan dapat membaca latar belakang dan fitur penyelesaian dari ReBako serta melihat posisi lokasi user yang secara otomotis memberikan alamat pasar tradisional terdekat dari lokasi user. Setelah itu, terdapat 3 menu utama yaitu Pricelist, Budget dan Recipe. Menu Pricelist akan menampilkan database harga untuk user, menu Budget akan menampilkan perhitungan pengeluaran sesuai keinginan user serta rekomendasi resep dari total belanja diutamakan dari yang termurah sesuai dengan bahan yang dipilih dan menu Recipe akan menampilkan resep masakan yang tersedia dengan adanya perkiraan harga yang dihitung dari bahan yang dipakai untuk mengikuti resep itu.",

  designIterartion = "Ide ini adalah pengembangan dari ReBako versi sebelumnya yang masih kurang valueable dalam menangani masalah yang merupakan dasar dari ide ini. Pengembangan dilakukan dengan meneliti kembali kekurangan dari fitur yang telah di-implementasikan pada ReBako versi sebelumnya. Kini, setiap fitur telah valueable sesuai dengan konteks masalah ReBako ini. Selain itu, desain sebelumnya telah diperbaiki menjadi desain yang lebih jelas dan profesional.",

  implementationHandoff = "Project ini masih dalam progress dan sekarang sudah menyelesaikan desain figma, karena ini solo project maka handoff dilakukan sendiri untuk implementasikan sesuai dengan desain figma yang sudah dibuat.",

  finalDesign = "Hasil desain final dari wireframe ReBako dan referensi website kompetitor.",

  resultLearning = "Riset untuk metric akan diambil dari respon positif dan negatif sesuai jawaban responden, serta user testing akan dilakukan dengan interview dan next step adalah implementasi yang masih dalam perencanaan.",

  metric = "Planned",

  userTesting = "5 User Interview",

  nextSteps = "Planned"
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
                <li>{firstGoal}</li>
                <li>{secondGoal}</li>
                <li>{thirdGoal}</li>
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
                <li>Melakukan riset ulang dari latar masalah supaya dapat melihat kekurangan dari ide dan dapat mengembangkannya.</li>
                <li>Melakukan perencanaan backlog setiap fitur.</li>
                <li>Membuat desain wireframe halaman pertama setiap user membuka menu atau sesuai gambaran awal untuk ReBako.</li>
                <li>Melakukan perbandingan desain awal atau wireframe dengan desain website kompetitor.</li>
                <li>Melakukan desain ulang dari wireframe sebelumnya dengan panduan hasil riset dari perbandingan desain kompetitor.</li>
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
                  <p className="text-gray-600 mt-2">
                    {firstInsight}
                    <br></br><br></br>
                    {secondInsight}
                  </p>
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
                    <img src={WirePricelist} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireBudget} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={WireRecipe} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
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