export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-ink-muted">
            Browse frontend, backend, database, and tooling options side by side, add the ones
            you want, and walk away with a clear list for your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#technologies" className="btn-gradient focus-ring rounded-full px-6 py-3 text-sm">
              Explore Technologies
            </a>
            <a
              href="#about"
              className="focus-ring rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-pink/60 hover:text-brand-pink"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-stack.png"
            alt="Illustration of a glowing, layered technology stack"
            className="w-full max-w-sm drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
