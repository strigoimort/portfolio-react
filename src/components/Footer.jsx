import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinktree } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/strigoimort/",
    icon: <FaGithub className="w-5 h-5" />,
    color: "hover:bg-black",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/petriksiano/",
    icon: <FaLinkedin className="w-5 h-5" />,
    color: "hover:bg-[#0A66C2]",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/petriksiano/",
    icon: <FaInstagram className="w-5 h-5" />,
    color: "hover:bg-[#E4405F]",
  },
  {
    name: "Email",
    link: "mailto:petriksiano24@gmail.com",
    icon: <MdEmail className="w-5 h-5" />,
    color: "hover:bg-primary",
  },
  {
    name: "Linktree",
    link: "https://linktr.ee/petriksiano/",
    icon: <SiLinktree className="w-5 h-5" />,
    color: "hover:bg-green-500",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark pb-10">
      <div className="container">
        <div className="w-full border-t border-slate-700 pt-10 flex flex-col items-center">

          {/* SOCIAL */}
          <div className="mb-6 flex items-center justify-center space-x-4">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full 
                border border-slate-600 text-slate-300 
                transition-all duration-300 
                hover:text-white hover:scale-110 ${item.color}`}
              >
                {item.icon}

                {/* TOOLTIP */}
                <span className="absolute bottom-12 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* TEXT */}
          <p className="text-center text-xs font-medium text-slate-500">
            Thank you for visiting my portfolio website. Have a nice day!
          </p>

        </div>
      </div>
    </footer>
  );
}