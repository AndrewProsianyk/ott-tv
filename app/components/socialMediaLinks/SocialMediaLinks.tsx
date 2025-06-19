import React from "react";
import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";

type LinkItem = {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

const links: LinkItem[] = [
  {
    href: "https://fb.com",
    icon: <FacebookIcon />,
    ariaLabel: "Link to facebook",
  },
  {
    href: "https://x.com",
    icon: <TwitterIcon />,
    ariaLabel: "Link to twitter/x",
  },
  {
    href: "https://www.linkedin.com/",
    icon: <LinkedInIcon />,
    ariaLabel: "Link to linkedin",
  },
];

export default function SocialMediaLinks() {
  return (
    <ul className="flex gap-[24px]">
      {links.map((link, i) => {
        return (
          <li key={i}>
            <Link href={link.href} aria-label={link.ariaLabel}>
              {link.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
