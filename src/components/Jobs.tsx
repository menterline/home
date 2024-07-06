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
    <div className="flex flex-col gap-4 border-l-2 border-test">
      {jobs.map((job) => (
        <div className="border-2 border-transparent border-solid rounded-lg p-4 flex flex-col gap-4 text-gray-400 hover:text-gray-300 transition-colors duration-1000 group relative">
          <div className="">
            <div className="flex flex-col lg:flex-row justify-between items-baseline">
              <h1 className="text-2xl max-w-1/2">{job.company}</h1>
              <span>{getDateString(job.startDate, job.endDate)}</span>
            </div>
            <h1 className="text-xl">{job.title}</h1>
            <div className="hidden group-hover:flex flex-col gap-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out group-hover:animate-expandDown origin-top">
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
                    <Chip label={skill} color="secondary" variant="outlined" />
                  ))}
              </div>
            </div>
          </div>
          <li className="absolute -left-3 inset-y-0 text-6xl text-test " />
        </div>
      ))}
      <div className="md:h-80"></div>
    </div>
  );
}
