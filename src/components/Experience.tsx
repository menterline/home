import { jobsList } from "../assets/jobsList";
import { Jobs } from "./Jobs";
import MyPDF from "../assets/MatthewEnterline-Resume.pdf";
import { Button } from "@mui/material";

type Props = {
  className?: string;
};
export function Experience(props: Props) {
  return (
    <div className={`flex flex-col gap-4 justify-center ${props.className}`}>
      <div className="flex flex-col gap-4 md:flex-row justify-between md:pr-4">
        <h1 className="text-4xl font-bold text-monokaiBlue">Experience</h1>
        <Button className="w-fit" variant="contained" color="primary">
          <a href={MyPDF} download="MatthewEnterline-Resume.pdf">
            Download Resume
          </a>
        </Button>
      </div>
      <div className="flex flex-col gap-4 pl-4">
        <Jobs jobs={jobsList} />
      </div>
    </div>
  );
}
