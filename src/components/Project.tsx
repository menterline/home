import { Button, Chip } from "@mui/material";
import { Project as ProjectType } from "../pages/Projects";
import Link from "@mui/material/Link";

type Props = {
  project: ProjectType;
};
export function Project(props: Props) {
  return (
    <div className="flex flex-col gap-4 border-monokaiPurple border-2 p-4 rounded-md">
      <Link color="secondary" underline="always" className="w-fit">
        <a
          className="text-monokaiBlue text-3xl"
          href={props.project.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.project.name}
        </a>
      </Link>
      <p className="text-monokaiText">{props.project.description}</p>
      <div className="flex flex-row gap-4">
        {props.project.skills?.map((skill) => (
          <Chip label={skill} color="secondary" variant="outlined" />
        ))}
      </div>
    </div>
  );
}
