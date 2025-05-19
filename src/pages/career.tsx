export default function CareerPage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">My Career Journey</h1>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Cool Startup — Software Developer (2021–2023)</h2>
          <p className="mb-4">
            I helped build tools for managing warehouse robots, including real-time dashboards and configuration interfaces.
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Rebuilt frontend in React + TypeScript</li>
            <li>Integrated WebSocket-based data streams</li>
            <li>Wrote internal docs and contributed to dev tooling</li>
          </ul>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">LegacyCo — Junior Developer (2019–2021)</h2>
          <p className="mb-4">
            Cut my teeth on legacy code, debugging ancient PHP and improving UX with modern JS where possible.
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Introduced ESLint & Prettier to dev workflow</li>
            <li>Learned Git, code reviews, and teamwork</li>
            <li>Became passionate about writing clean, scalable code</li>
          </ul>
        </section>
      </main>
    );
  }
  