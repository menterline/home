import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";

function Content() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Matt Enterline</h1>
          <li className="ml-8">Software Engineer @ Envestnet</li>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-12 border-t-2 border-t-monokaiBlue pt-2">
          <AboutMe className="w-full lg:w-1/2" />
          <Experience className="w-full lg:w-2/5" />
        </div>
      </div>
    </div>
  );
}

export default Content;
