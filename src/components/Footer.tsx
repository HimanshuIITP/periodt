import Link from "next/link";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const shopLinks = [
  { label: "Eco-Friendly Pads", href: "#" },
  { label: "Menstrual Cups", href: "#" },
  { label: "Period Underwear", href: "#" },
  { label: "Comfort Kit", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#brand-story" },
  { label: "Period Talks", href: "#period-talks" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-cream" aria-label="Site footer">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="font-serif text-3xl font-bold text-cream">
              Periodt.
            </Link>
            <p className="mt-3 font-serif text-base italic text-cream/40">
              It&rsquo;s Natural, Period.
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/35">
              Comfortable, conscious period care designed for real life. Making menstrual health more accessible, one conversation at a time.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-cream/10 text-cream/40 transition-all hover:border-cream/30 hover:text-cream"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-8">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
                Shop
              </h3>
              <ul className="space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/35 transition-colors hover:text-cream/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/35 transition-colors hover:text-cream/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
                Support
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/35 transition-colors hover:text-cream/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-cream/8 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/25">
            &copy; {new Date().getFullYear()} Periodt. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">
            Made with care in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
