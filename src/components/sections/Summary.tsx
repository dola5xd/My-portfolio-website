import SectionHead from "../ui/SectionHead";

function Summary() {
  return (
    <div className="flex-col hidden py-10 md:p-10 lg:items-center md:flex lg:p-20 gap-y-3">
      <SectionHead animate={false}>Summary</SectionHead>
      <p className="z-0 text-sm text-gray-400 lg:text-center lg:text-lg lg:text-balance">
        I’m a passionate web developer with a strong focus on building dynamic
        and responsive web applications using Next.js, React, Tailwind CSS, and
        other modern technologies. I love tackling complex problems, optimizing
        performance, and enhancing accessibility. When I’m not coding, I explore
        new tech trends, contribute to open-source projects, and share knowledge
        with the developer community. Let’s connect and create something amazing
        together!
      </p>
    </div>
  );
}

export default Summary;
