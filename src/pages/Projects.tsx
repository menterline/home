import { Project } from "../components/Project";

export type Project = {
  name: string;
  description: string;
  link: string;
  skills?: string[];
};

type Props = {
  projects: Project[];
};

export function Projects(props: Props) {
  return (
    <div className="flex flex-col gap-4 pl-16 pr-16">
      <div className="text-4xl underline text-center text-monokaiGreen mt-16">
        Projects
      </div>
      {props.projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}
