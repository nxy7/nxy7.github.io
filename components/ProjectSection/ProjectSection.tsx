import { useState } from "react"
import { Project } from "./project"
import ProjectShowcase from "./ProjectShowcase"
import { projects } from "./projects_data"

export const ProjectsSection = ({ children, isVisibleCallback }: { children?, isVisibleCallback: () => void }) => {
  const [selectedProject, setSelectedProject] = useState(0)

  return <>
    <section id="projects" style={{
    }} className="flex flex-col w-full items-center">

      <h2 className="text-5xl mb-10">My Projects</h2>
      <div>
        <div className="flex space-x-4 flex-wrap justify-center">
          {projects.map((project, index) => {
            return <button key={index} onClick={() => {
              setSelectedProject(index)
            }}
              className="px-4 py-3 text-white bg-transparent border-0 cursor-pointer text-2xl duration-200 
                            underline! underline-offset-3 decoration-0
                            hover:(underline-offset-8 decoration-2 decoration-orange-500)
                            focus:(underline-offset-3 decoration-2 decoration-orange-500)
                            active:(underline-offset-5)
                            ">
              {project.title}
            </button>
          })}
        </div>
      </div>

      <div style={{
      }} className="h-full w-full flex flex-col items-center mt-6">
        <ProjectShowcase project={projects[selectedProject]}></ProjectShowcase>
      </div>
    </section>
  </>
}
