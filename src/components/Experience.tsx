import { jobsList } from "../assets/jobsList";
import { Jobs } from "./Jobs";

export function Experience() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h1 className="text-xl underline text-center ">Experience</h1>
      <div className="flex flex-col gap-4 pl-4">
        <Jobs jobs={jobsList} />
      </div>
    </div>
  );
}
