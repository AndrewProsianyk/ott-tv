import React from "react";
import Link from "next/link";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";

type LinkItem = {
  href: string;
  icon: React.ReactNode;
};

const links: LinkItem[] = [
  {
    href: "https://fb.com",
    icon: <FacebookIcon />,
  },
  {
    href: "https://x.com",
    icon: <TwitterIcon />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <LinkedInIcon />,
  },
];

export default function SocialMediaLinks() {
  return (
    <ul className="flex gap-[24px]">
      {links.map((link, i) => {
        return (
          <li key={i}>
            <Link href={link.href}>{link.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
}
