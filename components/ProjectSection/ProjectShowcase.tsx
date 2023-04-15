import { Project } from "./project";
import { Children } from 'react'

export default function ProjectShowcase({ project }: { project: Project }) {

    return <>
        <div className="flex flex-col items-center w-fit">
            <div className="w-120 lg:w-180 space-y-4">
                <div>
                    <div className="font-semibold mb-1">
                        Project description:
                    </div>
                    <div>
                        {project.description}
                    </div>
                </div>
                <div>
                    <div className="font-semibold mb-1">
                        Technologies used:
                    </div>
                    <div className="flex space-x-3">
                        {project.technologies.map((tech, ind) => {
                            return <>
                                <img key={ind} src={tech.image} alt="" className="h-10" />
                            </>
                        })}
                    </div>

                </div>
            </div>
            <div className="group mt-4 grid place-items-center relative w-140 rounded-md aspect-video overflow-hidden">
                <div className="flex flex-col space-y-4 z-10 opacity-0 duration-350 group-hover:(opacity-100)">
                    {project.liveLink && <NavigationButton link={project.liveLink}>
                        watch live
                    </NavigationButton>}
                    {project.sourceCode && <NavigationButton link={project.sourceCode}>
                        source code<img src="github_logo.svg" alt="github icon" className="ml-3 h-8 w-8 " />
                    </NavigationButton>}
                </div>
                <img src={project.backgroundImg} alt=""
                    className="duration-350 absolute top-0 w-full h-full object-cover z-5
                        group-hover:(blur-sm saturate-50)
                        "
                />
            </div>

        </div>
    </>
}

function NavigationButton({ link, children }: { link: string, children: any }) {
    return <a href={link} className="px-4 py-2 bg-slate-900 bg-opacity-70 hover:bg-opacity-90 duration-150 rounded-md text-white flex items-center justify-center font-bold text-xl">
        {children}
    </a>
}