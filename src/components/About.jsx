export default function About() {
  return (
    <section id="about" className="px-8 lg:px-32 mb-16 text-center max-w-4xl mx-auto">
      
      <h1 className="text-primary font-bold text-3xl lg:text-5xl mb-6">
        About Me
      </h1>

      <p className="text-lg mb-4">
        I specialize in <span className="text-primary font-semibold">Supply Chain</span>, 
        focusing on shipment execution, stock monitoring, and data-driven forecasting.  Outside of work, I explore <span className="text-primary font-semibold">JavaScript </span> 
        to build analytical tools and web-based solutions.
      </p>

      <p className="text-lg italic mb-6">
        My goal is to bring data-driven thinking into the maritime industry!
      </p>

      <a
        href="/doc/Resume - Petrik Siano Okta Prima Lesmana.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white px-5 py-2 rounded-lg hover:opacity-80"
      >
        View Resume
      </a>

    </section>
  );
}