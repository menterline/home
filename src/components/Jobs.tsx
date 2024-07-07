import { Chip } from "@mui/material";
import { Job } from "../types/Job";
type Props = {
  jobs: Job[];
};

const getDateString = (startDate: string, endDate?: string) => {
  return `${startDate} - ${endDate || "Present"}`;
};
export function Jobs(props: Props) {
  const { jobs } = props;
  return (
    <div className="flex flex-col gap-4 border-l-2 border-monokaiGreen">
      {jobs.map((job) => (
        <div
          key={job.company}
          className="p-4 flex flex-col gap-4 text-gray-400 hover:text-monokaiText transition-colors duration-500 group relative"
        >
          <div className="">
            <div className="flex flex-col lg:flex-row justify-between items-baseline">
              <h1 className="text-2xl max-w-1/2">{job.company}</h1>
              <span>{getDateString(job.startDate, job.endDate)}</span>
            </div>
            <h1 className="text-xl">{job.title}</h1>
            <div className="flex flex-col gap-4">
              <div className="">
                {job.description && <div>{job.description}</div>}
                {job.bullets && job.bullets.length > 0 && (
                  <ul>
                    {job.bullets?.map((bullet) => (
                      <li key={bullet} className="list-disc ml-8">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex gap-4 flex-wrap">
                {job.skills.length > 0 &&
                  job.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
              </div>
            </div>
          </div>
          <li className="absolute -left-2 top-1 inset-y-0 text-5xl text-monokaiGreen " />
        </div>
      ))}
    </div>
  );
}
