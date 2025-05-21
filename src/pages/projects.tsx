import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "../components/Icon";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "My personal website built with Next.js, TypeScript, and Tailwind CSS. Features a modern design and responsive layout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://cedric.dev",
    github: "https://github.com/cedric/personal-site",
  },
  {
    title: "Project Two",
    description:
      "A full-stack web application that helps users manage their tasks and projects efficiently.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project-two.com",
    github: "https://github.com/cedric/project-two",
  },
  {
    title: "Project Three",
    description:
      "An AI-powered tool that helps developers write better code and catch bugs early.",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    link: "https://project-three.com",
    github: "https://github.com/cedric/project-three",
  },
];

export default function Projects() {
  return (
    <Layout
      title="Projects | Cedric"
      description="Explore my software projects and contributions"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My Projects
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">
              Software I've built and contributed to
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Here are some of the projects I've worked on throughout my career.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                >
                  View Project{" "}
                  <Icon name="arrow-right" className="ml-2 w-4 h-4" />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 font-medium hover:text-gray-700"
                  >
                    <Icon name="github" className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to work together?</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Get in touch <Icon name="arrow-right" className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
