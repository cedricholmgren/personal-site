import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Cedric Logo"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-700">Cedric</span>
            <span className="text-xl font-bold text-gray-700">Holmgren</span>
          </div>
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
