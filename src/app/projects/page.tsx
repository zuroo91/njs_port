"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Laptop } from "lucide-react";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      <div className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            My <span className="text-rose-600">Projects</span>
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            A showcase of the works and experiments I’ve built.
          </p>
          <span className="block w-20 h-1 bg-rose-500 mx-auto mt-5 rounded-full"></span>
        </motion.div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md 
                         hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col"
            >
              <div className="h-40 w-full bg-gradient-to-r from-rose-400/80 to-pink-500/80 flex items-center justify-center">
                <Laptop
                  size={50}
                  className="text-white opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 
                               group-hover:text-rose-600 transition">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 
                               bg-gradient-to-r from-rose-500 to-pink-500 
                               text-white font-semibold rounded-xl shadow-md 
                               hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
