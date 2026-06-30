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
    link: "https://www.linkedin.com/search/results/all/?keywords=NCRA-UAV+Dependability+Lab&origin=RICH_QUERY_SUGGESTION&heroEntityKey=urn%3Ali%3Aorganization%3A107042203&position=0",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
