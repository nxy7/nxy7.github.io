export type ProjectCardProps = {
    backgroundImg?: string
    title?: string
    liveLink?: string
    sourceCode?: string
    technologies: string[]
}
export default function ProjectCard(props: ProjectCardProps) {
    return <>
        <div className="relative w-full aspect-square rounded-sm overflow-hidden duration-300 group hover:(bg-opacity-0)">
            <div style={{
                backgroundImage: `url(${props.backgroundImg && props.backgroundImg || ""})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} className="absolute top-0 w-full h-full duration-300 group-hover:(blur-sm)"></div>
            <div className="text-2xl p-6 relative group-hover:() ">
                {props.title}
            </div>
        </div>
    </>
}