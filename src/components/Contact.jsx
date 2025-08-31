import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
const contactLinks = [
  {
    name: "Email",
    url: "mailto:xuan@example.com",
    icon: (
      <svg
        className="h-8 w-8 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/aniycian/",
    icon: (
      <svg
        className="h-8 w-8 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anh-xuan/",
    icon: (
      <svg
        className="h-8 w-8 text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.002 3.6 4.604v5.592z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/nguyenleanhxuan",
    icon: (
      <svg
        className="h-8 w-8 text-gray-800"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const Contact = () => (
  <section id="contact" className="py-20 bg-white" ref={useFadeInOnScroll()}>
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-orange-500">
        Contact Me
      </h3>
      <p className="text-lg text-gray-700 mb-8">
        Feel free to reach out for collaboration or just a friendly hello 👋
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-2 sm:mb-4">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:scale-110 transition-transform"
          >
            <span className="mb-2">{link.icon}</span>
            <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-orange-500">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
export default Contact;
