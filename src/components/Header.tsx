import Link from "next/link";
import Icon from "./Icon";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Cedric
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/career"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Career
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            About
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon
              name="github"
              className="w-5 h-5 text-gray-600 hover:text-gray-900 transition"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon
              name="linkedin"
              className="w-5 h-5 text-gray-600 hover:text-gray-900 transition"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Icon
              name="twitter"
              className="w-5 h-5 text-gray-600 hover:text-gray-900 transition"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
