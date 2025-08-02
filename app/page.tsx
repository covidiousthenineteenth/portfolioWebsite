"use client";

import { projects, experiences, educations, certifications, skills, funFacts } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsRadar from "@/components/SkillsRadar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container mx-auto p-8 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to My Cosmic Portfolio</h1>
        <p className="text-xl">Exploring code like stars in the universe. Let's connect!</p>
        <img src="/profile.jpg" alt="Your Photo" className="mx-auto rounded-full w-32 h-32 mt-4" />
      </motion.section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <ExperienceTimeline items={experiences} />
      </section>

      {/* Education */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <ExperienceTimeline items={educations} />
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, color: "#ffff00" }}
              className="p-4 bg-nebula/20 rounded-lg"
            >
              <h3 className="font-bold">{cert.name}</h3>
              <p>{cert.issuer} - {cert.date}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <SkillsRadar data={skills} />
      </section>

      {/* Fun Facts */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Fun Facts</h2>
        <ul className="space-y-2">
          {funFacts.map((fact, index) => (
            <li key={index} className="italic">{fact}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p>Email: <a href="mailto:your.email@example.com" className="text-nebula">your.email@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" className="text-nebula">linkedin.com/in/yourusername</a></p>
      </section>
    </main>
  );
}