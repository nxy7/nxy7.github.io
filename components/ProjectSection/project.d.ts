import { Technology } from "../TechnologySection/technology"

export type Project = {
    backgroundImg?: string
    title?: string
    liveLink?: string
    sourceCode?: string
    description?: string
    imageGallery?: string[]
    technologies: Technology[]
}

