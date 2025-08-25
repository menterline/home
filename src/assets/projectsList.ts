import { Project } from "../pages/Projects";

export const projectsList: Project[] = [
  {
    name: "ONCURVE",
    description: "ONCURVE is a we bapp designed to help Magic: The Gathering players simulate some number of opening hands, and if their play will be 'on curve' - a common heuristic of using all available resources.  This app is built with a Go backend serving HTML via HTMX.  My goal when building ONCURVE was to learn these technologies, and I can definitely see myself coming back to both in future projects. It took me a bit to get used to the Go style of keeping everything very basic, (no .map, .filter, etc.), and HTMX was a drastic departure from the SPA methodology I have spent much of my career working with.  However, Go's speed of compilation, and expressiveness, paired with it's simmplicity, and HTMX's view to return the web to hypermedia first - were both refresh and enjoyable to work with.",
    link: "https://oncurve-ewanbmhcfeemhee6.westus2-01.azurewebsites.net/",
    skills: ["Go", "HTMX", "Azure App Service", "TailwindCSS",],
  },
  {
    name: "AudioInsights",
    description:
      "I have been a Spotify user since it was invite only in US, and it is the first application I install on a new computer.  Furthermore, spotify-wrapped - Spotify's year-end overview of your listening habits is always so insightful, and surprises me with my most played artists and songs.  By tapping into the Spotify API, I am building an application to view this data at any time, and provide recommendations or other data insights on your listening behavior.  My goal with this project is to further utilize Tailwind, as well as learning HeadlessUI, and using react-query to make calls to the Spotify API.  Evnetually, I plan on writing a GraphQL service as a proxy service and wrapper around the spotify API, simplifying this UI into fewer API calls itself.  Note that because this app is still in development mode in spotify, it is not available for general use for all users.  If needed, I am happy to demo with my credentials.",
    link: "https://audioinsights.matt-enterline.dev/",
    skills: [
      "React",
      "Typescript",
      "TailwindCSS",
      "HeadlessUI",
      "RadixUI",
      "Spotify API",
      "react-query",
    ],
    workInProgress: true,
  },
  {
    name: "This portfolio page itself!",
    description:
      "This page is meant to serve as a home page for my projects, writings, and general information.  I love discussing software and sharing my thoughts on development design and practices - additionally, I am always eager to learn new technologies.  As with most things in software engineering, I think the best way to learn a tool is to build something.  The primary impetus to build this project was to have a central landing page for all of my projects in the future, and also a deep curiousity to try TailwindCSS. All in all, this page was built with React, Typescript, and TailwindCSS.  For more thoughts on my experience with tailwind, that will be my first blog entry.  I also wanted to try using an AI assistant to develop this page, and used CodeiumAI",
    link: "https://menterline.github.io/home",
    skills: ["React", "Typescript", "TailwindCSS", "React Router", "CodeiumAI"],
  },
];
