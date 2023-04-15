import { Project } from "./project";

export default function ProjectShowcase({ project }: { project: Project }) {

    return <>
        <div>
            {project.title}
        </div>
    </>
} 