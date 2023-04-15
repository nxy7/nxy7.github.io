import { Children } from "react"

export const TechStackSection = ({ children, isVisibleCallback }: { children?, isVisibleCallback: () => void }) => {
    const count = Children.count(children)
    return <>
        <section id="techstack" className="w-full py-10 flex flex-col items-center">
            <h2 className="text-5xl mb-10">Technologies I Use</h2>
            <div className="flex space-x-5">
                {/* logos */}

                {["Typescript_logo_2020.svg", "Go-Logo_Blue.svg", "rust_logo.svg", "docker-svgrepo-com.svg", "nix_logo.svg"].map((e, ind) =>
                    <img key={ind} className="object-scale-down h-16 stroke-red" src={e} />
                )}
            </div>

        </section>
    </>
}
