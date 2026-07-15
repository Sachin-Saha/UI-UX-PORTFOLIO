const links = [
  { label: "About", href: "#about" },
  { label: "Case studies", href: "#case-study" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-display text-lg text-ink">Sachin Saha</p>
          <p className="text-[12px] tracking-wide uppercase text-muted">
            UI/UX Designer
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] tracking-wide uppercase text-muted underline-hover hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[12px] tracking-wide text-muted">
          © 2026 Sachin Saha
        </p>
      </div>
    </footer>
  );
}
