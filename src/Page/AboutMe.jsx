// About Me
function AboutMe() {
  return (
    <main id="about" className="bg-white py-20 px-6 md:px-10 lg:px-16">
      {/* Layout Card */}
      <article className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Soft Skills Card */}
        <section className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col">
          <header className="text-xl font-semibold mb-4">Soft Skills</header>
          <ul className="list-disc list-inside space-y-2 text-gray-700 flex-1">
            <li>Creativity</li>
            <li>Critical Thinking</li>
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
          </ul>
        </section>

        {/* Hard Skills Card */}
        <section className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col">
          <header className="text-xl font-semibold mb-4">Hard Skills</header>
          <ul className="list-disc list-inside space-y-2 text-gray-700 flex-1">
            <li>UI/UX Design</li>
            <li>HTML, CSS & JavaScript</li>
            <li>React & Tailwind</li>
            <li>Machine Learning</li>
            <li>API Integration</li>
            <li>Version Control</li>
          </ul>
        </section>

        {/*  Focus Expertise Card */}
        <section className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col">
          <header className="text-xl font-semibold mb-4">Focus Expertise</header>
          <ul className="list-disc list-inside space-y-2 text-gray-700 flex-1">
            <li>User Research & Analysis</li>
            <li>User Flow & Interaction Design</li>
            <li>Usability Testing</li>
            <li>Front-End Development</li>
            <li>Information Architecture</li>
            <li>Documentation & Iteration</li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default AboutMe;