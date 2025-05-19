import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { GetStaticProps, GetStaticPaths } from "next";

type Props = {
  frontmatter: { title: string; date: string };
  contentHtml: string;
};

export default function BlogPost({ frontmatter, contentHtml }: Props) {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{frontmatter.date}</p>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
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
    },
  };
};
