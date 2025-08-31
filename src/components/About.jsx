import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const skills = [
  { name: "React", color: "bg-blue-100 text-blue-700" },
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-700" },
  { name: "Python", color: "bg-green-100 text-green-700" },
  { name: "C++", color: "bg-gray-100 text-gray-700" },
  { name: "SQL", color: "bg-indigo-100 text-indigo-700" },
  { name: "MongoDB", color: "bg-green-200 text-green-800" },
  { name: "DSA", color: "bg-pink-100 text-pink-700" },
  { name: "Git", color: "bg-orange-100 text-orange-700" },
  { name: "GitHub", color: "bg-gray-300 text-gray-700" },
  { name: "Math & Logic", color: "bg-purple-100 text-purple-700" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-white opacity-0 max-w-6xl mx-auto text-center px-4"
      ref={useFadeInOnScroll()}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-orange-500">
        About me
      </h3>

      <p className="text-base sm:text-lg">
        I am{" "}
        <span className="font-semibold text-orange-500">
          currently studying Computer Science
        </span>{" "}
        at{" "}
        <span className="font-semibold text-blue-600">
          Ho Chi Minh City University of Technology (HCMUT)
        </span>
        . I am{" "}
        <span className="font-semibold text-green-600">
          passionate about Web Development
        </span>{" "}
        and have a strong desire to grow as a full-stack developer, with the
        goal of building impactful and meaningful web applications. Beyond
        coding, I find great joy in the beauty of math and logic, especially in
        the way they are present in everything around us.
      </p>
      <div className="flex flex-wrap gap-2 justify-center mt-4 sm:mt-6">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-3 py-1 rounded-full text-sm font-semibold shadow ${skill.color}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
