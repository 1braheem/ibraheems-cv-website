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
    username: "Ibraheem Aziz",
    icon: Icons.link,
    link: "https://www.linkedin.com/in/ibraheem-aziz-693b19322/",
  },
  {
    name: "Gmail",
    username: "ibraheemaziz3568",
    icon: Icons.gmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=ibraheemaziz3568@gmail.com",
  },
];
