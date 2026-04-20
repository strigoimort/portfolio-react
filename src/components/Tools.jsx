const tools = [
  { name: "Excel", img: "/img/excel.svg" },
  { name: "Google BigQuery", img: "/img/googlebigquery.svg" },
  { name: "HTML", img: "/img/html.svg" },
  { name: "CSS", img: "/img/css.svg" },
  { name: "JavaScript", img: "/img/javascript.svg" },
  { name: "Python", img: "/img/python.svg" },
  { name: "R", img: "/img/r.svg" },
  { name: "IDL", img: "/img/idl.svg" },
  { name: "Tableau", img: "/img/tableau.svg" },
  { name: "Power BI", img: "/img/powerbi.svg" },
];

export default function Tools() {
  return (
    <section id="tools" className="pb-20">
      <div className="container">

        {/* TITLE */}
        <div className="w-full px-4">
          <div className="mx-auto mb-8 text-center">
            <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-primary">
              Working Tools
            </h1>
          </div>
        </div>

        {/* ICONS */}
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">

            {tools.map((tool, index) => (
              <div
                key={index}
                className="mx-4 py-2 w-10 overflow-hidden transform transition duration-300 hover:scale-110"
                title={tool.name}
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="filter brightness-110"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}