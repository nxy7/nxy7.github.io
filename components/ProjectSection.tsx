import { useState } from "react"

type Project = {
    backgroundImg?: string
    title?: string
    liveLink?: string
    sourceCode?: string
    description?: string
    technologies: string[]
}
export const ProjectsSection = ({ children, isVisibleCallback }: { children?, isVisibleCallback: () => void }) => {
    const projects: Project[] = [
        { title: "Mediujemy", technologies: [], backgroundImg: "mediujemy.png" },
        { title: "StockBuddy", technologies: [], backgroundImg: "mediujemy.png" },
        { title: "Streampai", technologies: [], backgroundImg: "mediujemy.png" },
    ]
    const [selectedProject, setSelectedProject] = useState(0)

    return <>
        <section id="projects" style={{
        }} className="flex flex-col w-full items-center">

            <h2 className="text-5xl mb-10">My Projects</h2>
            <div>
                <div className="flex space-x-4">
                    {projects.map((project, index) => {
                        return <button key={index} onClick={() => {
                            setSelectedProject(index)
                        }} className="px-4 py-3">{project.title}</button>
                    })}
                </div>
            </div>

            <div style={{
            }} className="h-full w-full">
                {projects[selectedProject].title}
            </div>
        </section>
    </>
}
