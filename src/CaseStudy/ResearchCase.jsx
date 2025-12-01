// assets
import Research from "../assets/Research.png";

// Research Training
import TrainBiLSTMProcess from "../Research/training/Bi-LSTM-Process.png";
import TrainBiLSTMValid from "../Research/training/Bi-LSTM-TrainValid.png";
import TrainBertweetProcess from "../Research/training/indoBERTweet-Process.png";
import TrainBertweetValid from "../Research/training/indoBERTweet-TrainValid.png";

// Research Testing
import TestBiLSTMMatrix from "../Research/tester/Bi-LSTM-Matrix.png";
import TestBiLSTMMetric from "../Research/tester/Bi-LSTM-Metric.png";
import TestBertweetMatrix from "../Research/tester/indoBERTweet-Matrix.png";
import TestBertweetMetric from "../Research/tester/indoBERTweet-Metric.png";

// ReBako Personal Case Study Project
function ResearchCase({
  // Case Study Value Type
  title = "Deteksi Komentar Sarkasme Teks & Emoji dengan indoBERTweet & Bi-LSTM",
  overview = "Pendekatan model deep learning yaitu indoBERTweet & Bi-LSTM untuk mendeteksi komentar sarkasme berbasis kombinasi teks dan emoji pada platform aplikasi TikTok.",

  role = "Research Lead · Data Engineer · Deep Learning Engineer · Media Production Lead",
  tools = "Microsoft Word · Microsoft Excel · Canva · Capcut · Python",
  status = "Completed",

  problem = "Sarkasme adalah bentuk komunikasi yang sering digunakan dalam interaksi dimedia sosial. Sarkasme memiliki makna yang bertolak belakang dengan kalimat yang disampaikan, sehingga sampai sekarang masih sulit untuk dipahami dengan akurat oleh model kecerdasan buatan.",

  firstGoal = "Goal 1 — Model indoBERTweet",
  secondGoal = "Goal 2 — Model Bi-LSTM",
  thirdGoal = "Goal 3 — Perbandingan model",

  firstInsight = "Metodologi penelitian ini adalah kualitatif dengan cara scrapping data menggunakan apify.com dengan mengambil komentar dari beberapa video yang telah dipilih dan memiliki komentar sarkasme berbasis kombinasi teks dan emoji. Dataset dikumpulkan dengan satu video akan menjadi satu file excel yang berisi hasil scrapping komentar tersebut. Tahap selanjutnya melakukan gathering data dengan menggabungkan semua file excel yang terkumpul menjadi satu file excel terpusat supaya dapat melalui proses data cleaning dengan mudah.",

  secondInsight = "Proses data cleaning dilakukan dengan menghilangkan spasi berlebihan dan simbol-simbol yang tidak di-inginkan. Data yang sudah bersih akan melalui proses data shuffled dengan tujuan supaya file excel terpusat yang memiliki komentar berurutan sesuai video menjadi acak sehingga model dapat terlatih dengan baik. Data yang belum diacak, kemungkinan besar model akan menghafal saja tanpa mengerti makna dari komentar tersebut. Setelah dataset sudah diacak, proses dilanjutkan ke labeling yang dilakukan secara manual. Dataset akan dipisah menjadi dataset khusus training dan dataset khusus testing.",

  datasetTraining = "Model indoBERTweet merupakan model fine-tuned atau telah mengerti komentar berbentuk teks dan dapat mengubahnya menjadi bentuk vektor. Model Bi-LSTM akan menggunakan Fast-Text untuk membantu meningkatkan kinerja model dalam membaca sekaligus mengubah komentar berbentuk teks menjadi vektor. Kedua model tidak secara langsung mengenali emoji dan tidak dapat melakukan konversi ke dalam bentuk vektor. Mengkonversikan emoji ke dalam bentuk teks dengan menggunakan libary bawaan python yaitu emoji lalu melakukan cleaning dari hasil konversi emojinya dalam bentuk teks dan akan dimasukkan ke dalam kamus emoji yang telah dibuat fungsinya untuk dikonversi lagi teks yang awalnya bahasa inggris menjadi bahasa indonesia. Emoji yang masuk ke dalam kamus emoji adalah emoji yang muncul dalam dataset. Training pada indoBERTweet dan Bi-LSTM dilakukan dalam 5 epoch dengan bantuan optimizer untuk mengurangi kemungkinan terjadinya loss berlebihan.",

  model = "Hasil training kedua model menunjukkan bahwa kedua model benar-benar dapat memprediksi dengan performa yang bagus. Selanjutnya, model akan langsung melalui proses testing dengan menggunakan dataset yang berbeda dari dataset khusus training dan validation",

  finalResult = "Hasil dari kedua model setelah melalui proses testing menunjukkan bahwa kedua model dapat mendeteksi komentar sarkasme berbasis kombinasi teks dan emoji dengan output prediksi benar yang lebih tinggi dibanding output prediksi salah. Model indoBERTweet menjadi model yang lebih tinggi dan akurat dibanding model Bi-LSTM karena model indoBERTweet telah dilatih sebelumnya dengan dataset bahasa indonesia gaul pada platform Twitter sehingga ketika dilatih dan melalui test, model indoBERTweet mempunyai performa yang lebih akurat dibanding model Bi-LSTM yang dilatih langsung pada dataset baru dengan bantuan Fast-Text yang sudah dilatih sebelumnya tetapi pada bahasa indonesia yang tidak menggunakan singkatan.",

  resultLearning = "Riset untuk metric akan diambil dari respon positif dan negatif sesuai jawaban responden, serta user testing akan dilakukan dengan interview dan next step adalah implementasi yang masih dalam perencanaan.",

  metric = "Accuracy, Precision, Recall, F1, Specificity, ROC-AUC",

  userTesting = "—",

  nextSteps = "Menambah dataset dan menguji model dengan dataset terpisah teks dan emoji"
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
                <p className="ml-2 text-sm text-white px-2 py-1 rounded-md bg-green-600">
                  {status}
                </p>
              </div>
            </div>

            {/* Overview Screen Image */}
            <div className="w-full lg:w-auto">
              <img src={Research} alt="Project Image" className="w-full rounded-xl shadow-md object-cover h-48 lg:h-40" />
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
              <p className="text-gray-600 text-sm space-y-2">{problem}</p>
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
                {/* Research Lead */}
                <h5><b className="text-gray-800 text-sm font-semibold">Research Lead</b></h5>
                <li>Melakukan riset dari paper research lain terkait model deep learning sebagai paper kunci.</li>
                <li>Melakukan riset untuk alur pengerjaan paper bagian metodologi penelitian.</li>
                <li>Membuat laporan penelitian bagian literature review, metodologi penelitian, hasil penelitian dan kesimpulan.</li>
                <li>Membuat paper penelitian bagian abstrak, metodologi penelitian, hasil penelitian dan kesimpulan.</li>

                {/* Data Engineer */}
                <h5><b className="text-gray-800 text-sm font-semibold">Data Engineer</b></h5>
                <li>Melakukan scrapping data dari platform aplikasi TikTok menggunakan apify.com.</li>
                <li>Mengumpulkan dataset yang terpisah menjadi satu file terpusat.</li>
                <li>Melakukan data cleaning pada dataset.</li>
                <li>Melakukan data shuffled untuk mencegah model tidak memahami sarkasme.</li>
                <li>Melakukan labeling manual pada dataset pada sebagian besar dataset dengan total 4.363 data komentar.</li>

                {/* Deep Learning Engineer */}
                <h5><b className="text-gray-800 text-sm font-semibold">Deep Learning Engineer</b></h5>
                <li>Membuat model indoBERTweet untuk training & validation dan testing.</li>
                <li>Membuat model Fast-Text untuk training & validation dan testing.</li>

                {/* Media Production Lead Role */}
                <h5><b className="text-gray-800 text-sm font-semibold">Media Production Lead</b></h5>
                <li>Membuat poster penelitian dari paper penelitian.</li>
                <li>Membuat video presentasi poster penelitian bagian metodologi penelitian.</li>
                <li>Membuat video presentasi PPT dari paper penelitian bagian metodologi penelitian.</li>
                <li>Membuat video trailer edit dari paper penelitian.</li>
                <li>Membuat video presentasi program dari model Bi-LSTM</li>
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
                  <h4 className="font-semibold">Dataset & Training</h4>
                  
                  {/* Subtext 2 */}
                  <p className="text-gray-600 mt-2">{datasetTraining}</p>
                  
                  {/* Wireframe Screen Image */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src={TrainBiLSTMProcess} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={TrainBiLSTMValid} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={TrainBertweetProcess} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                    <img src={TrainBertweetValid} alt="wireframe" className="rounded-md shadow-sm object-cover h-40 w-full" />
                  </div>
                </div>

                {/* Point 3 */}
                <div>
                  {/* Header 3 */}
                  <h4 className="font-semibold">Models Training & Validation Result</h4>
                  
                  {/* Subtext 3 */}
                  <p className="text-gray-600 mt-2">{model}</p>
                </div>
              </article>
            </div>

            {/* Final Design */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Final Result</h2>

              {/* Subtext */}
              <p className="text-gray-600 mb-4">{finalResult}</p>

              {/* Final Design Screen Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={TestBiLSTMMatrix} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={TestBiLSTMMetric} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={TestBertweetMatrix} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src={TestBertweetMetric} alt="screen" className="rounded-xl shadow-md object-cover h-64 w-full" />
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
                <p className="text-gray-700">Want to see the research paper?</p>
                <p className="text-sm text-gray-500">Link the paper Procedia & IEEE</p>
              </div>

              {/* Link To Button */}
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1gijX8tgO4iw2hO5dewEsCrEjOGvoZPpQ/view?usp=sharing" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">Procedia Paper</a>
                <a href="https://drive.google.com/file/d/1_BuiiDxNNIT4fXpxGUbwLmeR0wSLxbr8/view?usp=sharing" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">IEEE Paper</a>
              </div>
            </div>

            {/* Link To Trailer & Poster */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
              {/* Title */}
              <div>
                <p className="text-gray-700">Want to see the trailer or poster presentation?</p>
                <p className="text-sm text-gray-500">Link the trailer & poster video</p>
              </div>

              {/* Link To Button */}
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1V1pXcCe9bLfW4P6wMsUeUwbeiccz3YH2/view?usp=sharing" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">Watch Trailer</a>
                <a href="https://drive.google.com/file/d/1V5PWY1iwFtQ2n7JeQSuYiKVhF1Us7Ph3/view?usp=sharing" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Watch Poster</a>
              </div>
            </div>

            {/* Link To PPT & Program */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
              {/* Title */}
              <div>
                <p className="text-gray-700">Want to see the PPT or program presentation?</p>
                <p className="text-sm text-gray-500">Link the PPT & program video</p>
              </div>

              {/* Link To Button */}
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1Lfly7o14G8JthMwdyuqcYw8bo4sRCFuq/view?usp=sharing" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">Watch PPT</a>
                <a href="https://drive.google.com/file/d/1i3S4nbphM0QGpQAqRWR-3T0OQ-U-SFS6/view?usp=sharing" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Watch Program</a>
              </div>
            </div>

            {/* Link To Report & Source Code */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
              {/* Title */}
              <div>
                <p className="text-gray-700">Want to see the datasets or source code?</p>
                <p className="text-sm text-gray-500">Link the datasets & source code</p>
              </div>

              {/* Link To Button */}
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1VTdvF0sN_N5r3bu7p5ilTpnGDpfIhBEB/view?usp=drive_link" target="_blank" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-100">Dataset</a>
                <a href="https://drive.google.com/file/d/1VCI_C3-qQyfwWphm02bXo5t3eqSDnnNy/view?usp=drive_link" target="_blank" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Source Code</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ResearchCase;