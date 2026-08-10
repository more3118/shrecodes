import Image from "next/image";

const projects = [
  {
    title: "Product Launch Site",
    description:
      "A polished marketing experience designed to help a startup introduce a new platform with clarity and confidence.",
    stack: ["Next.js", "Tailwind", "Design Systems"],
  },
  {
    title: "Client Dashboard",
    description:
      "An internal dashboard focused on reducing friction, surfacing insights, and improving daily decision-making.",
    stack: ["React", "TypeScript", "Accessibility"],
  },
  {
    title: "Creative Portfolio",
    description:
      "A visually refined portfolio that balances storytelling, motion, and strong conversion-focused calls to action.",
    stack: ["Frontend", "Animation", "Content Strategy"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] text-slate-800">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900">
          Shreyas More
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-slate-900">
            About
          </a>
          <a href="#work" className="transition hover:text-slate-900">
            Work
          </a>
          <a href="#contact" className="transition hover:text-slate-900">
            Contact
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 sm:px-8 lg:px-10">
        <section className="grid items-center gap-10 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12 lg:p-16">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Software Developer • UI Engineer
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Building thoughtful digital experiences with modern web technology.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              I create polished, fast, and user-focused websites that turn ideas into memorable products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
                3+ years building web products
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
                Focused on clarity and performance
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-sky-400/20 to-violet-400/20 blur-3xl" />
            <Image
              className="relative h-72 w-72 rounded-[2rem] object-cover shadow-2xl ring-8 ring-white/70 sm:h-80 sm:w-80"
              src="/shreyasmore.jpeg"
              alt="Shreyas More"
              width={320}
              height={320}
              priority
            />
          </div>
        </section>

        <section id="about" className="grid gap-8 rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              I blend design thinking with reliable engineering.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              My work centers on creating immersive web experiences that feel effortless to use and easy to trust. I enjoy turning strategy, visuals, and technology into products that feel refined from the first interaction.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-slate-100">
            <h3 className="text-lg font-semibold">Core strengths</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Crafting elegant interfaces for startups and modern brands</li>
              <li>• Developing responsive, accessible user experiences</li>
              <li>• Collaborating closely to align product goals with visuals</li>
            </ul>
          </div>
        </section>

        <section id="work">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Selected Work
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                Projects that balance form and function.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_80px_-30px_rgba(15,23,42,0.8)] md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Let&apos;s collaborate
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Ready to build something polished and impactful?
              </h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Whether you need a fresh website, a product launch experience, or a refined online presence, I&apos;d love to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/more3118"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shreyasmore/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/60 py-6 text-center text-sm text-slate-500">
        © 2026 Shreyas More. Crafted with care.
      </footer>
    </div>
  );
}
