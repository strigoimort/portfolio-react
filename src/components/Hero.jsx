export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start px-8 -mt-6"
    >
      <div className="container">
        <div className="flex flex-wrap items-center">

          {/* TEXT */}
          <div className="w-full md:w-1/2 lg:pl-24">

            <h1 className="text-secondary font-semibold text-2xl lg:text-5xl animate-left">
              Hello there! 👋
            </h1>

            <p className="pt-2 animate-left-delay-1">
              <span className="text-secondary text-2xl lg:text-5xl font-semibold">
                I am
              </span>{" "}
              <span className="text-3xl lg:text-5xl font-bold text-primary">
                Petrik Siano
              </span>
            </p>

            <p className="pt-2 text-secondary text-xl animate-left-delay-2">
              Sailing between{" "}
              <span className="text-primary font-bold">Data 📈</span> and{" "}
              <span className="text-primary font-bold">Maritime Ops ⚓</span>
            </p>

            {/* CTA */}
            <div className="mt-6 animate-left-delay-3">
              <a
                href="#portfolio"
                className="bg-primary text-white px-5 py-2 rounded-lg mr-3 
                hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="border border-primary text-primary px-5 py-2 rounded-lg 
                hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 animate-right">
            <svg
              className="w-full sm:w-100 md:w-full lg:w-full xl:w-125 drop-shadow-[0_0_25px_rgba(90,79,192,0.3)]"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clipPath">
                  <path
                    d="M50,-68.8C64.6,-58.3,75.8,-43.3,82.3,-26.1C88.7,-8.9,90.2,10.4,84.6,27.5C79.1,44.5,66.3,59.1,51,70.6C35.7,82,17.9,90.2,-0.1,90.3C-18,90.5,-36.1,82.5,-51.3,71C-66.5,59.5,-78.8,44.6,-85.3,27.1C-91.7,9.7,-92.3,-10.2,-86,-27.5C-79.7,-44.7,-66.7,-59.2,-51.2,-69.4C-35.7,-79.6,-17.9,-85.4,-0.1,-85.3C17.8,-85.2,35.5,-79.3,50,-68.8Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>

              <image
                href="/img/petrik_crop_ijen.jpg"
                clipPath="url(#clipPath)"
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}