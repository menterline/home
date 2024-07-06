type Props = {
  className?: string;
};
export function AboutMe(props: Props) {
  return (
    <section className={`${props.className} flex flex-col gap-8`}>
      <h1 className="text-4xl font-bold text-monokaiBlue">About Me</h1>
      <p>
        I am an experienced software engineer comfortable at working in all
        levels of the stack. From my roots in chemical engineering and building
        scientific software, I have since worked on projects ranging from C++
        linux services for network monitoring, to desktop financial reporting
        software, to a financial proposal application.
      </p>
      <p>
        My experience across the stack means I am comfortable tackling new
        problems, and learning new tools to accomplish the task ahead of me.
        Though I lead the UI development on my scrum team, I work closely with
        the API developers and find my backend and database experience very
        helpful in working together to build the best solution.
      </p>
      <p>
        I am especially passionate about software architecture and design, as
        well as automated testing. I believe that these concepts go hand in hand
        - as I have found in my career that 'testable' code is 'beautiful' code
        that was designed well. Furthermore, the cognitive load decrease that
        covering edge cases in automated tests frees the developer to invest in
        deep refactoring while maintaining confidence that the system will stay
        stable. For more of my thoughts on this, and other topics (to come),
        please see the blog section
      </p>
      <p>
        Outside of work, I enjoy running, watching Formula 1, NFL, and Soccer,
        spending time with my family, attempting to learn guitar, and playing
        video games.
      </p>
    </section>
  );
}
