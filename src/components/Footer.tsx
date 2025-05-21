export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Cedric. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS. Deployed on
          Cloudflare Pages.
        </p>
      </div>
    </footer>
  );
}
