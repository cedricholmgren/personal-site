import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "../components/Icon";

interface Skill {
  category: string;
  items: string[];
  color: {
    bg: string;
    text: string;
  };
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: {
      bg: "bg-blue-100",
      text: "text-blue-800",
    },
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    color: {
      bg: "bg-green-100",
      text: "text-green-800",
    },
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
    color: {
      bg: "bg-purple-100",
      text: "text-purple-800",
    },
  },
];

const interests = [
  {
    title: "Gaming",
    description:
      "Passionate about NBA 2K, chess, and Rocket League. Love the strategic thinking and competitive nature of these games.",
    icon: "code",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Faith",
    description:
      "My faith is an important part of who I am. I enjoy connecting with others who share similar values and beliefs.",
    icon: "user",
    color: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Sports",
    description:
      "Big fan of basketball and following the NBA. Love the combination of athleticism and strategy in sports.",
    icon: "briefcase",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function About() {
  return (
    <Layout
      title="About | Cedric"
      description="Learn more about Cedric - Software Developer, Gamer, and Sports Enthusiast"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Me
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">
              Software Developer & Tech Enthusiast
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm a passionate software developer who loves building modern web
            applications. When I'm not coding, you'll find me gaming, playing
            chess, or watching sports.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100">
              <Icon name="user" className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold">My Background</h2>
          </div>
          <div className="prose prose-lg text-gray-600">
            <p>
              I've been passionate about technology and software development for
              as long as I can remember. My journey in tech started with simple
              HTML pages and has evolved into building complex web applications
              using modern technologies.
            </p>
            <p>
              Throughout my career, I've worked on various projects ranging from
              small business websites to large-scale enterprise applications. I
              believe in writing clean, maintainable code and staying up-to-date
              with the latest technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100">
              <Icon name="code" className="w-6 h-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className={`px-3 py-1 ${skill.color.bg} ${skill.color.text} rounded-full text-sm font-medium`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100">
              <Icon name="book-open" className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl"
              >
                <div
                  className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg ${interest.color}`}
                >
                  <Icon
                    name={interest.icon as any}
                    className={`w-6 h-6 ${interest.iconColor}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out if you'd like to work together
            or just chat about tech, gaming, or sports!
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
