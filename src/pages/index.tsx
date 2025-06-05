import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Tag from "../components/Tag";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1>Hey, I'm Cedric</h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm a software developer, husband, father of one, rec league hockey
            forward, rusty rocket league grand champ, and I live in the Pacific
            Northwest.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Tag variant="purple">Lutheran</Tag>
            <Tag variant="green">Father / Husband</Tag>
            <Tag variant="blue">Software Developer</Tag>
            <Tag variant="red">Gamer</Tag>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100">
            <Icon name="briefcase" className="w-6 h-6 text-amber-600" />
          </div>
          <h2>Career</h2>
          <p className="text-gray-600 mb-6">
            I first got to paid to code at Chick-fil-a at 17, see my journey as
            a developer.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
          >
            View career <Icon name="arrow-right" className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100">
            <Icon name="code" className="w-6 h-6 text-indigo-600" />
          </div>
          <h2>Projects</h2>
          <p className="text-gray-600 mb-6">
            Personal projects I've built or worked on. All starting with this
            site.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
          >
            See projects <Icon name="arrow-right" className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-rose-100">
            <Icon name="book-open" className="w-6 h-6 text-rose-600" />
          </div>
          <h2>Blog</h2>
          <p className="text-gray-600 mb-6">
            Thoughts on coding, chess, rocket league, and other interests.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-rose-600 font-medium hover:text-rose-700"
          >
            Read articles <Icon name="arrow-right" className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100">
              <Icon name="user" className="w-6 h-6 text-teal-600" />
            </div>
            <h2>A Bit About Me</h2>
          </div>
          <p className="text-gray-600 mb-6"></p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Tag variant="green">NBA 2K</Tag>
            <Tag variant="yellow">Chess</Tag>
            <Tag variant="orange">Rocket League</Tag>
            <Tag variant="red">Faith</Tag>
            <Tag variant="blue">Sports</Tag>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
          >
            Learn more about me{" "}
            <Icon name="arrow-right" className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
