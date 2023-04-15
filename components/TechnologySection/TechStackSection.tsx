import { Children } from "react"
import { technologies } from "./technologies_data"

export const TechStackSection = ({ children, isVisibleCallback }: { children?, isVisibleCallback: () => void }) => {
    const count = Children.count(children)
    return <>
        <section id="techstack" className="w-full py-10 flex flex-col items-center">
            <h2 className="text-5xl mb-10">Technologies I've Used</h2>
            <div className="flex gap-5 flex-wrap justify-center">
                {/* logos */}

                {Array.from(technologies.values()).map((e, ind) =>
                    <img key={ind} className="object-scale-down h-16 stroke-red" src={e.image} />
                )}
            </div>

        </section>
    </>
}
