import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
const projects = [
  {
    name: "WEB_BASIC",
    description:
      "Tổng hợp các bài thực hành web cơ bản: HTML, CSS, JavaScript, responsive, layout, form, v.v.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nguyenleanhxuan/WEB_BASIC",
    demo: "",
    image: "/public/web_basic-thumb.png", // Thay bằng ảnh thật nếu có
  },
  {
    name: "Transation_Report",
    description:
      "Ứng dụng quản lý và báo cáo giao dịch, sử dụng React, Node.js, MongoDB. Hỗ trợ xuất báo cáo, lọc dữ liệu.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/nguyenleanhxuan/Transation_Report",
    demo: "",
    image: "/public/transation_report-thumb.png", // Thay bằng ảnh thật nếu có
  },
  {
    name: "Text Buffer Rope",
    description:
      "Cài đặt cấu trúc dữ liệu Rope để quản lý và thao tác chuỗi văn bản hiệu quả bằng C++.",
    tech: ["C++"],
    github:
      "https://github.com/nguyenleanhxuan/IMPLEMENT-A-SIMPLE-TEXT-BUFFER-USING-ROPE-DATA-STRUCTURE",
    demo: "",
    image: "/public/rope-buffer-thumb.png", // Thay bằng ảnh thật nếu có
  },
];

const techIcons = {
  React: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="React"
      className="h-6 w-6 inline mx-1"
    />
  ),
  JavaScript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      alt="JS"
      className="h-6 w-6 inline mx-1"
    />
  ),
  Nodejs: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      className="h-6 w-6 inline mx-1"
    />
  ),
  "Node.js": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      className="h-6 w-6 inline mx-1"
    />
  ),
  MongoDB: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      className="h-6 w-6 inline mx-1"
    />
  ),
  Python: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      alt="Python"
      className="h-6 w-6 inline mx-1"
    />
  ),
  HTML: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      alt="HTML"
      className="h-6 w-6 inline mx-1"
    />
  ),
  CSS: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      alt="CSS"
      className="h-6 w-6 inline mx-1"
    />
  ),
  TailwindCSS: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      alt="Tailwind"
      className="h-6 w-6 inline mx-1"
    />
  ),
  "C++": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      alt="C++"
      className="h-6 w-6 inline mx-1"
    />
  ),
};

const Project = () => (
  <section
    id="projects"
    className="py-20 bg-orange-100 opacity-0"
    ref={useFadeInOnScroll()}
  >
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-orange-500">
        Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white shadow-md rounded-2xl p-4 sm:p-6 hover:shadow-xl transition border border-orange-100 flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 border"
              loading="lazy"
            />
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-orange-500 text-center">
              {project.name}
            </h4>
            <p className="text-gray-600 mb-2 sm:mb-4 text-center text-sm sm:text-base">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap justify-center">
              {project.tech.map((tech) => (
                <span key={tech}>{techIcons[tech] || tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/nguyenleanhxuan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  </section>
);

export default Project;
