import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, FacebookIcon, InstagramIcon, XIcon } from "./ui/SocialIcons";
import Container from "./ui/Container";

const quickLinks = [
  { label: "About ATS Corps", href: "/#about" },
  { label: "NEISAC Opportunities", href: "/#opportunities" },
  { label: "Engineering Consultancy", href: "/engineering", internal: true },
  { label: "Mining Manpower", href: "/mining-manpower", internal: true },
  { label: "Services Offered", href: "/#services" },
  { label: "Veteran Registration", href: "/#veteran-cta" },
];

const socials = [
  { label: "LinkedIn", icon: LinkedInIcon, href: "#" },
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "X (Twitter)", icon: XIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy pt-20">
      <Container className="grid grid-cols-1 gap-14 pb-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="font-heading text-xl font-bold text-white">ATS Corps</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
            Empowering veterans through co-working spaces, engineering consultancy,
            specialist manpower, and administrative support services across Northeast
            India.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
            Quick Links
          </h3>
          <ul className="mt-6 flex flex-col gap-3.5">
            {quickLinks.map((link) =>
              link.internal ? (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
            Contact
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              <span>info@atscorps.in</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/70">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              <span>+91 00000 00000</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} />
              <span>Guwahati, Assam, India</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-5 py-7 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ATS Corps. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
