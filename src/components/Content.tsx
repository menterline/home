import { AboutMe } from "./AboutMe";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Publications } from "./Publications";

function Content() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-16">
        <div className="text-center flex flex-col">
          <h1 className="text-6xl font-bold">Matt Enterline</h1>
          <div className="">Full Stack Software Engineer</div>
          <div className="flex flex-row gap-16 justify-center text-monokaiBlue">
            <a
              className="underline"
              href="https://github.com/menterline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="underline"
              href="https://www.linkedin.com/in/matthew-enterline-27873477/"
              target="_blank "
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="underline"
              href="mailto:matthew.j.enterline@gmail.com"
              target="_blank "
              rel="noopener noreferrer"
            >
              E-mail
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:border-t-2 lg:border-t-monokaiBlue">
          <section className="flex flex-col gap-12 w-full lg:w-1/2 border-t-2 border-t-monokaiBlue pt-2 lg:border-t-0">
            <AboutMe />
            <Education />
            <Publications />
          </section>
          <Experience className="w-full lg:w-2/5 border-t-2 border-t-monokaiBlue pt-2 lg:border-t-0 " />
        </div>
      </div>
    </div>
  );
}

export default Content;
