import Link from "next/link";
import Layout from "../../components/Layout";
import Icon from "../../components/Icon";
import Tag from "../../components/Tag";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "My First Blog Post",
    date: "May 14, 2025",
    excerpt:
      "This is my very first post on the site — written in Markdown and rendered statically using Next.js! A reflection on starting this blog journey.",
    slug: "first-post",
    tags: ["chess", "reflection"],
    readTime: "3 min read",
  },
  {
    title: "Building Modern Web Apps with Next.js",
    date: "May 10, 2025",
    excerpt:
      "Exploring the power of Next.js for building fast, scalable web applications. Tips, tricks, and best practices I've learned along the way.",
    slug: "building-modern-web-apps",
    tags: ["Next.js", "React", "TypeScript"],
    readTime: "8 min read",
  },
  {
    title: "The Strategy Behind Chess and Code",
    date: "May 5, 2025",
    excerpt:
      "How chess strategy translates to software development. Pattern recognition, planning ahead, and making calculated decisions under pressure.",
    slug: "chess-and-code-strategy",
    tags: ["chess", "strategy", "development"],
    readTime: "6 min read",
  },
];

export default function BlogIndex() {
  return (
    <Layout
      title="Blog | Cedric"
      description="Thoughts on development, gaming, chess, and life"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1>
            My Blog
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">
              Thoughts on development, gaming, and life
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I write about software development, chess strategy, gaming insights,
            and lessons learned throughout my journey. Join me as I share
            thoughts, tutorials, and reflections.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">
                <time className="text-sm text-gray-500">{post.date}</time>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>

              <h2>{post.title}</h2>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} variant="blue">
                    {tag}
                  </Tag>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                Read article{" "}
                <Icon name="arrow-right" className="ml-2 w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
              <Icon name="book-open" className="w-6 h-6 text-purple-600" />
            </div>
            <h2>What I Write About</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                <Icon name="code" className="w-6 h-6 text-blue-600" />
              </div>
              <h3>Development</h3>
              <p className="text-gray-600">
                Web development tutorials, best practices, and lessons learned
                from building modern applications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100">
                <Icon name="briefcase" className="w-6 h-6 text-amber-600" />
              </div>
              <h3>Chess & Strategy</h3>
              <p className="text-gray-600">
                Strategic thinking, pattern recognition, and how chess
                principles apply to software development and life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                <Icon name="user" className="w-6 h-6 text-green-600" />
              </div>
              <h3>Gaming & Life</h3>
              <p className="text-gray-600">
                Reflections on gaming culture, personal growth, faith, and
                finding balance in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Want to be notified when I publish new articles? Connect with me on
            social media or check back regularly for fresh content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Learn more about me{" "}
              <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Get in touch <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
