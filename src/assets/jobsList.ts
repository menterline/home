import { Job } from "../types/Job";
/*
Eventually this will be pulled from an API
*/
export const jobsList: Job[] = [
  {
    company: "Envestnet",
    title: "Software Engineer - UI Team Lead",
    startDate: "January 2022",
    description:
      "I am a UI development team lead at Envestnet, where our team is building the Next Gen Proposal application.  My greatest areas of focus are ensuring code quality through thorough reviews and building a robust test suite, while providing maximum value to our clients in using our software",
    bullets: [
      "Practicing test-driven development with Jest and React Testing Library",
      "Enhancing Typescript support by aligning strong types with API code",
      "Member of SDLC Task force to enable better agile practices",
    ],
    skills: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "Jest",
      "React Testing Library",
      "Redux",
    ],
  },
  {
    company: "Cargas Systems",
    title: "Software Engineer",
    startDate: "November 2019",
    endDate: "January 2022",
    description:
      "I was a full stack developer at Cargas Systems, where I worked on the devliery and service software, Cargas Energy.  While there, I spearheaded an initiative to build a unit testing suite for the UI - where previously there was none.  I developed a tiered pricing module to enable dynamic pricing for customers, as well as a text message service with a Twilio integration",
    skills: [
      "ReactJS",
      "SQL Server",
      "TypeScript",
      "Jest",
      "jQuery",
      "CSS",
      "Twilio Administration",
    ],
  },
  {
    company: "Confluence, Inc.",
    title: "Software Engineer",
    startDate: "July 2017",
    endDate: "November 2019",
    description:
      "I Built end-to-end desktop financial reporting applications with Winforms and WPF.  These applications are used by some of the largest global fund managers.  My time at Confluence solidified my view on the importance of unit tests, and automated testing in general.",
    bullets: [
      "Applications built in C# / .NET",
      "Strong Object Oriented principles applied to enable maximum test coverage and adherance to SOLID principles",
    ],

    skills: ["Winforms", "WPF", "C#", ".NET", "SQL Server", "Oracle"],
  },
  {
    company: "Susquehanna International Group, LLP",
    title: "Software Engineer",
    startDate: "September 2016",
    endDate: "May 2017",
    description:
      "I worked on a C++ network monitoring application that would monitor co-located servers at trading exchanges and alert on any out of bounds issues.",
    bullets: [
      "Monitoring data was stored in elasticsearch and logstash, with Kibana used for visualization",
      "Python data anlysis tools built for alerting",
      "Built Bash script to deploy and manage software routers for linux",
    ],

    skills: [
      "C++",
      "Linux",
      "ElasticSearch",
      "Logstash",
      "Kibana",
      "Python",
      "Bash",
    ],
  },
  {
    company: "SevOne, Inc.",
    title: "Software Engineer",
    startDate: "June 2014",
    endDate: "August 2016",
    description:
      "SevOne is a large network monitoring application that is used by top telecom companies globally.  My team worked on a set of linux services that would ingest data from disparate data sources, transform then through a set of processes, and store in our SQL Database.",
    bullets: [
      "Integrated Apache Kafka into legacy code base for over 10x performance improvement",
      "Critical member of troubleshooting team on high visibility customer issues",
    ],
    skills: ["C++", "Apache Kafka", "Linux", "MySQL"],
  },
];
