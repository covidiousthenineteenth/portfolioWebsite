import { Experience } from "@/lib/data";
import { motion } from "framer-motion";

interface Props {
  items: Experience[];
}

export default function ExperienceTimeline({ items }: Props) {
  return (
    <ul className="space-y-8">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-4 before:h-4 before:bg-star before:rounded-full"
        >
          <h3 className="font-bold">{item.title} at {item.company}</h3>
          <p className="text-sm">{item.period}</p>
          <p>{item.description}</p>
        </motion.li>
      ))}
    </ul>
  );
}