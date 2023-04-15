import { Navigation } from "./Navigation"
import styles from '../styles/Home.module.css'

export const HeadSection = ({ isVisibleCallback }: { isVisibleCallback: () => void }) => {
    return <section id="main" className="md:min-h-screen grid place-items-center">
        <Navigation></Navigation>
        <div className="w-full h-full overflow-hidden grow grid md:(grid-cols-2 px-40) items-center place-items-center">
            <div className="w-120 text-white relative text-lg order-2 md:order-0">
                <h1 className="font-bold italic text-5xl">whoami</h1>
                <div className="mt-3 space-y-3">
                    <div>
                        Developer passionate about new technologies. I value reliable software, so I tend to gravitate towards
                        type safe languages/tech stacks, reproducible environments (nix) and test critical parts of my software.
                        I'll be honest though, I'm not 'design guy' so don't judge my creations just by the way they look 🤣
                    </div>
                    <div className="flex gap-4">

                        <a
                            href="#techstack"
                            onClick={() => {
                                console.log("z")
                            }}
                            className={`${styles.neonButton} flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:(bg-[#FFFFFF55]) cursor-pointer`}>
                            Read More
                        </a>
                        <a
                            href="https://github.com/nxy7"
                            target="_blank"
                            onClick={() => {
                                console.log("z")
                            }}
                            className={`${styles.neonButton} flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:(bg-[#FFFFFF55]) cursor-pointer`}>
                            My GitHub <img src="github_logo.svg" alt="github icon" className="ml-3 h-8 w-8 " />
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center overflow-hidden pr-5">
                <img className="w-3/4 h-3/4 md:(h-full w-full) object-fit" src="undraw_feeling_proud.svg" />
            </div>
        </div>

        {/*
          <div className="flex space-x-40 mt-auto mb-20">
            <FrontButton href="#techstack">Tech Stack</FrontButton>
            <FrontButton href="#projects">My Projects</FrontButton>
            <FrontButton href="/blog">Blog</FrontButton>
          </div>
          */}
        {/* <BlurredBG />*/}
    </section>
}

