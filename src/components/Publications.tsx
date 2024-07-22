const pubs = [
  {
    title:
      "Modulating non-native aggregation and electrostatic protein-protein interactions with computationally designed single-point mutations",
    authors: "O'Brien et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/27160179/",
    description:
      "The Roberts Lab had been using fortran simulation code to test protein-interactions with single-point mutations.  This was unwieldy to make changes to test new proteins or make new mutations, so I built a Java Swing application on top of this fortran code that allowed for easily running the simulation for any given protein and arbitrary point mutations.  This saves researchers days of time of adjusting files manually, and makes the simulation easily configurable.",
  },
  {
    title:
      "Finite Element Method (FEM) Modeling of Freeze-drying: Monitoring Pharmaceutical Product Robustness During Lyophilization",
    href: "https://pubmed.ncbi.nlm.nih.gov/25791415/",
    authors: "Chen et al.",
    description:
      "At Bristol-Myers-Squibb, I was part of a team that was looking to optimize the lyophilization process for pharamceuticals.  During this process, a significant amount of product is lost due to inefficient freezing.  I designed and performed experiments to gather data used to build more accurate simulations of this process, and save millions of dollars of product as a result of the optimizations.",
  },
];

export function Publications() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-monokaiBlue">Publications</h1>
      <section>
        <div className="flex flex-col gap-4">
          {pubs.map((pub) => (
            <div className="flex flex-col gap-2">
              <a
                className="text-lg underline"
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pub.title}
              </a>
              <p className="italic pl-4">{pub.authors}</p>
              <p className="pl-4">{pub.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
