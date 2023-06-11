import { Navigation } from "./Navigation"
import styles from '../styles/Home.module.css'

export const HeadSection = ({ isVisibleCallback }: { isVisibleCallback: () => void }) => {
  return <section id="main" className="grid place-items-center">
    {/* <Navigation></Navigation> */}
    <div className="w-full min-h-screen grid gap-7 p-3 mt-10 lg:(mt-0 grid-cols-2) place-items-center">
      <div className="max-w-140 text-white relative text-lg min-h-90">
        <h1 className="font-bold italic text-5xl">whoami</h1>
        <div className="mt-3 space-y-3">
          <div>
            Developer passionate about new technologies. I value reliable software, so I tend to gravitate towards
            type safe languages/tech stacks, reproducible environments (nix) and test critical parts of my software.
          </div>
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#techstack"
              onClick={() => {
                console.log("z")
              }}
              className={`${styles.neonButton} flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:(bg-[#FFFFFF55]) cursor-pointer`}>
              Read More
            </a>
            <a
              href="/personal_blog"
              onClick={() => {
                console.log("z")
              }}
              className={`${styles.neonButton} flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:(bg-[#FFFFFF55]) cursor-pointer`}>
              Blog
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
      <div className="grid place-items-center overflow-hidden">
        <img className="h-full w-full object-fit" src="undraw_feeling_proud.svg" />
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

