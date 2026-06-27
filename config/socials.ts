import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "GitHub",
    username: "1braheem",
    icon: Icons.gitHub,
    link: "https://github.com/1braheem",
  },
  {
    name: "LinkedIn",
    username: "ibraheem-aziz",
    icon: Icons.link,
    link: "https://www.linkedin.com/in/ibraheem-aziz-693b19322/",
  },
  {
    name: "Gmail",
    username: "ibraheemaziz3568",
    icon: Icons.gmail,
    link: "mailto:ibraheemaziz3568@gmail.com",
  },
];
