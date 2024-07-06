import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";

function Content() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Matt Enterline</h1>
          <span className="">Full Stack Software Engineer</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:border-t-2 lg:border-t-monokaiBlue">
          <AboutMe className="w-full lg:w-1/2 border-t-2 border-t-monokaiBlue pt-2 lg:border-t-0" />
          <Experience className="w-full lg:w-2/5 border-t-2 border-t-monokaiBlue pt-2 lg:border-t-0 " />
        </div>
      </div>
    </div>
  );
}

export default Content;
