import { Project } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link, image }: Project) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="p-4 bg-nebula/20 rounded-lg shadow-lg"
    >
      {image && <img src={image} alt={title} className="mb-2 rounded" />}
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <a href={link} className="text-nebula">View Project</a>
    </motion.div>
  );
}