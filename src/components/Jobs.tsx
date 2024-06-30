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
    <div className="flex flex-col gap-4">
      {jobs.map((job) => (
        <div className="border-2 border-transparent border-solid hover:border-gray-300 rounded-lg p-4 flex flex-col gap-4 text-gray-500 hover:text-gray-300 transition-colors duration-1000 group">
          <div className="">
            <div className="flex flex-col lg:flex-row justify-between items-baseline">
              <h1 className="text-2xl">{job.company}</h1>
              <span>{getDateString(job.startDate, job.endDate)}</span>
            </div>
            <h1 className="text-xl">{job.title}</h1>
            <div className="hidden group-hover:flex flex-col gap-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:animate-expandDown origin-top">
                {job.description && <div>{job.description}</div>}
                {job.bullets && job.bullets.length > 0 && (
                  <ul>
                    {job.bullets?.map((bullet) => (
                      <li className="list-disc ml-8">{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex gap-4 flex-wrap">
                {job.skills.length > 0 &&
                  job.skills.map((skill) => (
                    <Chip label={skill} color="primary" variant="outlined" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
