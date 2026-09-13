const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Technologies", "Projects", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"],
  },
];

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-surface-2 text-ink-muted transition hover:border-brand-pink/60 hover:text-brand-pink"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="about" className="border-t border-surface-2 bg-base-soft">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-lg font-bold text-gradient">Dev Stack</span>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              A place to browse technologies and put together the stack you'll actually use
              on your next build.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016.2 0c2.3-1.5 3.4-1.2 3.4-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 4.9a9.3 9.3 0 01-2.7.7 4.7 4.7 0 002.1-2.6 9.4 9.4 0 01-3 1.1 4.6 4.6 0 00-8 4.2A13.1 13.1 0 011.6 3.6a4.6 4.6 0 001.4 6.2 4.6 4.6 0 01-2.1-.6v.1a4.6 4.6 0 003.7 4.5 4.6 4.6 0 01-2 .1 4.6 4.6 0 004.3 3.2A9.3 9.3 0 010 19.3 13.1 13.1 0 007.3 21c8.5 0 13.1-7 13.1-13.1v-.6A9.4 9.4 0 0023 4.9z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="focus-ring rounded text-sm text-ink-muted transition hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-2 pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-ink-faint">
            <a href="#" className="focus-ring rounded hover:text-ink-muted">Privacy</a>
            <a href="#" className="focus-ring rounded hover:text-ink-muted">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
