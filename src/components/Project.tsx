import { Chip } from "@mui/material";
import { Project as ProjectType } from "../pages/Projects";

type Props = {
  project: ProjectType;
};
export function Project(props: Props) {
  return (
    <div className="flex flex-col gap-4 border-monokaiPurple border-2 p-4 rounded-md">
      <header>
        <a
          className="text-monokaiBlue text-3xl"
          href={props.project.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.project.name}
        </a>
        {props.project.workInProgress && (
          <p className="text-monokaiGreen italic">
            This application is a work in progress and not fully functional
          </p>
        )}
      </header>
      <p className="text-monokaiText">{props.project.description}</p>
      <div className="flex flex-row gap-4 flex-wrap">
        {props.project.skills?.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="secondary"
            variant="outlined"
          />
        ))}
      </div>
    </div>
  );
}
