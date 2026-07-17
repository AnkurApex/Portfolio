import { developerConfig } from "./developer";

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: developerConfig.github,
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: developerConfig.linkedin,
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: `mailto:${developerConfig.email}`,
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: `tel:${developerConfig.phone}`,
    icon: "phone",
  },
];

