import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
const Hero = () => (
  <section
    id="home"
    className="h-[85vh] flex flex-col justify-center items-center bg-orange-100 opacity-0 px-2 sm:px-0"
    ref={useFadeInOnScroll()}
  >
    <img
      src="https://avatars.githubusercontent.com/u/122351771?v=4"
      alt="Avatar"
      className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-orange-200 animate-fadein"
      style={{ animationDelay: "0.4s" }}
    />
    <h2
      className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-500 animate-fadein"
      style={{ animationDelay: "0.4s" }}
    >
      Hi, I'm Xuân 👋
    </h2>
    <p
      className="max-w-md mx-auto text-center text-lg md:text-xl text-gray-700 mb-6 animate-fadein"
      style={{ animationDelay: "0.4s" }}
    >
      A passionate software engineering student who loves building web apps.
    </p>
    <a
      href="#projects"
      className="bg-gradient-to-r bg-orange-300 px-6 py-3 rounded-full shadow-lg hover:bg-orange-400 hover:text-white transition animate-fadein"
      style={{ animationDelay: "0.4s" }}
    >
      View My Work
    </a>
  </section>
);
export default Hero;
