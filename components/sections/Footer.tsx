export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-10 print:hidden">
      <div className="mx-auto max-w-container px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>© {year} Manas Raman Acharya</p>
        <p className="font-mono text-xs">
          Built with Next.js, Tailwind, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
