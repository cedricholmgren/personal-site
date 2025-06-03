import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Tag from "../components/Tag";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2021 - Present",
    description:
      "Leading the development of enterprise-level web applications and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
    achievements: [
      "Led a team of 5 developers in building a new customer portal",
      "Reduced application load time by 40% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2019 - 2021",
    description:
      "Developed and maintained multiple web applications using modern JavaScript frameworks.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express"],
    achievements: [
      "Built a real-time collaboration feature used by 10,000+ users",
      "Improved test coverage from 60% to 90%",
      "Mentored 3 junior developers",
    ],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2018 - 2019",
    description:
      "Worked on various client projects, from small business websites to e-commerce platforms.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "WordPress"],
    achievements: [
      "Developed 15+ client websites",
      "Implemented responsive designs for all projects",
      "Reduced page load times by 30%",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2014 - 2018",
    description:
      "Focused on software engineering and web development. Participated in various hackathons and coding competitions.",
  },
];

export default function Career() {
  return (
    <Layout
      title="Career | Cedric"
      description="Explore Cedric's professional journey, experience, and achievements"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1>
            My Career
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">
              Professional Journey & Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From junior developer to senior engineer, I've worked on various
            projects and technologies. Here's a glimpse into my professional
            journey.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100">
              <Icon name="briefcase" className="w-6 h-6 text-indigo-600" />
            </div>
            <h2>Work Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3>{experience.title}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <Tag key={techIndex} variant="blue">
                      {tech}
                    </Tag>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100">
              <Icon name="book-open" className="w-6 h-6 text-teal-600" />
            </div>
            <h2>Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3>{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to new opportunities and challenges. Let's discuss
            how we can work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Get in touch <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Download Resume{" "}
              <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
