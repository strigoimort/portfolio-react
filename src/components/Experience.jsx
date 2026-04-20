const experiences = [
  {
    title: "Purchasing Import",
    company: "PT Pangan Lestari",
    link: "https://www.panganlestari.co.id/",
    period: "Mar 2024 - Present",
    desc: "Analyzed stock levels, coordinated vessel schedules, and managed product data to support better forecasting.",
    img: "/img/import.svg",
  },
  {
    title: "Business Development",
    company: "GAOTek Inc.",
    link: "https://gaotek.com/",
    period: "Nov 2023 - Dec 2023",
    desc: "Supported lead generation and strategy execution through market research and cross-team collaboration.",
    img: "/img/businessman.svg",
  },
  {
    title: "Data Analytics for Business",
    company: "Bitlabs Academy",
    link: "https://academy.bitlabs.id/",
    period: "Feb 2023 - Jun 2023",
    desc: "Built dashboards and performed end-to-end analysis using Python and SQL to solve business problems.",
    img: "/img/analyst.svg",
  },
  {
    title: "GIS Analyst",
    company: "Kedaireka.id",
    link: "https://kedaireka.id",
    period: "Aug 2022 - Dec 2022",
    desc: "Performed aquaculture planning by conducting ocean surveys and managing spatial data.",
    img: "/img/gis.svg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-12 pb-20">
      <div className="container">

        {/* Title */}
        <h1 className="text-primary font-bold text-3xl lg:text-5xl mb-10 text-center">
          Experience
        </h1>

        {/* Cards */}
        <div className="flex flex-wrap justify-center">
          {experiences.map((exp, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-10">
              
              <div className="flex flex-wrap items-center">
                
                {/* IMAGE */}
                <div className="hidden lg:block lg:w-1/2">
                  <img src={exp.img} alt={exp.title} className="mx-auto w-60 lg:w-72" />
                </div>

                {/* TEXT */}
                <div className="w-full lg:w-1/2 lg:pl-6">
                  <h2 className="text-lg font-bold">{exp.title}</h2>

                  <p className="text-gray-600">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:opacity-80"
                    >
                      {exp.company}
                    </a>
                  </p>

                  <p>
                    <i>{exp.period}</i>
                  </p>

                  <p className="mt-2">{exp.desc}</p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}