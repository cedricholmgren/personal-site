import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Hey, I’m Cedric</h1>
      <p className="text-lg text-gray-700 mb-6">
        Developer, builder, and storyteller — welcome to my corner of the web.
      </p>
      <ul className="space-y-2">
        <li>
          <Link href="/projects" className="text-blue-600 underline">
            Projects →
          </Link>
        </li>
        <li>
          <Link href="/career" className="text-blue-600 underline">
            Career →
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-blue-600 underline">
            Blog →
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 underline">
            About →
          </Link>
        </li>
      </ul>
    </main>
  );
}
