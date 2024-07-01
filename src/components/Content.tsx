import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";

function Content() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-16 md:flex-row justify-between">
        <div className="flex flex-col gap-12 lg:w-2/5">
          <div>
            <h1 className="text-6xl font-bold">Matt Enterline</h1>
            <li className="ml-8">Software Engineer @ Envestnet</li>
          </div>
          <Experience />
        </div>
        <div className="flex flex-col lg:w-2/5 gap-4">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default Content;
