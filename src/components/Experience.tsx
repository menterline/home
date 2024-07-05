import { jobsList } from "../assets/jobsList";
import { Jobs } from "./Jobs";
import MyPDF from "../../public/MatthewEnterline-Resume.pdf";
import { Button } from "@mui/material";

export function Experience() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl underline">Experience</h1>
        <Button variant="outlined" sx={{ backgroundColor: "#003566" }}>
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
