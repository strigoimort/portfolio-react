const projects = [
  {
    title: "Segmentation Customer with RFM Analysis",
    img: "/img/Segmentation Customer with Recency, Frequency, and Monetary (RFM) Analysis.jpg",
    link: "https://github.com/strigoimort/segmentation-customer-with-rfm-analysis",
    desc: "Comprehensive approach to customer segmentation using RFM (Recency, Frequency, Monetary) analysis.",
  },
  {
    title: "Account Segmentation of Partner Ledger",
    img: "/img/Account Segmentation of Partner Ledger.jpg",
    link: "https://github.com/strigoimort/account-segmentation-of-partner-ledger",
    desc: "Categorize accounts based on predefined criteria for structured insights.",
  },
  {
    title: "Customer Behavior for E-commerce Conversion",
    img: "/img/Customer Behavior for E-commerce Conversion.jpg",
    link: "https://github.com/strigoimort/customer-behavior-for-e-commerce-conversion",
    desc: "Explore insights from user interactions and conversion funnels.",
  },
  {
    title: "Cost-Effectiveness Analysis of Employee Payroll Scheme",
    img: "/img/Cost-Effectiveness Analysis of Employee Payroll Scheme.jpg",
    link: "https://github.com/strigoimort/cost-effectiveness-analysis-of-employee-payroll-scheme",
    desc: "Evaluate financial efficiency of payroll strategies.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-2 pb-16 scroll-mt-20">
      <div className="container">

        {/* TITLE */}
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h1 className="mb-4 font-bold text-primary text-3xl lg:text-5xl">
              Portfolio
            </h1>
            <p className="text-md font-normal text-secondary md:text-lg">
              Click on the project title for detailed info. It will take you to my GitHub.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {projects.map((project, index) => (

            <div key={index} className="mb-8 px-8 md:w-1/2">

              <div className="overflow-hidden rounded-md shadow-md hover:transform hover:scale-105 transition duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full"
                />
              </div>

              <h3 className="mt-5 mb-3 text-xl lg:text-2xl font-semibold text-primary hover:opacity-80 transition duration-500">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <p className="text-base lg:text-lg text-secondary">
                {project.desc}
              </p>

            </div>

          ))}
        </div>

        {/* MORE PROJECT */}
        <div className="h-12">
          <div className="mx-auto flex justify-center">
            <a
              href="https://github.com/strigoimort?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary hover:text-slate-600 transition duration-500"
            >
              More project...
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}