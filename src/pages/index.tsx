import Link from "next/link";
import Layout from "../components/Layout";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hey, I'm Cedric
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">
              Software Developer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I build modern web applications with TypeScript, React, and Next.js.
            When I'm not coding, you'll find me playing NBA 2K, chess, or Rocket
            League.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100">
            <Icon name="briefcase" className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Career</h2>
          <p className="text-gray-600 mb-6">
            My journey as a developer, experiences, and professional growth.
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
          <h2 className="text-2xl font-bold mb-3">Projects</h2>
          <p className="text-gray-600 mb-6">
            Software I've built or contributed to throughout my career.
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
          <h2 className="text-2xl font-bold mb-3">Blog</h2>
          <p className="text-gray-600 mb-6">
            Thoughts on development, gaming, and other interests.
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
            <h2 className="text-2xl font-bold">A Bit About Me</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Beyond coding, I'm passionate about gaming, chess strategy, and
            sports. My faith is an important part of who I am, and I enjoy
            connecting with others who share similar interests.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              NBA 2K
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Chess
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Rocket League
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              Faith
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Sports
            </span>
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
