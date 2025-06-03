import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import Icon from "../../components/Icon";
import Tag from "../../components/Tag";

type Props = {
  frontmatter: {
    title: string;
    date: string;
    tags?: string[];
  };
  contentHtml: string;
  slug: string;
};

export default function BlogPost({ frontmatter, contentHtml, slug }: Props) {
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout
      title={`${frontmatter.title} | Cedric`}
      description={`Blog post: ${frontmatter.title}`}
    >
      {/* Back Navigation */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition mb-8"
          >
            <Icon name="arrow-right" className="w-4 h-4 mr-2 rotate-180" />
            Back to blog
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <time className="text-gray-500 text-sm">
              {formatDate(frontmatter.date)}
            </time>
          </div>

          <h1 className="mb-6">{frontmatter.title}</h1>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {frontmatter.tags.map((tag, index) => (
                <Tag key={index} variant="blue">
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-3xl prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:text-indigo-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-blockquote:border-l-4 prose-blockquote:border-indigo-200 prose-blockquote:pl-6 prose-blockquote:italic
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-600 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* Navigation & CTA */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Back to Blog */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                <Icon name="book-open" className="w-6 h-6 text-purple-600" />
              </div>
              <h3>More Articles</h3>
              <p className="text-gray-600 mb-6">
                Check out my other blog posts about development, chess, and
                gaming.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                View all posts{" "}
                <Icon name="arrow-right" className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* About Me */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100">
                <Icon name="user" className="w-6 h-6 text-teal-600" />
              </div>
              <h3>About the Author</h3>
              <p className="text-gray-600 mb-6">
                I'm a software developer passionate about modern web
                technologies, chess strategy, and gaming.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
              >
                Learn more about me{" "}
                <Icon name="arrow-right" className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            Enjoyed this article? I'd love to hear your thoughts or discuss
            these topics further.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Get in touch <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Read more articles{" "}
              <Icon name="arrow-right" className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content/blog"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join("content/blog", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter: data,
      contentHtml,
      slug,
    },
  };
};
