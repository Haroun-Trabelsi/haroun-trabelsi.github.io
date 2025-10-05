"use client";

import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="space-y-8">
      {/* Project showcase header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <Badge variant="outline" className="font-pixel text-sm">
            FEATURED WORK
          </Badge>
          <Badge variant="outline" className="font-pixel text-sm">
            {projects.length} PROJECTS
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of projects that showcase my expertise in modern web development
        </p>
      </div>

      {/* Featured projects in vertical strip */}
      <div className="space-y-12 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={itemVariants}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : index * 0.2,
              ease: "easeOut",
            }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : { y: -4, scale: 1.01, transition: { duration: 0.3 } }
            }
          >
            {/* Scaled down project card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-card/80 to-card/60 hover:from-card to-card/90 transition-all duration-500 shadow-md hover:shadow-lg w-full group-hover:shadow-primary/5">
              <ProjectCard {...project} />
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Project status indicator */}
              <div className="absolute top-4 right-4">
                <Badge 
                  variant="outline" 
                  className="font-pixel text-xs bg-background/95 backdrop-blur-md px-3 py-1 border-primary/30 hover:border-primary/60 transition-colors duration-300"
                >
                  {project.status || 'COMPLETED'}
                </Badge>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center space-x-4 bg-card/50 border-2 border-primary/20 rounded-lg px-6 py-4"
        >
          <span className="font-pixel text-primary text-sm">MORE PROJECTS</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-muted-foreground text-sm">Available on GitHub</span>
        </motion.div>
      </div>
    </div>
  );
}
