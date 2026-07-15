import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Coming soon — Sachin Saha",
};

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg">
      <span className="font-body text-[13px] tracking-[0.2em] uppercase text-muted mb-8">
        Case studies
      </span>
      <h1 className="font-display text-balance text-4xl md:text-6xl text-ink mb-6 max-w-xl">
        More case studies are on their way.
      </h1>
      <p className="font-body text-[15px] text-muted max-w-md mb-10">
        This page will hold the full case study and prototype walkthrough,
        along with an index of future projects. Check back soon.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-[13px] tracking-wide uppercase transition-colors duration-300 hover:bg-ink hover:text-bg"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        Back to homepage
      </Link>
    </main>
  );
}
