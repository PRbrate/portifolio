import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Portfolio() {
  const skills = [
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: ".NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  const projects = [
    {
      title: "Sistema de gestão para barbearias",
      description: "App completo em .NET + React com JWT e PostgreSQL.",
      link: "https://github.com/PRbrate/BarberShop",
    },
    {
      title: "Listagem de Imóveis Caixa",
      description: "Site para busca de Imóveis",
      link: "https://prbrate.github.io/Front-caixa/",
    },
    {
      title: "Projeto de constrole de acesso",
      description: "Aplicativo mobile para controle de acesso a eventos",
      link: "https://github.com/PRbrate/AccessControlFront",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Paulo Roberto
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8 max-w-xl mx-auto opacity-90"
        >
          Desenvolvedor Fullstack especializado em C#, .NET, React e soluções
          modernas com Docker e PostgreSQL.
        </motion.p>
        <motion.a
          href="#contato"
          whileHover={{ scale: 1.1 }}
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
        >
          Entre em contato
        </motion.a>
      </section>

      {/* Sobre mim */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Foto perfil"
          className="rounded-2xl shadow-lg w-80 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Olá! Sou desenvolvedor fullstack apaixonado por tecnologia e criação
            de soluções escaláveis. Trabalho com <strong>C#/.NET</strong>,{" "}
            <strong>React</strong>, <strong>React Native</strong>,{" "}
            <strong>TypeScript</strong>,<strong> TailwindCSS</strong>,{" "}
            <strong>PostgreSQL</strong> e <strong>Docker</strong>. Gosto de
            transformar ideias em produtos reais.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Minhas Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-2xl transition"
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                <span className="font-semibold text-gray-700">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 font-medium hover:underline"
              >
                Ver projeto →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Vamos conversar?</h2>
        <p className="mb-10 text-lg">
          Entre em contato comigo através dos canais abaixo:
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="mailto:paulofacul01@gmail.com"
            className="hover:text-yellow-300"
          >
            <Mail size={32} />
          </a>
          <a
            href="https://wa.me/5575983127338?text=Olá%2C%20vamos%20falar%20sobre%20Projetos?"
            className="hover:text-yellow-300"
          >
            <Phone size={32} />
          </a>
          <a
            href="https://github.com/PRbrate"
            target="_blank"
            className="hover:text-yellow-300"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/recs/received/?senderId=paulo-roberto-brand%C3%A3o-48729a211"
            target="_blank"
            className="hover:text-yellow-300"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>
          © {new Date().getFullYear()} Paulo Roberto - Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
