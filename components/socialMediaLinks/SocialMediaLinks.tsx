import { SOCIAL_LINKS } from "@/lib/config/socials";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const ICON_MAP: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

const SOCIAL_ITEMS = Object.values(SOCIAL_LINKS).map((socialLink) => ({
  ...socialLink,
  icon: ICON_MAP[socialLink.key],
}));

export default function SocialMediaLinks() {
  return (
    <div className="flex items-center gap-6">
      {SOCIAL_ITEMS.map((socialItem) => (
        <Link
          key={socialItem.key}
          href={socialItem.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialItem.ariaLabel}
        >
          <socialItem.icon className="w-7 h-7 text-slate-200 hover:text-[#0DB760] hover:scale-110 transition-all duration-300"/>
        </Link>
      ))}
    </div>
  )
}