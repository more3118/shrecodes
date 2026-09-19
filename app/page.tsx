import Image from "next/image";

const certifications = [
  {
    title: "Claude Certified Associate - Foundations",
    issuer: "Anthropic",
    issued: "Issued Sep 2026",
    expires: "Expires Sep 2027",
    status: "Active",
    credentialId: "a6041115-4794-4f40-8459-c3094901b358",
    link: "https://www.credly.com/badges/a6041115-4794-4f40-8459-c3094901b358/public_url",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Jun 2026",
    expires: "Expires Jun 2029",
    status: "Active",
    credentialId: "Credly badge",
    link: "https://www.credly.com/badges/685b61c6-0eb1-4f1d-8208-5f0da9127f64/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    issued: "Issued Mar 2022",
    expires: "Expires Mar 2027",
    status: "Active",
    credentialId: "BEEA685F619DD1DB",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShreyasMore-6417/BEEA685F619DD1DB?sharingId",
  },
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    issued: "Issued Mar 2022",
    expires: "Expired Mar 2024",
    status: "Legacy",
    credentialId: "Legacy Credly badge",
    link: "https://www.credly.com/badges/37e3e6cd-dbdb-4ef4-9367-b6c37bf98a5e?source=linked_in_profile",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Issued Feb 2022",
    expires: "Expired Feb 2025",
    status: "Legacy",
    credentialId: "Credly badge",
    link: "https://www.credly.com/badges/2c252172-e5c9-4faf-8046-ee3742f84418?source=linked_in_profile",
  },
  {
    title: "AZ-303 Microsoft Azure Architect Technologies",
    issuer: "Microsoft",
    issued: "Issued Nov 2021",
    expires: "No expiry listed",
    status: "Completed",
    credentialId: "Credly badge",
    link: "https://www.credly.com/badges/1d037ebc-5b29-4d69-ae19-48ea2ef6a590?source=linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    issued: "Issued Jul 2021",
    expires: "Active",
    status: "Active",
    credentialId: "7F4702B8D76B861E",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShreyasMore-6417/7F4702B8D76B861E?sharingId=67AB8B055E538D58",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issued: "Issued Oct 2020",
    expires: "Active",
    status: "Active",
    credentialId: "FB895BEB4C3B4E48",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShreyasMore-6417/FB895BEB4C3B4E48?sharingId=67AB8B055E538D58",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_32%),linear-gradient(135deg,_#07111f_0%,_#0f172a_55%,_#111827_100%)] text-slate-200">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Shreyas More
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#certifications" className="transition hover:text-white">
            Certifications
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 sm:px-8 lg:px-10">
        <section className="grid items-center gap-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12 lg:p-16">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
              AI Engineer • Cloud & Product Builder
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building AI-powered products that turn complex systems into practical outcomes.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              I design and ship intelligent experiences across cloud architecture, LLM applications, automation, and product engineering—bringing strategy, data, and deployment together into reliable systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#certifications"
                className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                View Credentials
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-800/80 px-3 py-2 text-sm text-slate-300">
                LLMs & AI workflows
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-2 text-sm text-slate-300">
                AWS + Azure cloud systems
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-2 text-sm text-slate-300">
                End-to-end product delivery
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-sky-400/20 to-violet-400/20 blur-3xl" />
            <Image
              className="relative h-72 w-72 rounded-[2rem] object-cover shadow-2xl ring-8 ring-slate-800/80 sm:h-80 sm:w-80"
              src="/shreyasmore.jpeg"
              alt="Shreyas More"
              width={320}
              height={320}
              priority
            />
          </div>
        </section>

        <section id="about" className="grid gap-8 rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-8 shadow-sm backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              I build intelligent products that are useful, scalable, and production-ready.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              My work sits at the intersection of AI, cloud, and product engineering. I enjoy turning ideas into practical systems—whether that means building agentic workflows, integrating LLMs into real user journeys, or designing the platform foundation that makes those experiences reliable and measurable.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-slate-100">
            <h3 className="text-lg font-semibold">Core strengths</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Designing AI-driven user experiences and workflows</li>
              <li>• Building on AWS and Azure with secure, scalable architecture</li>
              <li>• Translating business goals into practical AI products</li>
            </ul>
          </div>
        </section>

        {/*
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
        */}

        <section id="certifications" className="rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-8 shadow-sm backdrop-blur lg:p-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Certifications
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Credentials and professional learning milestones.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <a
                key={`${certification.title}-${certification.issued}`}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {certification.issuer}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      certification.status === "Active"
                        ? "bg-emerald-400/15 text-emerald-300"
                        : certification.status === "Legacy"
                          ? "bg-amber-400/15 text-amber-300"
                          : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {certification.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {certification.title}
                </h3>
                <div className="mt-3 space-y-1 text-sm text-slate-400">
                  <p>{certification.issued}</p>
                  <p>{certification.expires}</p>
                  {certification.credentialId ? (
                    <p className="font-medium text-slate-300">ID: {certification.credentialId}</p>
                  ) : null}
                </div>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-slate-100">
                  Show credential
                  <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
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
                Ready to build an AI product with real business impact?
              </h2>
              <p className="mt-3 max-w-xl text-slate-300">
                Whether you need an AI-powered experience, an intelligent workflow, or a modern product foundation on the cloud, I&apos;d love to help turn the idea into something measurable and deployable.
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

      <footer className="border-t border-slate-800/70 bg-slate-950/40 py-6 text-center text-sm text-slate-500">
        © 2026 Shreyas More. Crafted with care.
      </footer>
    </div>
  );
}
