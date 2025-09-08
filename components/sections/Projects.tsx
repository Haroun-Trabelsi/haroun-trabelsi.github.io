"use client";

import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={itemVariants}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.4,
            delay: prefersReducedMotion ? 0 : index * 0.08,
            ease: "easeOut",
          }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -4, scale: 1.01, transition: { duration: 0.15 } }
          }
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
}
