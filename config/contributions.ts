export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "uav-monitoring-simulation",
    contibutionDescription:
      "Backend and cybersecurity internship work supporting a 2D UAV monitoring and simulation system.",
    repoOwner: "NCRA-UAV Dependability Lab",
    link: "https://www.linkedin.com/in/ibraheem-aziz-693b19322/",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
