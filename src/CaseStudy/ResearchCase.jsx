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
  overview = "Penelitian deteksi komentar sarkasme berbasis kombinasi teks & emoji pada platform TikTok menggunakan model deep learning indoBERTweet dan Bi-LSTM yang membahas kinerja kedua model.",

  role = "Research Lead · Data Engineer · Deep Learning Engineer · Media Production Lead",
  tools = "Microsoft Word · Microsoft Excel · Canva · Capcut · Python",
  status = "Completed",

  problem = "Sarkasme merupakan bentuk komunikasi yang sering muncul di media sosial dan memiliki makna berlawanan dengan teks yang disampaikan. Hal ini membuat sarkasme sulit dipahami oleh model kecerdasan buatan, terlebih jika komentar mengandung kombinasi teks dan emoji yang dapat memunculkan makna ambigu.",

  firstGoal = " — Membangun model indoBERTweet",
  secondGoal = " — Membangun model Bi-LSTM berbasis FastText",
  thirdGoal = " — Membandingkan performa kedua model",

  research = "Metode penelitian dilakukan secara kualitatif dari platform TikTok yang menjadi dataset untuk penelitian ini, berikut alur pengerjaannya :",

  preprocessTraining = "Preprocessing dilakukan sebelum memasuki proses training & validation dan testing, ini dilakukan supaya dataset dapat diproses oleh model yang sudah dikembangkan.",

  model = "Kedua model menunjukkan performa training & validation yang stabil, serta mampu memprediksi sarkasme dengan baik tanpa menghafal pola.",

  finalResult = "Kedua model berhasil mendeteksi sarkasme berbasis teks dan emoji dengan output prediksi benar yang lebih tinggi dibanding prediksi salah. Model indoBERTweet menjadi model yang lebih akurat dan Bi-LSTM tetap berfungsi baik, tetapi tidak seakurat indoBERTweet yang sudah melalui proses fine-tuning. Berikut alasan model indoBERTweet menjadi model yang lebih akurat :",

  resultLearning = "Riset untuk metric akan diambil dari respon positif dan negatif sesuai jawaban responden, serta user testing akan dilakukan dengan interview dan next step adalah implementasi yang masih dalam perencanaan.",

  metric = "Accuracy, Precision, Recall, F1-Score, Specificity, ROC-AUC",

  userTesting = "—",

  nextSteps = "Menambah dataset menjadi lebih besar dan menguji model dengan dataset terpisah teks & emoji"
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
                {/* Research Lead */}
                <h5><b className="text-gray-800 text-sm font-semibold">Research Lead</b></h5>
                <li>Melakukan riset studi dari berbagai penelitian terkait model deep learning.</li>
                <li>Merancang alur metodologi penelitian.</li>
                <li>Menulis laporan penelitian literature review, metodologi, hasil, dan kesimpulan.</li>
                <li>Menyusun abstrak dan menyempurnakan bagian metodologi, hasil, dan kesimpulan.</li>

                {/* Data Engineer */}
                <h5><b className="text-gray-800 text-sm font-semibold">Data Engineer</b></h5>
                <li>Scrapping data komentar TikTok menggunakan apify.com.</li>
                <li>Menggabungkan seluruh file dataset menjadi satu dataset terpusat.</li>
                <li>Melakukan data cleaning yaitu menghapus simbol, noise, dan spasi berlebih.</li>
                <li>Melakukan data shuffling untuk mencegah model sekadar menghafal pola komentar.</li>
                <li>Melakukan manual labeling untuk total 4.363 komentar.</li>

                {/* Deep Learning Engineer */}
                <h5><b className="text-gray-800 text-sm font-semibold">Deep Learning Engineer</b></h5>
                <li>Mengembangkan dan melatih model indoBERTweet.</li>
                <li>Mengembangkan model Bi-LSTM dengan FastText embedding.</li>
                <li>Mengatur pipeline training, validation, testing dan preprocessing emoji.</li>
                <li>Membuat kamus konversi emoji menjadi teks Bahasa Indonesia.</li>

                {/* Media Production Lead Role */}
                <h5><b className="text-gray-800 text-sm font-semibold">Media Production Lead</b></h5>
                <li>Membuat poster penelitian.</li>
                <li>Membuat video presentasi metodologi untuk poster dan PPT.</li>
                <li>Membuat trailer penelitian.</li>
                <li>Membuat video demonstrasi model Bi-LSTM.</li>
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
                  <h4 className="font-semibold">Research Method</h4>

                  {/* Subtext 1 */}
                  <p className="text-gray-600 mt-2 text-sm">
                    {research}
                    <br></br><br></br>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                      <li>Scrapping data dilakukan menggunakan apify.com dari beberapa video TikTok yang memiliki interaksi sarkasme berbasis teks & emoji.</li>
                      <li>Setiap video menghasilkan satu file dataset, kemudian seluruh file digabung menjadi satu dataset terpusat agar proses cleaning lebih efektif.</li>
                      <li>Data cleaning mencakup penghapusan spasi berlebihan, karakter tidak penting, dan simbol.</li>
                      <li>Dataset kemudian di-shuffle agar urutan komentar dari setiap video tidak membuat model menghafal pola ketika melalui proses training & validation.</li>
                      <li>Labeling dilakukan secara manual untuk menjaga kualitas data.</li>
                      <li>Dataset dipisahkan menjadi training & validation dan testing.</li>
                      <li>Mengembangkan kedua model melalui training & validation dan testing</li>
                      <li>Membandingkan kedua model dengan proses loss, metrik, dan confusion matrix</li>
                    </ul>
                  </p>
                </div>

                {/* Point 2 */}
                <div>
                  {/* Header 2 */}
                  <h4 className="font-semibold">Preprocessing & Training</h4>
                  
                  {/* Subtext 2 */}
                  <p className="text-gray-600 mt-2 text-sm">
                    {preprocessTraining}
                  </p>
                  <br></br>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                      <li>indoBERTweet digunakan sebagai model berbasis transformer yang telah dilatih pada bahasa Indonesia gaul di Twitter.</li>
                      <li>Bi-LSTM + FastText digunakan sebagai pendekatan baseline yang tetap mampu mengenali konteks.</li>
                      <li>Library emoji digunakan untuk mengubah emoji menjadi teks.</li>
                      <li>Hasil konversi emoji dibersihkan ulang dan disesuaikan dengan kamus buatan sendiri agar maknanya relevan dengan bahasa Indonesia.</li>
                      <li>Training & validation berlangsung selama 5 epoch pada masing-masing model dengan optimizer untuk mengurangi loss.</li>
                      <li>Testing berlangsung selama 5 epoch sama seperti proses training & validation.</li>
                    </ul>
                  
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
                  <p className="text-gray-600 mt-2 text-sm">{model}</p>
                </div>
              </article>
            </div>

            {/* Final Design */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {/* Header */}
              <h2 className="text-2xl font-semibold mb-4">Final Result</h2>

              {/* Subtext */}
              <p className="text-gray-600 mb-4 text-sm">
                {finalResult}
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                <li>Telah di-pretrained pada dataset bahasa Indonesia gaul di Twitter.</li>
                <li>Mampu memahami konteks singkatan dan bahasa informal.</li>
                <li>memiliki representasi teks yang lebih mendalam dibanding embedding FastText.</li>
              </ul>

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